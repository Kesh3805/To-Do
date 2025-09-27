# 📝 MERN Todo App with Authentication

A modern, full-stack Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring comprehensive user authentication and authorization.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![Authentication](https://img.shields.io/badge/Auth-JWT-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Node](https://img.shields.io/badge/Node.js-v14+-green)
![React](https://img.shields.io/badge/React-v18+-blue)

## Features

### 🔐 Authentication & Security
- User registration and login system
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes and user-specific data
- Secure user sessions

### 📋 Todo Management
- ✅ Create, read, update, and delete todos
- 🎯 Priority levels (High, Medium, Low)
- 📅 Due date tracking with overdue warnings
- 📊 Statistics dashboard
- 🔍 Filter todos by status and priority
- 👤 User-specific todos (each user sees only their own todos)

### 🎨 User Experience
- 📱 Responsive design
- 🎨 Modern UI with gradient backgrounds
- 🔄 Smooth transitions and animations
- 👋 User profile management
- 🚪 Easy logout functionality

## 📸 Screenshots

### Authentication Page
*Beautiful login/signup interface with form validation*

### Todo Dashboard
*Modern todo management with statistics and filtering*

### User Profile
*Secure user profile management with logout functionality*

## Project Structure

```
To-Do/
├── backend/           # Express.js API server
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API routes
│   ├── server.js      # Main server file
│   └── package.json   # Backend dependencies
├── frontend/          # React application
│   ├── public/        # Static files
│   ├── src/           # React components and services
│   └── package.json   # Frontend dependencies
└── README.md         # This file
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd To-Do
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
```

For MongoDB Atlas, replace the MONGODB_URI with your connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

### 4. Start MongoDB

If using local MongoDB:
```bash
mongod
```

### 5. Run the Application

**Start the backend server:**
```bash
cd backend
npm run dev
```
The backend will run on http://localhost:5000

**Start the frontend (in a new terminal):**
```bash
cd frontend
npm start
```
The frontend will run on http://localhost:3000

## API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/me` | Get current user profile | Private |
| PUT | `/api/auth/profile` | Update user profile | Private |
| POST | `/api/auth/change-password` | Change password | Private |

### Todo Routes (All Private)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get user's todos |
| GET | `/api/todos/:id` | Get single todo |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update todo |
| PATCH | `/api/todos/:id/toggle` | Toggle todo completion |
| DELETE | `/api/todos/:id` | Delete todo |

## Todo Schema

```javascript
{
  title: String (required),
  description: String,
  completed: Boolean (default: false),
  priority: String (enum: ['low', 'medium', 'high'], default: 'medium'),
  dueDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - Frontend library
- **Axios** - HTTP client
- **CSS3** - Styling with gradients and modern design

## Features in Detail

### Todo Management
- Add new todos with title, description, priority, and due date
- Edit existing todos inline
- Mark todos as complete/incomplete
- Delete todos

### Filtering & Organization
- View all todos
- Filter by completion status (pending/completed)
- Filter by priority level
- Visual priority indicators

### Statistics Dashboard
- Total tasks count
- Completed tasks count
- Pending tasks count
- High priority tasks count
- Overdue tasks count
- Completion rate percentage

### User Experience
- Responsive design for all devices
- Modern gradient UI
- Hover effects and smooth transitions
- Overdue task warnings
- Empty state messages
- Error handling with user feedback

## Development Scripts

### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
```

### Frontend (optional .env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Deployment

### Backend Deployment (Heroku example)
1. Install Heroku CLI
2. Create a new Heroku app
3. Set environment variables
4. Deploy the backend

### Frontend Deployment (Netlify/Vercel example)
1. Build the React app: `npm run build`
2. Deploy the build folder to your hosting service
3. Update API URLs for production

## 🚀 Live Demo

[Coming Soon - Deploy to Heroku/Netlify]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Todo/Roadmap

- [ ] Email verification for user registration
- [ ] Password reset functionality
- [ ] Social login (Google, Facebook)
- [ ] Todo sharing between users
- [ ] Real-time notifications
- [ ] Mobile app using React Native
- [ ] Dark/Light theme toggle
- [ ] Todo categories and tags
- [ ] File attachments for todos
- [ ] Export todos to PDF/CSV

## 🐛 Known Issues

- None currently. Please report any bugs you find!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Keshav**
- Email: kesh.71772218121@gct.ac.in
- GitHub: [@YourUsername](https://github.com/Kesh3805)

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- JWT for secure authentication
- React team for the amazing frontend library
- Express.js for the robust backend framework
- All open-source contributors who made this possible

## 📞 Support

If you encounter any issues or have questions:
- Create an issue in this repository
- Email: kesh.71772218121@gct.ac.in

---

⭐ **If you found this project helpful, please give it a star!** ⭐
