db = db.getSiblingDB("f29_db");

db.createUser({
    user: "t3l3m4t1k",
    pwd: "f29_db_p4ssAdmin.",
    roles: [
      {
        role: "dbAdmin",
        db: "f29_db"
      },
      {
        role: "readWrite",
        db: "f29_db"
      }
    ]
});

db.createCollection("users");
db.users.insertMany([
    {
        _id: ObjectId(),
        name: "Homer Simpson",
        email: "homer@simpson.us",
        password: "homer123",
        rut: "12345678"
    },
    {
        _id: ObjectId(),
        name: "Marge Simpson",
        email: "marge@simpson.us",  
        password: "marge123",
        rut: "87654321"
    },
    {
        _id: ObjectId(),
        name: "Bart Simpson",
        email: "elbarto@simpson.us",
        password: "bart123",
        rut: "18273645"
    }
]);

