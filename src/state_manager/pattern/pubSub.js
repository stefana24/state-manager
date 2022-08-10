function pubSub() {
  //store subscribed callbacks
  const subscribers = {};
  //function responsible for inserting callbacks into subscribers
  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
  }

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }

  return {
    subscribe,
    publish,
  };
}

export default pubSub;
