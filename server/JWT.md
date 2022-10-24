# JWT (Json Web Token)

##Tooluri PM (Package Manager):

Pentru a folosit JWT + JS(Nodejs + express) avem nevoie de urmatoarele tooluri pe care le v-om folosit in proiect

- <b>jsonwebtoken</b> - genereaza tokenul.
- <b>bcrypt</b> - face hash la password-uri ca sa nu se stocheze in bd in mod deschis


### Bcrypt (unde e folosit in proiect)

- userController -> registration
- SecretKey(Token) -> .env


### Site care face decode la token:

Test -> [https://jwt.io/](https://jwt.io/)