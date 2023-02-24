const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  describe("upon initialisation", () => {
    it("returns the correct starting temperature of 20", () => {
      let thermostat = new Thermostat();
      temp = thermostat.getTemperature();
      expect(temp).toBe(20);
    });
  });

  describe("up()", () => {
    it("increases the temperature by 1", () => {
      let thermostat = new Thermostat();
      thermostat.getTemperature();
      expect(thermostat.getTemperature()).toBe(21)
    })

    it("when called twice, it increases the temp by 2", () => {
      let thermostat = new Thermostat();
      thermostat.getTemperature();
      thermostat.getTemperature();
      expect(thermostat.getTemperature()).toBe(22)
    })
  })

});
