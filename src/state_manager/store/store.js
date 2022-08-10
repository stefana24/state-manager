import pubSub from "../pattern/pubSub";
export default class Store {
  constructor(params) {
    this.actions = {};
    this.state = {};
    this.pubSub = pubSub();
    if (params.hasOwnProperty("actions")) {
      this.actions = params.actions;
    }

    if (params.hasOwnProperty("state")) {
      this.state = params.state;
    }
  }

  dispatch(actionType) {
    this.actionHandler(actionType);
  }

  actionHandler(actionType) {
    this.mutateState(this.actions(this.state, actionType).counter);
  }

  mutateState(param) {
    this.state.counter = param;
    this.pubSub.publish("stateChange", this.state.counter);
  }

  subscribe(event, callback) {
    this.pubSub.subscribe(event, callback);
  }
}
