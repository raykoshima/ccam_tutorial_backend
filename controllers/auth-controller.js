const bcrypt = require("bcryptjs")
const prisma = require("../models/db")
const jwt = require("jsonwebtoken")

exports.register = async (req,res,next) => {
    try {
    const {username, password, confirmPassword, email} = req.body
    //validation
    if( !(username.trim() && password && confirmPassword) ) {
        return next( new Error(`Fulfill all inputs`))
    }
    if( (password !== confirmPassword )){
        throw new Error(`Confirm password not match`)
    }

    const hashedPassword = await bcrypt.hash(password,8)

    const data = {
        Username:username,
        Password: hashedPassword,
        Email:email 
    }
    await prisma.user.create({ // insert to database
        data : data
    })
    
    res.send("in register...")
    // res.json({ data })
    } catch (err) {
        next(err)
    }
    
}
exports.login = async (req,res,next) => {
    const { username , password } = req.body;
    try {
        if( !(username.trim() && password.trim())){
            throw new Error("Please Fill Input")
        }
        const user = await prisma.user.findFirstOrThrow({
            where:{
                Username:username
            }
        })
        const pwOk = await bcrypt.compare(password,user.Password)
        if(!pwOk) {
            throw new Error('invalid login')
        }
        const payload = { id: user.id }
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY)
        res.json({token : token})
    } catch (err) {
        console.log(err.message)
        next(err)
    }
    //
    
}