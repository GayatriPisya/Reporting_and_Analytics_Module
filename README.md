# Reporting_and_Analytics_Module

# Parking Space Finder and e-Parking Challan Generate System

This project is a complete system for parking space management and e-parking challan generation, along with a detailed **Reporting and Analytics Module**. It uses **Angular** for the frontend and **Spring Boot** for the backend, and it stores data in **MySQL**. 

The main focus of this repository is on the **Reporting and Analytics Module**, which displays monthly user growth using charts.


## Overview

The **Parking Space Finder and e-Parking Challan Generate System** is built with the goal of streamlining parking space management, e-parking challans, and providing robust analytics on user growth. The **Reporting and Analytics Module** is specifically designed to track monthly user activity on the platform and visually represent growth patterns using bar charts.

The frontend uses **Angular** and **Highcharts**, while the backend leverages **Spring Boot** to provide data from a **MySQL** database.

## Technologies Used

- **Frontend:**
  - Angular
  - Highcharts
  - HTML/CSS/TypeScript
- **Backend:**
  - Spring Boot (Java)
  - JPA/Hibernate
  - MySQL
- **Tools:**
  - Spring Tool Suite (STS)
  - Visual Studio Code (VS Code)
  
## Architecture

The project follows a typical **client-server** architecture where:

- **Frontend (Angular):** Displays data using Highcharts for reporting and analytics.
- **Backend (Spring Boot):** Provides REST APIs to serve data from the database.
- **Database (MySQL):** Stores the login data of users, which is analyzed and visualized in the reporting module.

## Features

1. **User Authentication**: Simple login page for users.
2. **Monthly User Growth Analysis**: Displays a bar chart with month-wise user growth data.
3. **RESTful API**: Spring Boot provides a `/api/monthly-users` endpoint to fetch user growth data.
4. **Responsive Design**: The Reporting and Analytics Module is responsive and user-friendly.

## Setup Instructions

### Prerequisites

- **Node.js** (for Angular)
- **Java JDK 17+** (for Spring Boot)
- **MySQL** (for database)
- **Angular CLI**
- **Maven**

### Backend (Spring Boot) Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
