class Thermostat {
  constructor() {
    this.temp = 20;
    this.ecoMode = true
    this.maxTemp = 25
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    this.temp < this.maxTemp ? this.temp ++ : this.maxTemp;
  }

  down() {
    this.temp--;
  }

  setPowerSavingMode(bool) {
    this.ecoMode = bool;
    this.#updateMaxTemp;
    this.#updateTemp;
    
  }

  checkMode() {
    return this.ecoMode;
  }


  // private methods
  
  #updateMaxTemp() {
    this.maxTemp = this.ecoMode ? 25 : 32;
  }

  #updateTemp() {
    if (this.temp > this.maxTemp) {
      this.temp = this.maxTemp;
    };
  }

}

module.exports = Thermostat;