export default class RenderTemplate {
  DeleteChildNode(parentNode, childNodeClassName) {
    const childNode = parentNode.querySelector(childNodeClassName);
    const deletedChildNode = parentNode.removeChild(childNode);
  }

  async Render(templateNode, childNode) {
    const questionHtml = templateNode.content.cloneNode(true).firstElementChild;
    childNode.appendChild(questionHtml);
  }
}
