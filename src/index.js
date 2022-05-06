import { ruKeys, enKeys } from './modules/data-keys.js';
import { Key } from './modules/Key.js';
import './style.css'

let languageKeyboard = 'ru' //sessionStorage.getItem('languageKeyboard') ? sessionStorage.getItem('languageKeyboard') : 'ru';
let isShift = false;
let isCapsLock = false;


const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
let keys = [];
let dataKeys = languageKeyboard === 'ru' ? ruKeys : enKeys;
console.log(dataKeys)


const generateDomElements = () => {
    keyboard.className = 'keyboard';
    let aboutOS = document.createElement('div');
    aboutOS.textContent = 'Клавиатура создана в операционной системе Windows';
    let aboutChangeLang = document.createElement('div');
    aboutChangeLang.textContent = 'Комбинация для переключения языка : левыe ctrl + shift';
    document.body.append(textarea, keyboard, aboutOS, aboutChangeLang);
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

window.addEventListener('keydown', (event) => {
    console.log(event.code)
    pressedKeyAnimation(event.code);
    if (event.code === 'CapsLock') {
        isCapsLock = true;
    }
})
window.addEventListener('keyup', (event) => {
    pressedKeyAnimationEnd(event.code);
})

function changeLanguage() {
    if (languageKeyboard === 'ru') {
        languageKeyboard = 'en';
        dataKeys = enKeys;
    }
    else{
        languageKeyboard = 'ru';
        dataKeys = ruKeys
    }
    console.log(languageKeyboard, dataKeys);
    generateKeys();
}
let pressed = new Set();

document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    if (!pressed.has('ControlLeft') || !pressed.has('ShiftLeft')) {
        return
    }
    pressed.clear();
    changeLanguage();
})

document.addEventListener('keyup', (event) => {
    pressed.delete(event.code)
})
