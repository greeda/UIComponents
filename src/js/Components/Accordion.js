import UI from "../UI/UI.js";

export default class Accordion extends UI {
  constructor(el, options) {
    super("Accordion", el);

    this.init(el, options);
  }

  init(el, options) {
    this.defaults = {...this.defaults, ...this.parseOptions(options)};
    this.dataset.id = this.uiId;
    
    this.render();
  }
  render() {
    console.log('@@@Accordion@@@');
  }

  bindEvents() {}

  attachEvents() {}

  detachEvents() {}

  open() {}

  close() {}
  
}
