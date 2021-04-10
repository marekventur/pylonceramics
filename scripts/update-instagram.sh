#!/bin/sh
set -euo pipefail

#pip install instagram-scraper
instagram-scraper pylon_ceramics -d ./instagram --media-metadata --media-metadata --include-location --latest -t image -m 100
cp ./instagram/pylon_ceramics.json ./src/instagram-data.json