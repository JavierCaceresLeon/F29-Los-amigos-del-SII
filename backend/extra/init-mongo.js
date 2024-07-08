// init-mongo.js
db.createUser({
    user: "t3l3m4t1k",
    pwd: "f29_db_p4ssAdmin.",
    roles: [
      {
        role: "dbAdmin",
        db: "f29_db"
      }
    ]
  });
  


// crear schema de users pero accede a la base de datos f29_db
/*
db = db.getSiblingDB("f29_db");

db.createCollection("users");
db.users.insertOne({
    name: "Homer Simpson",
    email: "homer@simpson.us",
    password: "homer123",
    rut: "12345678"
});
db.users.insertOne({
    name: "Marge Simpson",
    email: "marge@simpson.us",  
    password: "marge123",
    rut: "87654321"
});
db.users.insertOne({
    name: "Bart Simpson",
    email: "elbarto@simpson.us",
    password: "bart123",
    rut: "18273645"
});*/
