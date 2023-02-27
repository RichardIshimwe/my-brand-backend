import signup from '../models/signup.models.js'
import response from '../utils/response.util.js'

const checkEmailOrUsername = (req, res, next) => {
    const { email, username } = req.body;
    signup.findOne({ $or: [{ email }, { username }] }, (err, result) => {
        if (err) {
            return response.error(res, 500, err)
        }
        if (result) {
            return response.error(res, 400, "username or email is already taken")
        }
        next();
    });
};

export default checkEmailOrUsername