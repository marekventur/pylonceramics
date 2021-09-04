#!/usr/bin/env python3
import json
from os import listdir
import lzma
from shutil import copy

result = []
for f in reversed(sorted([f for f in listdir("instagram") if ("UTC.json.xz" in f)])):
	data = json.loads(lzma.open("instagram/%s" % f).read().decode('utf-8'))['node']
	prefix = f[:-7]
	for ff in [ff for ff in listdir("instagram") if (prefix in ff and ".jpg" in ff)]:
		data['local'] = "instagram/%s" % ff
		copy("instagram/%s" % ff, "public/instagram")
		result.append(data)

with open('src/instagram-data.json', 'w') as f:
    json.dump(result, f)