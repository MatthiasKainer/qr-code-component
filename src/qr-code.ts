import {LitElement, html, customElement, property, css} from 'lit-element';
import "qrjs2";

/**
 * A simple qr-code component
 *
 */
@customElement('qr-code')
export class QRCodeElement extends LitElement {
  static styles = css`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }
  .qrCanvas {
    background-size:cover;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  `;

  constructor() {
    super();
    window.addEventListener("message", (event) => {
      const {type, text} = event.data;
      if (event.origin !== window.location.origin || event.source !== window || !text || type !== "qr-code.changeText") return;
      this.text = text;
    }, false)
  }

  /**
   * The text to put in the qr code
   */
  @property()
  text = '';

  render() {
    if (!this.text) return html``;
    
    return html`<div class="qrCanvas" 
      title="${this.text}" 
      style="background-image:url('${QRCode.generatePNG(this.text, {})}')"></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qr-code': QRCodeElement;
  }
}
