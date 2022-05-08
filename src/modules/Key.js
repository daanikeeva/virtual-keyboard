export default class Key {
  constructor({
    key, shiftKey, capsLockKey, keyCode, isSpecial,
  }) {
    this.key = key;
    this.shiftKey = shiftKey;
    this.capsLockKey = capsLockKey;
    this.keyCode = keyCode;
    this.isSpecial = isSpecial;
  }

  generateKey(shift, caps) {
    const buttonKey = document.createElement('div');
    buttonKey.className = 'key';
    buttonKey.setAttribute('data-code', this.keyCode);

    if (shift) {
      if (!caps) {
        if (this.isSpecial) {
          buttonKey.textContent = this.key;
          buttonKey.classList.add('special-key');
        } else buttonKey.textContent = this.shiftKey;
      } else {
        if (this.isSpecial) {
          buttonKey.classList.add('special-key');
        }
        if (this.keyCode.indexOf('Digit') === 0) {
          buttonKey.textContent = this.shiftKey;
        } else buttonKey.textContent = this.key;
      }
    } else if (caps) {
      if (this.capsLockKey) {
        buttonKey.textContent = this.capsLockKey;
      } else {
        if (this.isSpecial) {
          buttonKey.classList.add('special-key');
        }
        buttonKey.textContent = this.key;
      }
    } else {
      if (this.isSpecial) {
        buttonKey.classList.add('special-key');
      }
      buttonKey.textContent = this.key;
    }
    return buttonKey;
  }
}
