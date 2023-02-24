class Thermostat {
  constructor() {
    this.temp = 20;
    this.ecoMode = true
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    if (this.ecoMode) {
      if (this.temp < 25) {
        this.temp += 1;
      }
    } else {
    this.temp += 1;
    }
  }

  down() {
    this.temp -= 1;
  }

  setPowerSavingMode(bool) {
    this.ecoMode = bool;
    
  }

  checkMode() {
    return this.ecoMode;
  }
}

module.exports = Thermostat;