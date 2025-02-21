import http.client
import os
import json

import requests
import sys

url = "https://instagram-scraper-api2.p.rapidapi.com/v1/posts"

querystring = {"username_or_id_or_url":"pylon_ceramics"}

headers = {
	"x-rapidapi-key": sys.argv[1],
	"x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

with open('instagram-data.json', 'w') as f:
    json.dump(response.json(), f)
