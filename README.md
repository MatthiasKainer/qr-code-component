# QR-Code

A simple qr code generating web component.

## Usage

```html

<script type="module" src="../dist/qr-code.min.js"></script>
<qr-code text="The text you want in the qr code"></qr-code>

```

You can also invoke a change in the text by triggering a post message with a type `qr-code.changeText`:

```js

window.postMessage({ type: "qr-code.changeText", text: "your new text" }, window.location.origin)

```
