# fullstack-node-react-typescript
Employee Management App
This is a web application for managing employees built with React.js, Redux Toolkit, RTK Query on the frontend, and Node.js, Express, and Prisma on the backend. The app provides user authentication using JWT tokens and bcrypt for secure password hashing. It also utilizes local storage to persist the user's login state after refreshing the page.

Features
User Authentication: Users can register for an account or log in if they already have one. Only authenticated users can access the app's functionalities.

Employee Management: Once logged in, users can perform various actions related to employee management, including adding new employees, editing existing employee information, and deleting employees. Users can only edit or delete employees they created themselves.

Employee Listing: The app displays a comprehensive list of all employees, including those created by other users. However, if a user is not logged in, they will not be able to view any employee information.

Technologies Used
Frontend: The frontend of the app is built using React.js and Redux Toolkit, providing a robust and efficient state management solution. RTK Query is used for fetching data from the backend API.

Backend: The backend of the app is implemented using Node.js and Express, providing a scalable and fast server-side solution. Prisma is used as the ORM (Object-Relational Mapping) to interact with the database.

Authentication and Security: User authentication is implemented using JWT (JSON Web Tokens) for secure authentication and authorization. Bcrypt is utilized for password hashing to ensure the safety of user credentials.

Getting Started
To run the app locally, follow these steps:

Clone the repository: git clone https://github.com/Nika-Firada/fullstack-node-react-typescript,
Install dependencies for the backend: cd /fullstack-node-react-typescript npm install,
Install dependencies for the frontend: cd client && npm install,
Start the server: cd /fullstack-node-react-typescript npm run dev,
Access the app in your browser at http://localhost:3000,
Please make sure to set up the required environment variables for the backend, such as the database connection details and JWT secret key.
