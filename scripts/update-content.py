#!/usr/bin/env python3
import json

with open('./about-me.md', 'r') as about_me_file:
    about_me = about_me_file.read()
    with open('./events.md', 'r') as events_file:
      events = events_file.read()
      with open('./src/content.json', "w") as output_file:
        json.dump({"aboutMe": about_me, "events": events}, output_file)