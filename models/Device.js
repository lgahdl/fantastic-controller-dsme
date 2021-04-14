const { Model } = require("objection");

// Client model.
class Client extends Model {
  constructor(object) {
    super();
    if (object) {
      this.device_id = object.device_id;
      this.device_name = object.device_name;
      this.temperature = object.temperature;
      this.active = object.active;

    }
  }
  static get tableName() {
    return "devices";
  }

  static get idColumn() {
    return "device_id";
  }

}

module.exports = Client;
