function Subject() {
  let observers = [];
  return {
    subscribe(observer) {
      observers.push(observer);
    },
    unsubscribe(observer) {
      const results = observers.filter((item) => item !== observer);
      observers = [...results];
    },
    notify(observer) {
      const idx = observers.indexOf(observer);
      if (idx > -1) {
        observers[idx].notify();
      }
    },
  };
}

export default Subject;
