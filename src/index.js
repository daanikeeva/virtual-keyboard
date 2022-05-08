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
  const hint = document.createElement('div');
  hint.className = 'hint';
  hint.innerHTML = `<p>Клавиатура создана в операционной системе Windows</p>
  <p>Комбинация для переключения языка: левыe ctrl + alt</p>`;
  document.body.append(textarea, keyboard, hint);
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

const inputText = (text) => {
  textarea.focus();
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const str1 = valueTextarea.slice(0, start);
  const str2 = valueTextarea.slice(end, valueTextarea.length);
  valueTextarea = str1 + text + str2;
  textarea.textContent = valueTextarea;
  textarea.selectionStart = start + 1;
};

const deleteLeftSymbol = () => {
  textarea.focus();
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const str1 = valueTextarea.slice(0, start);
  const str2 = valueTextarea.slice(end, valueTextarea.length);
  if (start === end) {
    valueTextarea = str1.slice(0, -1) + str2;
    textarea.textContent = valueTextarea;
    textarea.setSelectionRange(str1.length - 1, str1.length - 1);
  } else {
    valueTextarea = str1 + str2;
    textarea.textContent = valueTextarea;
    textarea.setSelectionRange(str1.length, str1.length);
  }
};

let down = false;
document.addEventListener('keydown', (event) => {
  pressedKeyAnimation(event.code);
  event.preventDefault();
  pressed.add(event.code);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (down) return;
    down = true;
    changeShift();
    pressedKeyAnimation(event.code);
  }
});

document.addEventListener('keyup', (event) => {
  pressedKeyAnimationEnd(event.code);
  down = false;
  textarea.focus();
  if (pressed.has('ControlLeft') && pressed.has('AltLeft')) {
    changeLanguage();
  }
  pressed.clear();
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    changeShift();
    pressedKeyAnimationEnd(event.code);
  } else {
    keys.forEach((key) => {
      if (key.dataset.code === event.code) {
        key.click();
      }
    });
  }
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
  if (target.dataset.code === 'ShiftLeft' || target.dataset.code === 'ShiftRight') {
    changeShift();
    pressedKeyAnimation(target.dataset.code);
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
