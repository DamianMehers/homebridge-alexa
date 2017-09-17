"use strict";

var Service, Characteristic;
var say = require('say');

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory("homebridge-alexa", "AlexaSwitch", AlexaSwitch);
}

function AlexaSwitch(log, config) {
  this.log = log;
  this.name = config.name;
  
  this._service = new Service.Switch(this.name);
  this._service.getCharacteristic(Characteristic.On)
    .on('set', this._setOn.bind(this));
}

AlexaSwitch.prototype.getServices = function() {
  return [this._service];
}

AlexaSwitch.prototype._setOn = function(on, callback) {
  this.log("Setting " + this.name + " to " + on);
  say.speak("ALEXA,, turn " + (on ? "on " : "off ") + this.name, "Alex");

  callback();
}
