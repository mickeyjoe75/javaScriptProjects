const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const sightingsRouter = function (sightingsCollection) {

  //To get all the data from the DB
  router.get('/', (req, res) => {
    sightingsCollection
    .find()
    .toArray()
    .then((docs) => res.json(docs));
  });
  // To get the data by Id from the DB.
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    sightingsCollection
    .findOne({ _id: ObjectID(id) })
    .then((docs) => res.json(docs));
  });
  // To post all data into the DB
  router.post('/', (req, res) => {
    const newSighting = req.body.sighting;
    sightingsCollection
    .insertOne(newSighting)
    .then(() => {
      sightingsCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    });
  });
  // To get the delete data per Id from the db
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    sightingsCollection
    .deleteOne({ _id: ObjectID(id) })
    .then(() => {
      sightingsCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    });
  });
  //To update data by id into the db
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedSighting = req.body.sighting;
    sightingsCollection
    .updateOne(
      { _id: ObjectID(id) },
      { $set: updatedSighting }
    )
    .then(() => {
      sightingsCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    });
  });

  return router;
};

module.exports = sightingsRouter;
console.log(538%117);
