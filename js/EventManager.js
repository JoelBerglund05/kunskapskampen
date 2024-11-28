export default class EventManager {
  EventListener(element, eventType, method) {
    if (element) {
      element.addEventListener(eventType, (event) => method(event));
    }
  }
}
