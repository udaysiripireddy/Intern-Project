To set up a MERN stack project with Vite for the frontend (React) and Node.js with Express.js for the backend, follow these steps. This guide will walk you through setting up both parts in separate terminals and starting the development environment.


1. Setting up the Frontend with Vite and React
Step 1: Install Vite and create a new React project
Open your terminal and run the following commands:
 npm create vite@latest 
Then provide the project name {vite-react} your wish

Then choose React in following options
Then choose plan javascript in following options
Then change directory to vite-react 

Step 2: install node modules
Provide the following command
 Npm install

Step 3: run react
Provide the following command
 Npm run dev

With the following commands you can run frontend .


2. Setting up the Backend with Node and Express

Open another terminal in same vs code file
Then provide the following commands

Step 1: install npm
 Npm init -y

Step 2: install Packages
 Following commands will provide necessary packages for backend development

npm install express cors dotenv


3. Running Frontend and Backend in Different Terminals
Open two terminal
Step 1:(Terminal 1) Start the React app (frontend):
Use the following commands

cd frontend

npm run dev


Step 2:(Terminal 2) Start the Node (backend):
Use the following commands

cd backend

node server.js

To check the output open link in frontend terminal

http://localhost:5173/
