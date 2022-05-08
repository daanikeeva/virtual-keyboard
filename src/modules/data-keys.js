const ruKeys = [
  {
    key: 'ё', shiftKey: 'Ё', capsLockKey: 'Ё', keyCode: 'Backquote',
  },
  {
    key: '1', shiftKey: '!', keyCode: 'Digit1',
  },
  {
    key: '2', shiftKey: '\'', keyCode: 'Digit2',
  },
  {
    key: '3', shiftKey: '№', keyCode: 'Digit3',
  },
  {
    key: '4', shiftKey: ';', keyCode: 'Digit4',
  },
  {
    key: '5', shiftKey: '%', keyCode: 'Digit5',
  },
  {
    key: '6', shiftKey: ':', keyCode: 'Digit6',
  },
  {
    key: '7', shiftKey: '?', keyCode: 'Digit7',
  },
  {
    key: '8', shiftKey: '*', keyCode: 'Digit8',
  },
  {
    key: '9', shiftKey: '(', keyCode: 'Digit9',
  },
  {
    key: '0', shiftKey: ')', keyCode: 'Digit0',
  },
  {
    key: '-', shiftKey: '_', keyCode: 'Minus',
  },
  {
    key: '=', shiftKey: '+', keyCode: 'Equal',
  },
  {
    key: 'Backspace', isSpecial: true, keyCode: 'Backspace',
  },
  { key: 'Tab', isSpecial: true, keyCode: 'Tab' },
  {
    key: 'й', shiftKey: 'Й', capsLockKey: 'Й', keyCode: 'KeyQ',
  },
  {
    key: 'ц', shiftKey: 'Ц', capsLockKey: 'Ц', keyCode: 'KeyW',
  },
  {
    key: 'у', shiftKey: 'У', capsLockKey: 'У', keyCode: 'KeyE',
  },
  {
    key: 'к', shiftKey: 'К', capsLockKey: 'К', keyCode: 'KeyR',
  },
  {
    key: 'е', shiftKey: 'Е', capsLockKey: 'Е', keyCode: 'KeyT',
  },
  {
    key: 'н', shiftKey: 'Н', capsLockKey: 'Н', keyCode: 'KeyY',
  },
  {
    key: 'г', shiftKey: 'Г', capsLockKey: 'Г', keyCode: 'KeyU',
  },
  {
    key: 'ш', shiftKey: 'Ш', capsLockKey: 'Ш', keyCode: 'KeyI',
  },
  {
    key: 'щ', shiftKey: 'Щ', capsLockKey: 'Щ', keyCode: 'KeyO',
  },
  {
    key: 'з', shiftKey: 'З', capsLockKey: 'З', keyCode: 'KeyP',
  },
  {
    key: 'х', shiftKey: 'Х', capsLockKey: 'Х', keyCode: 'BracketLeft',
  },
  {
    key: 'ъ', shiftKey: 'Ъ', capsLockKey: 'Ъ', keyCode: 'BracketRight',
  },
  {
    key: '\\', shiftKey: '|', keyCode: 'Backslash',
  },
  { key: 'CapsLock', isSpecial: true, keyCode: 'CapsLock' },
  {
    key: 'ф', shiftKey: 'Ф', capsLockKey: 'Ф', keyCode: 'KeyA',
  },
  {
    key: 'ы', shiftKey: 'Ы', capsLockKey: 'Ы', keyCode: 'KeyS',
  },
  {
    key: 'в', shiftKey: 'В', capsLockKey: 'В', keyCode: 'KeyD',
  },
  {
    key: 'а', shiftKey: 'А', capsLockKey: 'А', keyCode: 'KeyF',
  },
  {
    key: 'п', shiftKey: 'П', capsLockKey: 'П', keyCode: 'KeyG',
  },
  {
    key: 'р', shiftKey: 'Р', capsLockKey: 'Р', keyCode: 'KeyH',
  },
  {
    key: 'о', shiftKey: 'О', capsLockKey: 'О', keyCode: 'KeyJ',
  },
  {
    key: 'л', shiftKey: 'Л', capsLockKey: 'Л', keyCode: 'KeyK',
  },
  {
    key: 'д', shiftKey: 'Д', capsLockKey: 'Д', keyCode: 'KeyL',
  },
  {
    key: 'ж', shiftKey: 'Ж', capsLockKey: 'Ж', keyCode: 'Semicolon',
  },
  {
    key: 'э', shiftKey: 'Э', capsLockKey: 'Э', keyCode: 'Quote',
  },
  {
    key: 'Enter', isSpecial: true, keyCode: 'Enter',
  },
  { key: 'Shift', isSpecial: true, keyCode: 'ShiftLeft' },
  {
    key: 'я', shiftKey: 'Я', capsLockKey: 'Я', keyCode: 'KeyZ',
  },
  {
    key: 'ч', shiftKey: 'Ч', capsLockKey: 'Ч', keyCode: 'KeyX',
  },
  {
    key: 'с', shiftKey: 'С', capsLockKey: 'С', keyCode: 'KeyC',
  },
  {
    key: 'м', shiftKey: 'М', capsLockKey: 'М', keyCode: 'KeyV',
  },
  {
    key: 'и', shiftKey: 'И', capsLockKey: 'И', keyCode: 'KeyB',
  },
  {
    key: 'т', shiftKey: 'Т', capsLockKey: 'Т', keyCode: 'KeyN',
  },
  {
    key: 'ь', shiftKey: 'Ь', capsLockKey: 'Ь', keyCode: 'KeyM',
  },
  {
    key: 'б', shiftKey: 'Б', capsLockKey: 'Б', keyCode: 'Comma',
  },
  {
    key: 'ю', shiftKey: 'Ю', capsLockKey: 'Ю', keyCode: 'Period',
  },
  {
    key: '.', shiftKey: ',', keyCode: 'Slash',
  },
  {
    key: '↑', isSpecial: true, keyCode: 'ArrowUp',
  },
  {
    key: 'Shift', isSpecial: true, keyCode: 'ShiftRight',
  },
  {
    key: 'Ctrl', isSpecial: true, keyCode: 'ControlLeft',
  },
  {
    key: 'Win', isSpecial: true, keyCode: 'MetaLeft',
  },
  {
    key: 'Alt', isSpecial: true, keyCode: 'AltLeft',
  },
  {
    key: ' ', shiftKey: ' ', keyCode: 'Space',
  },
  {
    key: 'Alt', isSpecial: true, keyCode: 'AltRight',
  },
  {
    key: '←', isSpecial: true, keyCode: 'ArrowLeft',
  },
  {
    key: '↓', isSpecial: true, keyCode: 'ArrowDown',
  },
  {
    key: '→', isSpecial: true, keyCode: 'ArrowRight',
  },
  { key: 'Ctrl', isSpecial: true, keyCode: 'ControlRight' },
];

