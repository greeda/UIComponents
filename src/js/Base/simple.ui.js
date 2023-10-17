import commonUiList from "./common.ui.list.js";

export const UiMap = new WeakMap();

export function refreshUI(force = false) {
  commonUiList.forEach((ui) => {
    let elements = document.querySelectorAll(ui.className);

    elements.forEach((el) => {
      if (force || !el.dataset.ui) {
        if (!el.dataset.ui) {
        }
        const Class = ui.classObject;
        const options = {...el.dataset};
        console.log(options);
        const uiInstance = new Class(el, options);
        UiMap.set(el, uiInstance);
      }
    });
  });
}
