import {QRCodeElement} from './qr-code.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

QRCode.generatePNG = (text: string) => text

suite('qr-code', () => {
  test('is defined', () => {
    const el = document.createElement('qr-code');
    assert.instanceOf(el, QRCodeElement);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<qr-code></qr-code>`);
    assert.shadowDom.equal(
      el,
      ``
    );
  });
  
  test('renders an qr code element if text is passed', async () => {
    const el = await fixture(html`<qr-code text="https://matthias-kainer.de"></qr-code>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="qrCanvas" title="https://matthias-kainer.de" style="background-image:url('https://matthias-kainer.de')"></div>
      `
    );
  });
  
  test('renders an qr code element if text is send from event', async () => {
    const el = await fixture(html`<qr-code text="https://matthias-kainer.de"></qr-code>`);
    window.postMessage({ type: "qr-code.changeText", text: "Another Text" }, window.location.origin)
    await new Promise(resolve => {
      setTimeout(resolve, 5)
    })
    assert.shadowDom.equal(
      el,
      `
      <div class="qrCanvas" title="Another Text" style="background-image:url('Another Text')"></div>
      `
    );
  });
});
