const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:clicked-planet-ready', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });
};


PlanetInfoView.prototype.render = function(planet){
  const infoList = document.createElement('li');
  infoList.textContent = ` ${planet.name},
  ${planet.orbit},
  ${planet.surfaceArea},
  ${planet.volume},
  ${planet.gravity},
  ${planet.moons},
  ${planet.image}
  `;
  this.container.innerHTML = '';
  this.container.appendChild(infoList);
};

module.exports = PlanetInfoView;
