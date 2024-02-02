const bcrypt = require("bcryptjs")
const prisma = require("../models/db")
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
exports.login = (req,res,next) => {
    const { username , password } = req.body;
    //
    if( !(username.trim() && password.trim())){
        throw new Error("Please Fill Input")
    }
    const user = prisma.user.findFirstOrThrow({
        where:{
            Usernam:username,
            Password:password
        }
    })
    res.send("in login...")
}