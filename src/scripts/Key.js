export class Key {
  constructor({ code, en, enShift, ru, ruShift, }) {
    this.code = code;
    this.ru = ru;
    // this.keyCode = keyCode;
    // this.capsLockKey = capsLockKey;
  }

  generateKey(lang) {
    // let template = '';
    let buttonKey = document.createElement('div');
    buttonKey.className = 'key';
    buttonKey.setAttribute('data-code', this.code);
    buttonKey.textContent = `${this.ru}`;
    return buttonKey;
  }
};