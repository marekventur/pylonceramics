const fs = require('fs');

// Read the original JSON file
const rawData = fs.readFileSync('src/instagram-data.json');
const data = JSON.parse(rawData);

// Transform the data to only include the fields we want
const transformedData = data.map(image => ({
    id: image.shortcode,
    media_url: image.local,
    permalink: `https://www.instagram.com/p/${image.shortcode}/`,
    caption: image.edge_media_to_caption?.edges?.[0]?.node?.text ?? image.accessibility_caption,
}));

// Write the transformed data to a new file
fs.writeFileSync('instagram-data-new.json', JSON.stringify(transformedData, null, 2));

console.log('Data extraction complete! Check instagram-data-new.json');
