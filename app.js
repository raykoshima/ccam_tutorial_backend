require('dotenv').config()
const express = require("express")
const cors = require("cors");
const app = express();

const errorHandler = require("./middlewares/error") 
const notFoundHandler = require("./middlewares/notfound")
const authenticate = require("./middlewares/authorization")

const authRoute = require("./routes/auth-route")


app.use(cors())
app.use(express.json())


app.use("/auth",authRoute)
app.use("/product",()=>{})
// app.use("/useronly", authenticate ,(req,res,next)=>{
//     res.json({ user: req.user })
// })


app.use(errorHandler);
app.use("*", notFoundHandler);


let port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server Listen on port ${port}`)
})