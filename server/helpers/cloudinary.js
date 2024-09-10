const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
  cloud_name: 'dgkbxgdt5',
  api_key: '581263942583989',
  api_secret: 'w9D7IcCPSyBJxkO2dbf-1Qrd9v8',
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };