MERN Stack AI-Powered Web Application
This project demonstrates how to build a powerful AI-powered web application using the MERN Stack and the Deepseek R1 model, running inference on the Groq API for ultra-fast AI responses. It integrates React, Node.js, Express, and MongoDB to create an AI chatbot or content generation tool.


Tech Stack:
MongoDB – NoSQL database for storing AI interactions
Express.js – Backend framework for handling requests
React.js – Frontend library for building dynamic user interfaces
Tailwind CSS – Utility-first CSS framework for responsive design
Node.js – JavaScript runtime for server-side development
Deepseek R1 – Open-weight AI model for content generation and chatbot capabilities
Groq API – Fast and efficient AI inference engine
Project Setup
Prerequisites:
Node.js (v16 or higher)
MongoDB (Local or Cloud instance)
Groq API Key
Tailwind CSS
Installation:
Clone this repository:

Install dependencies:

Backend (Node.js, Express):
cd backend
npm install
Frontend (React, Tailwind CSS):
cd frontend
npm install
Set up your Groq API key in the .env file in the backend directory:

GROQ_API_KEY=your-groq-api-key
Run the backend server:

cd backend
npx nodemon
Run the frontend development server:

cd frontend
npm run dev
Open the app in your browser:

Frontend: http://localhost:5173
Backend: http://localhost:3000/ai/get-review
Code & Resources:
GitHub Repo: genai_mern_project
Groq API Docs: Groq API Docs
Node.js Docs: Node.js Docs
Tailwind CSS Docs: Tailwind CSS Docs
