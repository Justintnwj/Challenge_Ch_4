export default class Component {
  constructor() {
    if (new.target === Component) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }

  // Abstract method render
  render() {
    throw new Error("Method 'render()' must be implemented.");
  }
}
