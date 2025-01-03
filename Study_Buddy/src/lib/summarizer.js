export async function summarizeDocument(text) {
    try {
        const response = await fetch('http://localhost:5000/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }

        return data.summary;
    } catch (error) {
        console.error('Error:', error);
        return 'An error occurred while summarizing the document. Please try again.';
    }
}