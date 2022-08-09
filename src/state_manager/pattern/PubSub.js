export default class PubSub {
  constructor() {
    this.events = {};
  }
  subscribe(event, callback) {
    let self = this;

    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }

    // We know we've got an array for this event, so push our callback in there with no fuss
    return self.events[event].push(callback);
  }

  publish(event, data = {}) {
    let self = this;

    // There's no event to publish to, so bail out
    if (!self.events.hasOwnProperty(event)) {
      return [];
    }

    // Get each subscription and call its callback with the passed data
    return self.events[event].map((callback) => callback(data));
  }
}
