import Component from "/scripts/Component.js";

export default class Car extends Component {
  constructor(model, brand) {
    super();
    this.model = model;
    this.brand = brand;
  }

  // Implementation of render method
  render() {
    return `Brand: ${this.brand}, Model: ${this.model}`;
  }
}
