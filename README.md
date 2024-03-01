# CampBot Booking Website

## Overview

This project is a booking website automation tool that includes web scraping scripts and a web interface for handling campsite reservations.

## Directory Structure

Proposed directory structure
```
.
├── scripts/
|   ├── scraper.py # Web scraping script
|   ├── booking_handler.py # Booking handler script
|   └── requirements.txt # Dependencies
├── web/
|   ├── static/
|   |   └── style.css # CSS styles
|   ├── templates/
|   |   ├── index.html # Main page template
|   |   ├── login.html # Login page template
|   |   └── dashboard.html # Dashboard page template
|   └── app.py # Web interface application
├── database/
|   └── db_handler.py # Database handler script
├── config/
|   └── config.py # Configuration file
├── kubernetes/
|   ├── deployment.yaml # Kubernetes deployment configuration
|   └──- service.yaml # Kubernetes service configuration
└── README.md # Project README
```

## Setup

### Prerequisites

- Python 3.9 or later
- Dependencies (see `requirements.txt`)

## Web Interface (Work in Progress)

The web interface is under development and aims to provide a user-friendly way to interact with the reservation script.

## Important Considerations

When running the script locally, ensure that Python 3.9 or later is installed, and dependencies are installed using pip3 install -r requirements.txt.

The script simulates a request from a web browser by setting a User-Agent header. However, web scraping involves making requests to external websites, so be considerate to avoid being blocked.

Recreation.gov may have usage policies or terms of service. Ensure compliance with their policies when using this script.

It is recommended to add error handling and additional features as needed for production use.

## Future Enhancements

Integration with Kubernetes for deployment on a Raspberry Pi cluster.

Complete the web interface to enable users to make reservations directly.

## License
This project is licensed under the MIT License.
