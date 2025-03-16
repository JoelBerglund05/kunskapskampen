export default class RenderTemplate {
  DeleteChildNode(parentNode, childNodeClassName) {
    const childNode = parentNode.querySelector(childNodeClassName);
    const deletedChildNode = parentNode.removeChild(childNode);
  }

  async Render(templateNode, parentNode) {
    const questionHtml = templateNode.content.cloneNode(true).firstElementChild;
    parentNode.appendChild(questionHtml);
  }
}
