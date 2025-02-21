#!/usr/bin/env python3
import json
from os import listdir
import lzma
from shutil import copy

# Read Instagram data file
with open('instagram/data.json', 'r') as f:
    raw_data = json.load(f)

# Convert data to desired format
converted_posts = []
for post in raw_data['data']['items']:
    converted_post = {
        'id': post['code'],
        'media': post['thumbnail_url'],
        'caption': post['caption']['text'] if post['caption'] else None,
        'permalink': f'https://www.instagram.com/p/{post["code"]}/'
    }
    converted_posts.append(converted_post)

# Read existing data file
try:
    with open('src/instagram_data.json', 'r') as f:
        existing_posts = json.load(f)
except (FileNotFoundError, json.JSONDecodeError):
    existing_posts = []

# Create a set of existing IDs for efficient lookup
existing_ids = {post['id'] for post in existing_posts}

# Add only new posts to the beginning of existing_posts
new_posts = [post for post in converted_posts if post['id'] not in existing_ids]
merged_posts = new_posts + existing_posts

# Write merged data back to file
with open('src/instagram_data.json', 'w') as f:
    json.dump(merged_posts, f, indent=2)
	
print(f"Added {len(new_posts)} new posts to instagram_data.json")