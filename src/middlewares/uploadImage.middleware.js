import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  cloud_name: 'dkomkrwe2',
  api_key: '163417148236758',
  api_secret: 'IxJS_MUxaXnlxIn38ODen7_vSjE'
});
const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return next();
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    req.body.image = result.secure_url;
    res.cookie('image',result.secure_url)

    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export default uploadImage