import { html, css } from 'lit-element';
import { LitElementWithProps, pureLit, useOnce, useState } from "pure-lit/lib/full"
import "qrjs2";

interface QRCode {
  text: string
}

const styles = css`
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
`

export default pureLit("qr-code", (el: LitElementWithProps<QRCode>) => {
  const state = useState(el, el.text)
  useOnce(el, () =>
    window.addEventListener("message", (event) => {
      const { type, text } = event.data;
      if (event.origin !== window.location.origin || event.source !== window || !text || type !== "qr-code.changeText") return;
      state.publish(text);
    }, false)
  )

  const text = state.getState()
  return !text ? html`` : html`<div class="qrCanvas" 
    title="${text}" 
    style="background-image:url('${QRCode.generatePNG(text, {})}')"></div>`
}, {
  styles,
  defaults: { text: "" }
})

declare global {
  interface HTMLElementTagNameMap {
    'qr-code': QRCode;
  }
}
