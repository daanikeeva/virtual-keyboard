import { ruKeys, enKeys } from './modules/data-keys.js';
import { Key } from './modules/Key.js';
import './style.css'

let languageKeyboard = 'ru' //sessionStorage.getItem('languageKeyboard') ? sessionStorage.getItem('languageKeyboard') : 'ru';
let isShift = false;
let isCapsLock = false;
let pressed = new Set();

const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
let valueTextarea = textarea.value;
let keys = [];
let dataKeys = languageKeyboard === 'ru' ? ruKeys : enKeys;


const generateDomElements = () => {
    keyboard.className = 'keyboard';
    let aboutOS = document.createElement('div');
    aboutOS.textContent = 'Клавиатура создана в операционной системе Windows';
    let aboutChangeLang = document.createElement('div');
    aboutChangeLang.textContent = 'Комбинация для переключения языка : левыe ctrl + alt';
    document.body.append(textarea, keyboard, aboutOS, aboutChangeLang);
    textarea.focus();

}
generateDomElements()

const generateKeys = () => {
    keyboard.innerHTML = '';
    keys = [];
        dataKeys.forEach((dataKey) => {
        const node = new Key(dataKey);
        keys.push(node.generateKey(isShift, isCapsLock));
        })
        keys.forEach(el => {
        keyboard.append(el)
    })
}
generateKeys();

const pressedKeyAnimation = (key) => {
    const activeKey = keyboard.querySelector(`[data-code='${key}']`);
    activeKey.classList.add('active')
}
const pressedKeyAnimationEnd = (key) => {
    const activeKey = keyboard.querySelector(`[data-code='${key}']`);
    activeKey.classList.remove('active')
}
const changeLanguage = () => {
    if (languageKeyboard === 'ru') {
        languageKeyboard = 'en';
        dataKeys = enKeys;
    }
    else{
        languageKeyboard = 'ru';
        dataKeys = ruKeys;
    }
    generateKeys();
    textarea.focus();
}

const changeCapsLock = () => {
    if (isCapsLock) {
        isCapsLock = false;
    }
    else {
        isCapsLock = true;
    }
    generateKeys();
}

const changeShift = (text) => {
    if (isShift) {
        isShift = false
    }
    else isShift = true
    generateKeys();

}
const inputText = (code) => {
    valueTextarea += text;
    textarea.textContent = valueTextarea;
    textarea.selectionStart = textarea.value.length;
}

document.addEventListener('keydown', (event) => {
    pressedKeyAnimation(event.code);
    pressed.add(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        event.preventDefault()
        changeShift();
        pressedKeyAnimation(event.code) 
    }
    dataKeys.forEach(data => {
        if (event.code === data.keyCode) {
            
        }
    })
})
document.addEventListener('keyup', (event) => {
    pressedKeyAnimationEnd(event.code);
    textarea.focus();
    if (pressed.has('ControlLeft') && pressed.has('AltLeft')) {
        changeLanguage();
    }
    pressed.clear();

    if (event.code === 'CapsLock') {
        changeCapsLock();
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        changeShift();
    }

})

keyboard.addEventListener('click', event => {
    textarea.focus()
    if (event.target.classList.contains('key') && !event.target.classList.contains('special-key')) {
        let text = event.target.textContent;
        inputText(text);
    }
})

keyboard.addEventListener('mousedown', event => {
    let target = event.target;
    if (target.classList.contains('key')) {
        target.classList.add('active')
    }
})

keyboard.addEventListener('mouseup', event => {
    let target = event.target;
    if (target.classList.contains('key')) {
        target.classList.remove('active')
    }
})