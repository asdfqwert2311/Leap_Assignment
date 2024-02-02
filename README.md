# ToDo List Application

This ToDo List application is built using React for the frontend, Spring Boot for the backend, and MongoDB as the database. It provides a simple interface to manage tasks with features such as adding tasks, deleting tasks, editing tasks, marking tasks as completed, and searching through task descriptions.

**Link for Video** : https://drive.google.com/file/d/1gF5zss5UWJsKFNENKNO0BxC4WQVe-Q9k/view?usp=sharing

## Features

1. **Adding Task**: Users can add new tasks by providing a task name, task description, and deadline.

2. **Deleting Task**: Remove unwanted tasks from the list effortlessly.

3. **Modifying/Editing Task**: Edit existing tasks to update their details, such as task name, description, or deadline.

4. **Check Completed Tasks**: Mark completed tasks with a tick to easily distinguish them from pending tasks.

5. **Search Button**: Utilize the search functionality to navigate through task descriptions efficiently.

## Task Definition

A task is defined by the following attributes:

- **Task Description**: A detailed description of the task.

- **Task Name**: A short and concise name or title for the task.

- **Task Deadline**: The date and time by which the task should be completed (in datetime format).

## Technologies Used

- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Node.js and npm for React
- Java and Maven for Spring Boot
- MongoDB installed and running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/todo-list-app.git
    cd todo-list-app
    ```

2. Install frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

3. Install backend dependencies:

    ```bash
    cd backend
    mvn install
    ```

4. Configure MongoDB connection in `application.properties` in the backend folder.

5. Start the backend server:

    ```bash
    cd springboot-backend
    mvn spring-boot:run
    ```

6. Start the frontend application:

    ```bash
    cd frontend
    npm start
    ```

7. Access the application at [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

1. Open the application in your web browser.

2. Add, delete, edit, or mark tasks as completed using the provided functionalities.

3. Use the search button to find tasks based on their descriptions.

4. Stay organized and manage your tasks efficiently!


