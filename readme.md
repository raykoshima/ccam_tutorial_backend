** env_guide **

PORT=<br>
JWT_SECRET_KEY=<br>

----------------------

** api_service **

```
method                 path            authen       params         query             body

GET                    /product                     none           none              none
GET                    /product/page/               :page          none              none
GET                    /id/                         :id            none              none
GET                    /search                      none           ?query            none
POST                   /auth/register               none           none              {username, password, confirmPassword, email}
POST                   /auth/login                  none           none              {username, password}
GET                    /auth/me        true         none           none              none
GET                    /todos          true         none           none              none
```

----------------------

Note

MVC (Model,Route+Controller,View)

----------------------
Get Start

```
npm i 

npx prisma
npx prisma init
```
Go config database in .env
```
npx prisma db push
npx prisma db seed
```
To reset database use
```
npm run resetDB
```
