document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.querySelector('textarea');
  document.getElementById('qrCodeText').addEventListener('keyup', (event) => {
    window.postMessage(
      {type: 'qr-code.changeText', text: event.target.value},
      window.location.origin
    );
    textarea.value = `<qr-code
  text="${event.target.value}"
></qr-code>`;
    textarea.style.height = '0px';
    textarea.style.height = textarea.scrollHeight + 'px';
  });
  textarea.style.height = '0px';
  textarea.style.height = textarea.scrollHeight + 'px';
  document.querySelector("button").addEventListener('click', () => {
      textarea.select();
      document.execCommand('copy');
  })
});
