const bcrypt = require("bcryptjs")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const Password  = bcrypt.hashSync('123456')
const UserData = [
    {Username : 'andy', Password , Email : 'andy@ggmail.com'},
    {Username : 'bobby', Password , Email : 'bobby@ggmail.com'},
    {Username : 'jimmy', Password , Email : 'jimmy@ggmail.com'},
]

const TodoData = [
    {Title : 'Learn HTML', Duedate: new Date(), UserID : 1},
    {Title : 'Learn js', Duedate: new Date(), UserID : 2},
    {Title : 'Learn java', Duedate: new Date(), UserID : 3},
    {Title : 'Learn your mom', Duedate: new Date(), UserID : 4},
]

const run = async () => {

    await prisma.user.deleteMany({})
    await prisma.todo.deleteMany({})
    await prisma.user.createMany({
        data : UserData
    })
    await prisma.todo.createMany({
        data: TodoData
    })
}

run()