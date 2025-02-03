export default class EventManager {
  EventListener(element, eventType, method) {
    if (element) {
      element.addEventListener(eventType, (event) => {
        event.preventDefault();
        method(event.target.textContent);
      });
    }
  }
}
