# Camping Availability Scraper

## Overview

This script allows you to check the availability of campsites on Recreation.gov for a specified campground and date range.

## Usage

### Prerequisites

- Python 3.9 or later

### Local Execution

1. Install dependencies:

    ```
    pip3 install -r requirements.txt
    ````

2. Run the script:

    ```
    python3 scraper.py [Campground ID] [Start Date] [End Date]
    ```

Replace [Campground ID], [Start Date], and [End Date] with your desired parameters.

## Important Considerations

When running the script locally, ensure that Python 3.9 or later is installed, and dependencies are installed using `pip3 install -r requirements.txt`.

The script simulates a request from a web browser by setting a User-Agent header. However, web scraping involves making requests to external websites, so be considerate to avoid being blocked.

Recreation.gov may have usage policies or terms of service. Ensure compliance with their policies when using this script.

It is recommended to add error handling and additional features as needed for production use.

## License

This project is licensed under the MIT License.
