# Backend - MERN Todo App

Express.js backend server for the MERN Todo application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
```

3. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get single todo
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `PATCH /api/todos/:id/toggle` - Toggle completion
- `DELETE /api/todos/:id` - Delete todo

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB object modeling
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **nodemon** (dev) - Auto-restart server