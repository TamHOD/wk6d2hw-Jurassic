const Park = function (name, ticketPrice, dinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dino) {
  this.dinosaurs.push(dino);
};

Park.prototype.removeDino = function (dino) {
  let index = this.dinosaurs.indexOf(dino);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.mostVisitors = function () {
  let dino = 'squirtle'
  let visitors = 0
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > visitors) {
      visitors += dinosaur.guestsAttractedPerDay;
      dino = dinosaur.species;
    }
  }
  return dino;
};

Park.prototype.findSpecies = function (speciesName) {
  let dinos = []
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species === speciesName) {
      dinos.push(dinosaur);
    }
  }
  return dinos;
};

Park.prototype.visitorsPerDay = function () {
  let visitors = 0;
  for (let dinosaur of this.dinosaurs) {
    visitors += dinosaur.guestsAttractedPerDay;
  }
  return visitors
};

Park.prototype.visitorsPerYear = function () {
  let visitors = 0;
  for (let dinosaur of this.dinosaurs) {
    visitors += dinosaur.guestsAttractedPerDay;
  }
  return visitors * 365
};

Park.prototype.revenuePerYear = function () {
  let visitors = 0;
  for (let dinosaur of this.dinosaurs) {
    visitors += dinosaur.guestsAttractedPerDay;
  }
  return visitors * 365 * this.ticketPrice
};



module.exports = Park;
