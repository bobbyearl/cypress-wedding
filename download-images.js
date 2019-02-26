const fs = require('fs-extra');
const images = fs.readJsonSync('images-to-download.json');
const request = require('request');
const url = require('url');
const path = require('path');

fs.ensureDirSync('./downloaded-images');

images.forEach(image => {
  const filename = path.basename(url.parse(image).pathname);
  const saved = path.resolve(`./downloaded-images/${filename}`);

  if (fs.existsSync(saved)) {
    console.log(`Already saved ${saved}`);
  } else {
    console.log(`Saving ${saved}`);
    request(image).pipe(fs.createWriteStream(saved));  
  }
});

console.log('Removing images-to-download.json');
fs.removeSync('images-to-download.json');
