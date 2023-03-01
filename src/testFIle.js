import express from 'express';

const app = express();

app.get('/',(req, res) =>{
    res.status(200).json({message:"this is the test"})
})

// app.listen(2000)

export default app