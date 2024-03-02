# CampBot Booking Website

## Overview

This project is a booking website automation tool that includes web scraping scripts and a web interface for handling campsite reservations.

## Directory Structure

Proposed directory structure
```
.
├── web/
|   ├── backend/
|   |   ├── server.js
|   |   ├── scripts/
|   |   |   ├── scraper.py # Web scraping script
|   |   |   └── requirements.txt # Dependencies
|   |   └── package.json
|   └── frontend/
|       ├── src/
|       |   ├── assets/
|       |   └── components/
|       |       └── App.js
|       ├── index.js
|       ├── style.css
|       └── package.json
|   
├── database/
├── kubernetes/
|   ├── deployment.yaml # Kubernetes deployment configuration
|   └──- service.yaml # Kubernetes service configuration
└── README.md # Project README
```

## Setup

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (for backend and frontend)
- [Python 3](https://www.python.org/) (for the scraper script)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)
- [pip3](https://pip.pypa.io/en/stable/installation/) (Python Package Installer)

### Setup Steps

1. **Clone the repository:**

   ```
   git clone https://github.com/CampsiteBot/CampBot.git
   cd CampBot
   ```

2. **Install Node.js dependencies (Backend and Frontend):**

    ```
    cd web/frontend
    npm install

    cd ../backend
    npm install
    ```

3. **Install Python dependencies (Scraper Script):**

    ```
    cd web/backend
    pip3 install -r requirements.txt
    ```

## Usage

1. **Run the Backend and Frontend Concurrently:**

    ```
    cd web
    npm start
    ```

This command starts both the backend (Node.js) and frontend (React) servers concurrently.

2. **Access the Application:**

- Open your web browser and navigate to http://localhost:3000 to access the frontend.

3. **Check Campsite Availability:**

- Enter the required information in the input fields.
- Click the "Check Availability" button to view the results.

3. **Access the Application:**
- Open your web browser and go to [http://localhost:3000](http://localhost:3000) to interact with the React frontend.

Make sure to follow these steps in the root directory of the project where you have the `web/backend`, `scripts`, and `web/frontend` directories. Additionally, if there are any issues or additional dependencies needed during the process, the error messages should guide you on installing them.

## Important Considerations

When running the script locally, ensure that Python 3.9 or later is installed, and dependencies are installed using `pip3 install -r requirements.txt.`

The script simulates a request from a web browser by setting a User-Agent header. However, web scraping involves making requests to external websites, so be considerate to avoid being blocked.

Recreation.gov may have usage policies or terms of service. Ensure compliance with their policies when using this script.

It is recommended to add error handling and additional features as needed for production use.

## Additional Notes
- For development, consider using Nodemon to automatically restart the Node.js server when changes are made.

    ```
    npm install nodemon
    ```

- Customize the scraper script (backend/scripts/scraper.py) based on your specific requirements.

## Future Enhancements

Integration with Kubernetes for deployment on a Raspberry Pi cluster.

Complete the web interface to enable users to make reservations directly.

## License
This project is licensed under the MIT License.
