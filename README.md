# Blockhouse Dashboard

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setting Up the Application](#setting-up)
  - [Backend Setup](#backend-setup-django)
  - [Frontend Setup](#frontend-setup-nextjs)
- [Libraries and Tools Used](#libraries-and-tools-used)
- [Thought Process](#thought-process)
  - [Frontend (Next.js)](#frontend-nextjs)
  - [Backend (Django)](#backend-django)

## Project Structure

```bash
blockhouse-dashboard/
├── dashboard-api/
│   ├── charts/               # Django project folder
│   ├── dashboard-api/        # Django app for charts API
│   ├── manage.py             # Django management file
│   └── requirements.txt      # Backend dependencies
├── frontend/
│   ├── src/                  # Next.js pages and components
│   ├── package.json          # Frontend dependencies
│   └── tsconfig.json         # TypeScript configuration
└── README.md                 # Project documentation
```

## Prerequisites

- Node.js (version 14.x or higher)
- Bun
- Python 3 (version 3.6 or higher)
- Django

## Setting Up

### Backend Setup

#### Navigate to the dasboard_api directory:

```bash
cd dashboard_api
```

#### Install Python dependencies:

- Create a python virtual environment:

```bash
pythom -m venv venv
venv/Scripts/activate
```

- Next, install the required dependencies

```bash
pip install -r requirements.txt
```

#### Run Django Development Server

```bash
python manage.py runserver      # This will start a server at `http://localhost:8000`
```

### Frontend Setup

#### Navigate to the frontend directory

```bash
cd ../frontend                  # Navigate back to the root directory and go into frontend
```

#### Install bun Dependencies

```bash
bun install
```

#### Run Next.js Development Server

```bash
bun run dev                     # This will start a frontend server at `http://localhost:3000`
```

Make sure you have both the Django and frontend server running!

## Libraries and Tools Used

### Backend:

- **Django**
- **Django REST Framework**
- **Django Cors Header**:

### Frontend:

- **Next.js**
- **Chart.js**
- **React Chart.js 2**
- **React Google Charts**
- **Axios**
- **TailwindCSS**

## Thought Process:

### Overview:

The goal of this project was to build a full-stack dashboard application using **Next.js** on the frontend and **Django** on the backend. The application was required to feature multiple charts (Candlestick, Line, Bar, Pie) with data fetched dynamically from the Django API. Below is a breakdown of the key decisions and considerations made during the development process.

### **Frontend: Next.js Application**

#### 1. **Framework Choice: Next.js**

- **SSR and SSG Support**: Next.js was chosen for its built-in support for **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**. This ensures faster initial page loads and better SEO performance, which can be beneficial when scaling the project.
- **API Routes**: Next.js provides easy-to-use API routes for server-side logic. However, for this project, I used **direct API calls** from React components to interact with the Django API, keeping the frontend and backend loosely coupled.
- **Bun Integration**: I opted for **Bun** with Next.js to leverage its fast JavaScript runtime and build tools, offering a significant performance boost during development.

#### 2. **State Management: Redux Toolkit** : NOT INTEGRATED YET

- I was thinking of using **Redux Toolkit** to manage the application’s global state, particularly for storing and managing chart data fetched from the backend. Redux's predictable state container helped in simplifying complex UI state interactions across different dashboard panels.
- **Async Thunks**: Data fetching for each chart is going to be handled using **Redux Thunks**, ensuring a clean separation of concerns between data fetching logic and UI presentation. This also allows for better error handling and loading state management.

#### 3. **Charting Library: Chart.js with react-chartjs-2 and react-google-charts**

- **Chart.js** was selected for its flexibility and ease of use. I integrated it with **React-Chartjs-2**, a lightweight wrapper for React applications, allowing me to easily embed various chart types into the dashboard panels.
- The data structure required by the charts (Line, Bar, Pie) was ensured to align with the format provided by the Django API, leading to seamless data integration.

- **react-google-charts** was used because I encountered migration issues with **chart.js** and could not figure out a straight forward way to incorporate **chartjs-financial-chart**

#### 4. **Component Structure**

- I followed a **modular approach**, breaking the dashboard down into small, reusable components.
  - **`DashboardLayout`**: Manages the overall layout and grid structure for the dashboard.
  - **`DashboardPanel`**: Acts as a wrapper for each individual chart, fetching data and displaying loading/error states if needed.
- This separation of concerns made the code more maintainable and scalable.

#### 5. **Error Handling and Loading States**

- Each **DashboardPanel** handles errors and loading states gracefully, displaying appropriate feedback to the user.

#### 6. **Styling: Tailwind CSS**

- **Tailwind CSS** was chosen for its utility-first approach, allowing for rapid and efficient UI development. The dashboard follows a responsive, grid-based design, making it adaptable to different screen sizes. The background color (`#5c3b58`) was chosen to give the dashboard a modern, dark aesthetic.

---
