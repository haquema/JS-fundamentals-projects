const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  describe("upon initialisation", () => {
    it("returns the correct starting temperature of 20", () => {
      let thermostat = new Thermostat();
      expect(thermostat.getTemperature()).toBe(20);
    });
    it("has power saving mode turned on by default", () => {
      let thermostat = new Thermostat();
      expect(thermostat.checkMode()).toBe(true);

    })
  });

  describe("up()", () => {
    it("increases the temperature by 1", () => {
      let thermostat = new Thermostat();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(21);
    });

    it("when called twice, it increases the temp by 2", () => {
      let thermostat = new Thermostat();
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(22);
    });
  });

  describe("down()", () => {
    it("increases the temperature by 1", () => {
      let thermostat = new Thermostat();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(19);
    });

    it("when called twice, it increases the temp by 2", () => {
      let thermostat = new Thermostat();
      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(18);
    });
  });
  
  describe("setPowerSavingMode()", () => {
    it("turns power saving mode on", () => {
      let thermostat = new Thermostat();
      thermostat.setPowerSavingMode(true);
      expect(thermostat.checkMode()).toBe(true);
    })
    
    it("sets maximum temperature to 25 when set to true", () => {
      let thermostat = new Thermostat();
      thermostat.setPowerSavingMode(true);
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toBe(25);
    })

    it("reduces temperature to 25 when set to true", () => {
      let thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      };
      thermostat.setPowerSavingMode(true);
      expect(thermostat.getTemperature()).toBe(25);
    })
  })

});
