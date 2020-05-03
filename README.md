# QR-Code

A simple qr code generating web component.

## Usage

```html
<!-- lit-element from unpkg.com -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/MatthiasKainer/qr-code-component/dist/qr-code.min.js"
></script>
<!-- bundled with lit-element -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/MatthiasKainer/qr-code-component/dist/qr-code.dist.js"
></script>

<qr-code text="The text you want in the qr code"></qr-code>

```

You can also invoke a change in the text by triggering a post message with a type `qr-code.changeText`:

```js

window.postMessage({ type: "qr-code.changeText", text: "your new text" }, window.location.origin)

```
