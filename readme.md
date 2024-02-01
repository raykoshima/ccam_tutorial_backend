** env_guide **

PORT=
JWT_KEY=

----------------------

** api_service **

method                 path                params         query

GET                    /product            none           none
GET                    /product/page/      :page          none
GET                    /id/                :id            none
GET                    /search             none           ?query
POST                   /auth/register      none           {username, password, confirmPassword, email}
POST                   /auth/login         none           {username, password}


----------------------

Note

MVC (Model,Route+Controller,View)