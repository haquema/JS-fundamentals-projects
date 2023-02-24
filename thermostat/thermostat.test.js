const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  describe("upon initialisation", () => {
    it("returns the correct starting temperature of 20", () => {
      let thermostat = new Thermostat();
      expect(thermostat.getTemperature()).toBe(20);
    });
    it("has power saving mode turned on by default", () => {
      let thermostat = new Thermostat();
      expect(thermostat.checkMode()).toBe('Power saving mode is turned on and max temp is 25');

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

    it("doesn't increase temp above max temp in eco mode", () => {
      let thermostat = new Thermostat();
      thermostat.setPowerSavingMode(true);
      for (let i = 0 ; i < 15 ; i++) {
        thermostat.up();
      };
      expect(thermostat.checkMode()).toBe('Power saving mode is turned on and max temp is 25');
      expect(thermostat.getTemperature()).toBe(25);
    })

    it("doesn't increase temp above max temp", () => {
      let thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 15 ; i++) {
        thermostat.up();
      };
      expect(thermostat.checkMode()).toBe('Power saving mode is turned off and max temp is 32');
      expect(thermostat.getTemperature()).toBe(32);
    })
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
      expect(thermostat.checkMode()).toBe('Power saving mode is turned on and max temp is 25');
    })

    it("turns power saving mode off", () => {
      let thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      expect(thermostat.checkMode()).toBe('Power saving mode is turned off and max temp is 32');
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
