function Observer(number) {
  return {
    notify() {
      console.log(`Observer ${number} is notified`);
    },
  };
}

export default Observer;
