import signup from '../models/signup.models.js'
import response from '../utils/response.util.js'
import joi from 'joi'

const validate = joi.object({
    email: joi.string().email().required().messages({
        'string.empty': 'Email can not be empty',
        'string.email': 'Please proveide valid email..',
        'any.required': 'Email is required'
    }),
    username: joi.string().required().messages({
        'string.empty': 'Please enter the username',
        'any.required': 'username field can not be empty'
    }),
    confirmPassword: joi.string().required().messages({
        'string.empty': 'Please enter the confirmation Password',
        'any.required': 'Password field can not be empty'
    }),
    password: joi.string().required().messages({
        'string.empty': 'Password field can not be empty',
        'any.required': 'Password field can not be empty'
    })
})

const checkEmailOrUsername = (req, res, next) => {
    const { email, username } = req.body;
    const { error } = validate.validate( req.body );
    if(error){
    const errorMessage = error.details.map((detail) => detail.message).join(', ')
      return  response.error(res, 400, errorMessage)
    }
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