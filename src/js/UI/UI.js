class UI {
  name = "ui";
  el;
  uiId;
  eventId;

  constructor(name, el) {
    this.name = name;
    this.el = el;
    this.setEventId();
  }

  init() {}

  setEventId() {
    this.uiId = `${this.name}-${this.getRandomStr()}`;
    this.eventId = `.${this.uiId}`;
  }

  getRandomStr() {
    return Math.round(Math.random() * 100000);
  }

  parseOptions(options) {
    let splitString;
    let numberArray = [];

    if (typeof options.no == "string") {
      splitString = options.no.split(",");

      splitString.map((item) => {
        numberArray.push(+item);
      });

      options.no = numberArray;
    }

    return options;
  }
}

export default UI;
