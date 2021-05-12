import { LitElementWithProps } from "pure-lit";
import "qrjs2";
interface QRCode {
    text: string;
}
declare const _default: LitElementWithProps<QRCode>;
export default _default;
declare global {
    interface HTMLElementTagNameMap {
        'qr-code': QRCode;
    }
}
//# sourceMappingURL=qr-code.d.ts.map