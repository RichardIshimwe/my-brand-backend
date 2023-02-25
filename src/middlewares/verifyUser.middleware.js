

const verifyUser = (req,res,next) =>{
    const header = req.headers;
    console.log(header)
    next();
}
export default verifyUser