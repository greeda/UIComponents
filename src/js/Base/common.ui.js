import { refreshUI, UiMap } from "./simple.ui.js";
import {
  Accordion,
  Popup
} from '../Components';

const FrontUI = {
  Popup,
  Accordion,
};

window.FrontUI = FrontUI;
window.FrontAPI = UiMap;

function init() {
  refreshUI();
}

window.addEventListener("DOMContentLoaded", () => {
  init();
});
