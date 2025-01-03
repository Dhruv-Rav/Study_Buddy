import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const QuizModal = ({ isOpen, onRequestClose, text }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const response = await fetch('http://localhost:5001/generate_quiz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
        });
        const data = await response.json();
        if (data.questions) {
          setQuestions(data.questions);
        } else {
          setQuestions([]);
        }
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
        setQuestions([]);
      }
    };

    if (isOpen) {
      fetchQuizQuestions();
    }
  }, [isOpen, text]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Quiz Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="quiz-modal">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          questions.length > 0 ? (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">{questions[currentQuestion].questionText}</div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="no-questions">No questions available.</div>
          )
        )}
      </div>
    </Modal>
  );
};

// Define prop types for QuizModal
QuizModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default QuizModal;