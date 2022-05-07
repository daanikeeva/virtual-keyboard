import { ruKeys, enKeys } from './modules/data-keys';
import Key from './modules/Key';
import './style.css';

let languageKeyboard = localStorage.getItem('languageKeyboard') ? localStorage.getItem('languageKeyboard') : 'ru';
let isShift = false;
let isCapsLock = false;
const pressed = new Set();

const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
let valueTextarea = textarea.value;
let keys = [];
let dataKeys = languageKeyboard === 'ru' ? ruKeys : enKeys;

const generateDomElements = () => {
  keyboard.className = 'keyboard';
  const aboutOS = document.createElement('div');
  aboutOS.textContent = 'Клавиатура создана в операционной системе Windows';
  const aboutChangeLang = document.createElement('div');
  aboutChangeLang.textContent = 'Комбинация для переключения языка : левыe ctrl + alt';
  document.body.append(textarea, keyboard, aboutOS, aboutChangeLang);
  textarea.focus();
};
generateDomElements();

const generateKeys = () => {
  keyboard.innerHTML = '';
  keys = [];
  dataKeys.forEach((dataKey) => {
    const node = new Key(dataKey);
    keys.push(node.generateKey(isShift, isCapsLock));
  });
  keys.forEach((el) => {
    keyboard.append(el);
  });
};
generateKeys();

const pressedKeyAnimation = (key) => {
  const activeKey = keyboard.querySelector(`[data-code='${key}']`);
  activeKey.classList.add('active');
};
const pressedKeyAnimationEnd = (key) => {
  const activeKey = keyboard.querySelector(`[data-code='${key}']`);
  activeKey.classList.remove('active');
};
const changeLanguage = () => {
  if (languageKeyboard === 'ru') {
    languageKeyboard = 'en';
    dataKeys = enKeys;
  } else {
    languageKeyboard = 'ru';
    dataKeys = ruKeys;
  }
  generateKeys();
  localStorage.setItem('languageKeyboard', languageKeyboard);
  textarea.focus();
};

const changeCapsLock = () => {
  if (isCapsLock) {
    isCapsLock = false;
  } else {
    isCapsLock = true;
  }
  generateKeys();
};

const changeShift = () => {
  if (isShift) {
    isShift = false;
  } else isShift = true;
  generateKeys();
};

function getCaret(el) {
  if (el.selectionStart) {
    return el.selectionStart;
  } if (document.selection) {
    el.focus();

    const r = document.selection.createRange();
    if (r == null) {
      return 0;
    }
    const re = el.createTextRange();
    const rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }
  return 0;
}

const inputText = (text) => {
  const caretPosition = getCaret(textarea);
  if (caretPosition === valueTextarea.length) {
    valueTextarea += text;
    textarea.textContent = valueTextarea;
    textarea.selectionStart = textarea.value.length;
    textarea.focus();
  } else {
    const str1 = valueTextarea.slice(0, caretPosition);
    const str2 = valueTextarea.slice(caretPosition, valueTextarea.length);
    valueTextarea = str1 + text + str2;
    textarea.textContent = valueTextarea;
    textarea.setSelectionRange(caretPosition + 1, caretPosition + 1);
  }
};

const deleteLeftSymbol = () => {
  const caretPosition = getCaret(textarea);
  if (caretPosition === valueTextarea.length) {
    valueTextarea = valueTextarea.slice(0, -1);
    textarea.textContent = valueTextarea;
    textarea.selectionStart = textarea.value.length;
    textarea.focus();
  } else {
    const str1 = valueTextarea.slice(0, caretPosition);
    const str2 = valueTextarea.slice(caretPosition, valueTextarea.length);
    valueTextarea = str1.slice(0, -1) + str2;
    textarea.textContent = valueTextarea;
    textarea.setSelectionRange(caretPosition - 1, caretPosition - 1);
  }
};

let down = false;
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  pressedKeyAnimation(event.code);
  pressed.add(event.code);
  if (down) return;
  down = true;
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    event.preventDefault();
    changeShift();
    pressedKeyAnimation(event.code);
  }
});

document.addEventListener('keyup', (event) => {
  down = false;
  event.preventDefault();
  pressedKeyAnimationEnd(event.code);
  textarea.focus();
  if (pressed.has('ControlLeft') && pressed.has('AltLeft')) {
    changeLanguage();
  }
  pressed.clear();
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    event.preventDefault();
    changeShift();
    pressedKeyAnimation(event.code);
  }
  keys.forEach((key) => {
    if (key.dataset.code === event.code) {
      key.click();
    }
  });
});

keyboard.addEventListener('click', (event) => {
  textarea.focus();
  if (event.target.dataset.code === 'CapsLock') {
    changeCapsLock();
  }
  if (event.target.classList.contains('key') && !event.target.classList.contains('special-key')) {
    const text = event.target.textContent;
    inputText(text);
  }
  if (event.target.dataset.code === 'Tab') {
    inputText('\t');
  }
  if (event.target.dataset.code === 'Enter') {
    inputText('\n');
  }
  if (event.target.dataset.code === 'Backspace') {
    deleteLeftSymbol();
  }
  if (event.target.dataset.code === 'ArrowUp') {
    inputText('▲');
  }
  if (event.target.dataset.code === 'ArrowDown') {
    inputText('▼');
  }
  if (event.target.dataset.code === 'ArrowLeft') {
    inputText('◄');
  }
  if (event.target.dataset.code === 'ArrowRight') {
    inputText('►');
  }
});

keyboard.addEventListener('mousedown', (event) => {
  const { target } = event;
  if (target.classList.contains('key')) {
    target.classList.add('active');
  }
  if (event.target.dataset.code === 'ShiftLeft' || event.target.dataset.code === 'ShiftRight') {
    changeShift();
  }
});

keyboard.addEventListener('mouseup', (event) => {
  const { target } = event;
  if (target.classList.contains('key')) {
    target.classList.remove('active');
  }
  if (event.target.dataset.code === 'ShiftLeft' || event.target.dataset.code === 'ShiftRight') {
    changeShift();
  }
});
