import PropTypes from 'prop-types';
import { UploadCloud } from 'lucide-react';

export function FileUploader({ onFileUpload }) {
  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:5000/summarize', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (response.ok) {
          onFileUpload(data.summary);
        } else {
          onFileUpload('An error occurred while summarizing the document. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error); // Log the error
        onFileUpload('An error occurred while summarizing the document. Please try again.');
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        id="file-upload"
        className="sr-only"
        onChange={handleFileChange}
        accept=".txt,.pdf,.doc,.docx"
      />
      <label htmlFor="file-upload">
        <span className="flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer p-2 bg-gray-700 rounded-full">
          <UploadCloud className="h-6 w-6 text-white" />
          <span className="sr-only">Upload file</span>
        </span>
      </label>
    </div>
  );
}

// Define prop types for FileUploader
FileUploader.propTypes = {
  onFileUpload: PropTypes.func.isRequired, // Ensure onFileUpload is a required function
};

// import PropTypes from 'prop-types';
// import { UploadCloud } from 'lucide-react';

// export function FileUploader({ onFileUpload }) {
//   const handleFileChange = async (event) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         const response = await fetch('http://localhost:5000/summarize', {
//           method: 'POST',
//           body: formData,
//         });
//         const data = await response.json();
//         if (response.ok) {
//           onFileUpload(data.summary);
//         } else {
//           onFileUpload('An error occurred while summarizing the document. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error:', error); // Log the error
//         onFileUpload('An error occurred while summarizing the document. Please try again.');
//       }
//     }
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         id="file-upload"
//         className="sr-only"
//         onChange={handleFileChange}
//         accept=".txt,.pdf,.doc,.docx"
//       />
//       <label htmlFor="file-upload">
//         <span className="flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer p-2 bg-gray-700 rounded-full">
//           <UploadCloud className="h-6 w-6 text-white" />
//           <span className="sr-only">Upload file</span>
//         </span>
//       </label>
//     </div>
//   );
// }

// // Define prop types for FileUploader
// FileUploader.propTypes = {
//   onFileUpload: PropTypes.func.isRequired, // Ensure onFileUpload is a required function
// };