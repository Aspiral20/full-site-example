## Controllers - Automatizeaza codul

Controller-ele sunt create pentru a face mai eficient lucrul routerului si nu a scri mai mult cod in zadar.

Routerele lucreaza si fara controller-e.

- **findAll({object for options})** - gaseste toate datele de pe back
- **findAndCountAll({object for options})** - gaseste toate datele de pe back si returneaza numarul total de marfuri

In async functii folosim req, res, next.

- **req (request) [GET - DB]** - primeste ceva (de pe Server sau DB)
- **res (response) [POST - API]** - returneaza ceva pe Server / DB
- **next (next) [USER]** - din partea utilizatorului