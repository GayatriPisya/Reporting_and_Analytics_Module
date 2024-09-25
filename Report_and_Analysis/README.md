# Reporting and Analytics Module

## Project Overview

The **Reporting and Analytics Module** is a part of the larger "Parking Space Finder and e-Parking Challan Generate System" project. This module is responsible for displaying monthly user data, visualized through charts, and offers reporting and analysis features.

### Key Features

- **Monthly User Growth Reports**: Displays the growth of website users month by month.
- **Interactive Charts**: Renders bar charts using **Highcharts** to visually represent data.
- **Backend Integration**: Fetches data from a **MySQL** database using **Spring Boot**.
- **Responsive Design**: The module adapts to different screen sizes, offering a user-friendly interface on both desktop and mobile.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Features in Detail](#features-in-detail)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

### Frontend:
- **Angular** (v12+)
- **Highcharts** (v10.3.3)
- **TypeScript**
- **CSS** for custom styles

### Backend:
- **Spring Boot** (v2.7.3)
- **MySQL**: Database to store monthly user data
- **REST APIs**: For communication between the frontend and backend

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14+)
- **Angular CLI** (v12+)
- **Java** (v11+)
- **Maven** (for building Spring Boot projects)
- **MySQL** (for the database)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/reporting-and-analytics.git
   cd reporting-and-analytics
