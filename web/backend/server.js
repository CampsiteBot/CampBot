const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('cross-spawn');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/check_availability', async (req, res) => {
  const { campground, startDate, endDate } = req.body;

  try {
    console.log('Request received:', req.body);

    // Update this line to use python3 explicitly
    const pythonProcess = spawn('python3', ['./scripts/scraper.py', campground, startDate, endDate]);

    pythonProcess.stdout.on('data', (data) => {
      const output = data.toString().trim();
      console.log('Python Script Output:', output);
      res.json({ output });
    });

    pythonProcess.stderr.on('data', (data) => {
      const error = data.toString().trim();
      console.error('Python Script Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });

    pythonProcess.on('error', (error) => {
      console.error('Failed to start Python script:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });

    pythonProcess.on('exit', (code) => {
      console.log('Python script exited with code:', code);
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
