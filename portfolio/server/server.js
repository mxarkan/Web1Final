const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Create responses directory if it doesn't exist
const responsesDir = path.join(__dirname, '..', 'contact-form-responses');
if (!fs.existsSync(responsesDir)) {
    fs.mkdirSync(responsesDir, { recursive: true });
}

app.use(cors());
app.use(express.json());

// Save form submission
app.post('/api/submit-form', (req, res) => {
    try {
        const formData = req.body;
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileName = `response-${timestamp}.json`;
        const filePath = path.join(responsesDir, fileName);
        
        fs.writeFileSync(filePath, JSON.stringify(formData, null, 2));
        
        res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ success: false, message: 'Error saving form data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Responses will be saved to: ${responsesDir}`);
});
