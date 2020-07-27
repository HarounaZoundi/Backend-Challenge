
#### Create new database 

    installing <b>postgres</b>  is required
## Terminal commands for postgres:
    createuser -P -s -e your_userNane
    createdb -h localhost -U your_userNane your_database_name

### Instructions for running  the backend
    cp .env.example .env  
    cd harouna
    npm install
    npm run dev


### Tables
____


                    List of relations
            Schema |  Name  | Type  |  
            --------+--------+--------
            public | Orders | table | 
            public | users  | table | 
            (2 rows)

#### <u>EndPoints</u>

> **users**

```
GET -> /users/                                   //get all users
POST -> /users/   +
        body-json
        {
            "fisrtName":" firstname",             //required!!
            "lastname":"lastname"                 //required!!
            "email":" someemail@mail.com",        //required!!
            "password":"password"                 //required!!
        }

```

> **Orders**

```
GET{id} -> /orders/                                 //get all orders
GET{id} -> /orders/:id                              //get by order id or by user id
      
POST -> /orders/  +          
    body-json
    {
        "user_id": " ",                             //require
	    "name":"order name",                        //require
	    "quantity":" 2"                             //require
        "price" : " 50.50 "                         //require
    }
PUT -> /orders/update/:id  +               
    body-json
    {                          
	    "name":"order name",                       
	    "quantity":" 2"                             
        "price" : " 50.50 "                         
    }

DELETE -> /order/delete/:id       //required!!   




