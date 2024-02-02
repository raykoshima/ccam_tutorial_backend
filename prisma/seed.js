const bcrypt = require("bcryptjs")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const Password  = bcrypt.hashSync('123')
const UserData = [
    {Username : 'rayko', Password , Email : 'andy@ggmail.com'},
    {Username : 'rayko2', Password , Email : 'bobby@ggmail.com'},
    {Username : 'jimmy', Password , Email : 'jimmy@ggmail.com'},
]

const TodoData = [
    {Title : 'Learn HTML', Duedate: new Date(), UserID : 1},
    {Title : 'Learn js', Duedate: new Date(), UserID : 2},
    {Title : 'Learn java', Duedate: new Date(), UserID : 3},
    {Title : 'Learn your mom', Duedate: new Date(), UserID : 3},
]

const run = async () => {

    await prisma.user.createMany({
        data : UserData
    })
    await prisma.todo.createMany({
        data: TodoData
    })
}

run()