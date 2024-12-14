# Employee Attendance Management System for Oil and Gas Industry

This project is a **MERN stack-based application** designed to manage employee attendance effectively for the oil and gas industry. The system includes features such as attendance tracking, report generation using OpenAI API, and seamless integration between frontend and backend systems.

---

## Directory Structure
### **1. react-national-oil**
- **Purpose:** Contains the frontend React application.
- **Framework:** Built with React.js.
- **Description:** Provides an intuitive user interface for managing employee attendance. The UI is optimized for ease of use in managing large-scale workforce attendance records.

### **2. backend**
- **Purpose:** Houses the backend of the application.
- **Framework:** Node.js with Express.js.
- **Description:** Serves as the server-side logic for handling API requests, managing the database, and generating attendance reports via OpenAI API.

---

## Features
- **Employee Attendance Tracking:** Log attendance data for employees working in oil and gas fields.
- **OpenAI-Powered Report Generation:** Generates comprehensive attendance reports based on employee data.
- **Cross-Origin Resource Sharing (CORS):** Enables secure communication between frontend and backend.
- **Database Integration:** Uses MongoDB to store and retrieve employee and attendance data.
- **Environment Variables:** Manages sensitive data like database URIs and OpenAI API keys securely.
- **Custom APIs:** Includes APIs for:
  - Generating attendance reports.
  - Adding, updating, and deleting employee records.
  - Fetching attendance summaries.

---

## Technologies Used
### **Frontend**
- React.js
- Axios for API requests
- Material-UI (or any preferred UI library) for styling

### **Backend**
- Node.js
- Express.js
- MongoDB for the database
- OpenAI API for generating employee attendance reports
- CORS and Body-Parser middleware

---

## Prerequisites
1. **Node.js** installed on your system.
2. **MongoDB** instance running locally or remotely.
3. **OpenAI API Key** to enable report generation.
4. Install all necessary dependencies using `npm install` in both directories.

---

## Installation and Setup

### **Step 1: Clone the repository**
```bash
git clone https://github.com/your-username/employee-attendance-management.git
cd employee-attendance-management
```

### **Step 2: Backend Setup**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory:
   ```plaintext
   DB_URI=your-mongodb-uri
   PORT=4000
   OPENAI_API_KEY=your-openai-api-key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### **Step 3: Frontend Setup**
1. Navigate to the React app directory:
   ```bash
   cd ../react-national-oil
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the React app directory:
   ```plaintext
   REACT_APP_API_URL=http://localhost:4000
   ```
4. Start the React development server:
   ```bash
   npm start
   ```

---

## API Endpoints
### **Base URL:** `http://localhost:4000`

1. **Generate Attendance Report**
   - **Endpoint:** `/generate-report`
   - **Method:** `POST`
   - **Request Body:**
     ```json
     {
       "employeeData": "Employee data in structured format"
     }
     ```
   - **Response:**
     ```plaintext
     Generated attendance report text.
     ```

2. **Additional Routes**
   - Define routes in `routes/router.js` for CRUD operations.

---

## Usage
1. Launch the frontend and backend servers.
2. Access the React application at `http://localhost:3000`.
3. Use the application to manage employee attendance and generate reports.

---

## Contribution
Feel free to submit issues or feature requests. Contributions are welcome via pull requests.

---

## License
This project is licensed under the MIT License.

---
