import requests
from bs4 import BeautifulSoup
from datetime import datetime, timedelta
import time

def parse_availability(response_text, campground_name):
    soup = BeautifulSoup(response_text, 'html.parser')

    # Extract available campsites
    available_sites = soup.find_all('a', {'href': lambda x: x and 'campsites' in x})
    if available_sites:
        print(f"\nAvailable Campsites at {campground_name}:")
        for site in available_sites:
            print(f"- {site.text}")
    else:
        print(f"No available campsites found at {campground_name}.")

def check_availability(campground, start_date, end_date):
    # Recreation.gov endpoint for the specified campground
    campground_url = f"https://www.recreation.gov/camping/campgrounds/{campground}"

    # Format dates to match the URL pattern
    start_date_formatted = datetime.strptime(start_date, "%Y-%m-%d").strftime("%Y-%m-%d")
    end_date_formatted = datetime.strptime(end_date, "%Y-%m-%d").strftime("%Y-%m-%d")

    # Recreation.gov endpoint for availability
    availability_url = f"{campground_url}/availability?start_date={start_date_formatted}&end_date={end_date_formatted}"

    # Set a User-Agent header to simulate a request from a web browser
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }

    # Add a delay of 2 seconds before making the request to avoid rate limiting
    time.sleep(2)

    # Make a request to the availability endpoint
    try:
        response = requests.get(availability_url, headers=headers)

        if response.status_code == 200:
            # Parse HTML content
            parse_availability(response.text, campground)
        else:
            print(f"Error accessing {availability_url}. Status code: {response.status_code}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    import sys

    if len(sys.argv) != 4:
        print("Usage: python scraper.py [Campground Name] [Start Date] [End Date]")
        sys.exit(1)

    campground_name = sys.argv[1]
    start_date = sys.argv[2]
    end_date = sys.argv[3]

    check_availability(campground_name, start_date, end_date)