const enKeys = [
  { key: '`', shiftKey: '~', keyCode: 'Backquote' },
  {
    key: '1', shiftKey: '!', keyCode: 'Digit1',
  },
  {
    key: '2', shiftKey: '@', keyCode: 'Digit2',
  },
  {
    key: '3', shiftKey: '#', keyCode: 'Digit3',
  },
  {
    key: '4', shiftKey: '$', keyCode: 'Digit4',
  },
  {
    key: '5', shiftKey: '%', keyCode: 'Digit5',
  },
  {
    key: '6', shiftKey: '^', keyCode: 'Digit6',
  },
  {
    key: '7', shiftKey: '&', keyCode: 'Digit7',
  },
  {
    key: '8', shiftKey: '*', keyCode: 'Digit8',
  },
  {
    key: '9', shiftKey: '(', keyCode: 'Digit9',
  },
  {
    key: '0', shiftKey: ')', keyCode: 'Digit0',
  },
  {
    key: '-', shiftKey: '_', keyCode: 'Minus',
  },
  {
    key: '=', shiftKey: '+', keyCode: 'Equal',
  },
  {
    key: 'Backspace', isSpecial: true, keyCode: 'Backspace',
  },
  { key: 'Tab', isSpecial: true, keyCode: 'Tab' },
  {
    key: 'q', shiftKey: 'Q', capsLockKey: 'Q', keyCode: 'KeyQ',
  },
  {
    key: 'w', shiftKey: 'W', capsLockKey: 'W', keyCode: 'KeyW',
  },
  {
    key: 'e', shiftKey: 'E', capsLockKey: 'E', keyCode: 'KeyE',
  },
  {
    key: 'r', shiftKey: 'R', capsLockKey: 'R', keyCode: 'KeyR',
  },
  {
    key: 't', shiftKey: 'T', capsLockKey: 'T', keyCode: 'KeyT',
  },
  {
    key: 'y', shiftKey: 'Y', capsLockKey: 'Y', keyCode: 'KeyY',
  },
  {
    key: 'u', shiftKey: 'U', capsLockKey: 'U', keyCode: 'KeyU',
  },
  {
    key: 'i', shiftKey: 'I', capsLockKey: 'I', keyCode: 'KeyI',
  },
  {
    key: 'o', shiftKey: 'O', capsLockKey: 'O', keyCode: 'KeyO',
  },
  {
    key: 'p', shiftKey: 'P', capsLockKey: 'P', keyCode: 'KeyP',
  },
  {
    key: '[', shiftKey: '{', keyCode: 'BracketLeft',
  },
  {
    key: ']', shiftKey: '}', keyCode: 'BracketRight',
  },
  {
    key: '\\', shiftKey: '|', keyCode: 'Backslash',
  },
  { key: 'CapsLock', isSpecial: true, keyCode: 'CapsLock' },
  {
    key: 'a', shiftKey: 'A', capsLockKey: 'A', keyCode: 'KeyA',
  },
  {
    key: 's', shiftKey: 'S', capsLockKey: 'S', keyCode: 'KeyS',
  },
  {
    key: 'd', shiftKey: 'D', capsLockKey: 'D', keyCode: 'KeyD',
  },
  {
    key: 'f', shiftKey: 'F', capsLockKey: 'F', keyCode: 'KeyF',
  },
  {
    key: 'g', shiftKey: 'G', capsLockKey: 'G', keyCode: 'KeyG',
  },
  {
    key: 'h', shiftKey: 'H', capsLockKey: 'H', keyCode: 'KeyH',
  },
  {
    key: 'j', shiftKey: 'J', capsLockKey: 'J', keyCode: 'KeyJ',
  },
  {
    key: 'k', shiftKey: 'K', capsLockKey: 'K', keyCode: 'KeyK',
  },
  {
    key: 'l', shiftKey: 'L', capsLockKey: 'L', keyCode: 'KeyL',
  },
  {
    key: ';', shiftKey: ':', keyCode: 'Semicolon',
  },
  {
    key: '\'', shiftKey: '"', keyCode: 'Quote',
  },
  {
    key: 'Enter', isSpecial: true, keyCode: 'Enter',
  },
  { key: 'Shift', isSpecial: true, keyCode: 'ShiftLeft' },
  {
    key: 'z', shiftKey: 'Z', capsLockKey: 'Z', keyCode: 'KeyZ',
  },
  {
    key: 'x', shiftKey: 'X', capsLockKey: 'X', keyCode: 'KeyX',
  },
  {
    key: 'c', shiftKey: 'C', capsLockKey: 'C', keyCode: 'KeyC',
  },
  {
    key: 'v', shiftKey: 'V', capsLockKey: 'V', keyCode: 'KeyV',
  },
  {
    key: 'b', shiftKey: 'B', capsLockKey: 'B', keyCode: 'KeyB',
  },
  {
    key: 'n', shiftKey: 'N', capsLockKey: 'N', keyCode: 'KeyN',
  },
  {
    key: 'm', shiftKey: 'M', capsLockKey: 'M', keyCode: 'KeyM',
  },
  {
    key: ',', shiftKey: '<', keyCode: 'Comma',
  },
  {
    key: '.', shiftKey: '>', keyCode: 'Period',
  },
  {
    key: '/', shiftKey: '?', keyCode: 'Slash',
  },
  {
    key: '↑', isSpecial: true, keyCode: 'ArrowUp',
  },
  {
    key: 'Shift', isSpecial: true, keyCode: 'ShiftRight',
  },
  {
    key: 'Ctrl', isSpecial: true, keyCode: 'ControlLeft',
  },
  {
    key: 'Win', isSpecial: true, keyCode: 'MetaLeft',
  },
  {
    key: 'Alt', isSpecial: true, keyCode: 'AltLeft',
  },
  {
    key: ' ', shiftKey: ' ', keyCode: 'Space',
  },
  {
    key: 'Alt', isSpecial: true, keyCode: 'AltRight',
  },
  {
    key: '←', isSpecial: true, keyCode: 'ArrowLeft',
  },
  {
    key: '↓', isSpecial: true, keyCode: 'ArrowDown',
  },
  {
    key: '→', isSpecial: true, keyCode: 'ArrowRight',
  },
  { key: 'Ctrl', isSpecial: true, keyCode: 'ControlRight' },
];

export { ruKeys, enKeys };
