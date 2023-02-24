class Thermostat {
  constructor() {
    this.temp = 20;
    this.ecoMode = true
    this.maxTemp = this.ecoMode ? 25 : 32
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    if (this.temp < this.maxTemp) {
      this.temp += 1;
    };
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