export default class EventManager {
  ElementEventListener(element, eventType, method) {
    if (element) {
      element.addEventListener(eventType, method);
    }
  }

  NoneElementEventListener(eventType, method){
    document.addEventListener(eventType, (event) => method(event));
  }
}
