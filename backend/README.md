 
# Parkinson's Detection

Web app that combines a spiral drawing, a voice recording, and a symptom questionnaire to give a Parkinson's screening prediction (demo project, not a medical tool).

## Run the backend
```bash
cd backend
py -3.10 -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Run the frontend
```bash
cd frontend
npm install
npm start
```
Open http://localhost:3000 (backend must be running on port 5000).

Note: ffmpeg may be needed for .webm audio.