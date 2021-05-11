import { LitElement } from 'lit-element';
import "qrjs2";
/**
 * A simple qr-code component
 *
 */
export declare class QRCodeElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    constructor();
    /**
     * The text to put in the qr code
     */
    text: string;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qr-code': QRCodeElement;
    }
}
//# sourceMappingURL=qr-code.d.ts.map