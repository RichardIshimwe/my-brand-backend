import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
class saveimage {

    static async save(req, res) {
        dotenv.config();
        cloudinary.config({
            cloud_name: `${process.env.CLOUD_NAME}`,
            api_key: `${process.env.API_KEYD}`,
            api_secret: `${process.env.API_SECRET}`
        })
        cloudinary.uploader.upload(req.file.path, (result, err) => {
            if (result) {
                return res.status(200).json({
                    image: result.url
                })
            }
            res.status(500).json({
                error: err
            });
        });
    }
}

export default saveimage
