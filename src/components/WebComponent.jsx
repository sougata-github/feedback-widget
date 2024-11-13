/* eslint-disable react-refresh/only-export-components */
import ReactDOM from "react-dom/client";
import Widget from "./Widget";

export const normalizeAttribute = ({ attribute }) => {
  return attribute.replace(/([a-z])/g, (_, letter) => letter.lowerCase());
};

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    const root = ReactDOM.createRoot(this.shadowRoot);
    root.render(<Widget {...props} />);
  }

  getPropsFromAttributes() {
    const props = {};
    for (const { name, value } of this.attributes) {
      props[normalizeAttribute(name)] = value;
    }
    return props;
  }
}

export default WidgetWebComponent;
