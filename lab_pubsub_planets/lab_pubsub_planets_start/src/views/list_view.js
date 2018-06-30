const PubSub = require('../helpers/pub_sub.js');

const ListView = function (elements) {
  this.elements = elements;
}

ListView.prototype.bindEvents = function () {

  this.elements.forEach((element) => {
    element.addEventListener('click', (evt) => {
      const clickedPlanet = evt.target.id;
      console.log(evt.target);
      PubSub.publish('ListView:clicked', clickedPlanet);
    });
  });
};


module.exports = ListView;
