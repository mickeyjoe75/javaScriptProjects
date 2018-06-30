use zoo;
db.dropDatabase();

db.animals.insertOne({
  name: "Janet",
  type: "Polar Bear"
});

db.animals.insertOne({
  name: "Norman",
  type: "Panda",
  age: 5
});

db.animals.find();
db.animals.find( { name: "Norman"} );
db.animals.deleteOne( {name: "Norman"})
