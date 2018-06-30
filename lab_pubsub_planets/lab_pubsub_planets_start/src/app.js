const Planets = require('./data/planets.js');
const ListView = require('./views/list_view.js');
const PlanetInfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsData = new Planets();
  planetsData.bindEvents();


  const clickElement = document.querySelector('nav.planets-menu');
  const elements = document.querySelectorAll('li.planet-menu-item');
  const planetsMenu = new ListView(elements);
  planetsMenu.bindEvents();

  const detailsContainer = document.querySelector('section.planet-details');
  const planetDetailsView = new PlanetInfoView(detailsContainer);
  planetDetailsView.bindEvents();

});
