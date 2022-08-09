import PubSub from "../pattern/PubSub";
export default class Store {
  constructor(params) {
    let self = this;
    self.actions = {};
    self.state = {};
    if (params.hasOwnProperty("actions")) {
      self.actions = params.actions;
    }

    if (params.hasOwnProperty("state")) {
      self.state = params.state;
    }
  }

  dispatch(actionType) {
    let self = this;
    this.actionHandler(actionType);
    console.log(self.state.counter);
  }

  actionHandler(actionType) {
    let self = this;
    console.log(`ACTION: ${actionType}`);
    self.state.counter = self.actions(self.state, actionType).counter;
    this.mutateState();
  }

  mutateState() {
    let self = this;
    self.events = new PubSub();
    console.log(self.events);
    // Publish the change event for the components that are listening
    self.events.publish("stateChange", self.state);
  }
}
