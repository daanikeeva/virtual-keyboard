import { Keys } from './scripts/data-keys.js';
import { Key } from './scripts/Key.js';
import './style.css'
// console.log('keys', Keys)
let languageKeyboard = 'ru' //sessionStorage.getItem('languageKeyboard') ? sessionStorage.getItem('languageKeyboard') : 'ru';
let isShift = false;
let isCapsLock = false;


let textarea = document.createElement('textarea');
let keyboard = document.createElement('div');


const generateDomElements = () => {
    keyboard.className = 'keyboard';
    let aboutOS = document.createElement('div');
    aboutOS.textContent = 'Клавиатура создана в операционной системе Windows';
    let aboutChangeLang = document.createElement('div');
    aboutChangeLang.textContent = 'Комбинация для переключения языка : левыe ctrl + shift';
    document.body.append(textarea, keyboard, aboutOS, aboutChangeLang);
}
generateDomElements()

let keys = [];
const generateKeys = () => {
//   let keys = [];
    Keys.forEach((dataKey, index) => {
        const node = new Key(dataKey);
        keys.push(node.generateKey(languageKeyboard));
        if (index === 13 || index === 27 || index === 40 || index === 53) {
            let br = document.createElement('br');
            keys.push(br)
        }
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
    pressedKeyAnimation(event.code);
    if (event.code === 'CapsLock') {
        keys.forEach(el => {
            Keys.forEach(data => {
                if (data.code === el.dataset.code) {
                    el.textContent = data[`${languageKeyboard}Shift`];
                    return
                }
            })
        })
    }
})
window.addEventListener('keyup', (event) => {
    pressedKeyAnimationEnd(event.code)
})

const changeKeys = (option) => {
    
}
