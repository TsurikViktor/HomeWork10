/**
 * Функция должна найти и вернуть максимальный элемент в массиве.
 *
 * Реалиизовать функцию двумя способами: через циклы и через рекурсию
 * 
 * Возможное время выполнения:
 * через циклы: 8 мин
 * через рекурсию: 7 мин
 *
 * @param {[]} arr
 * @returns {number}
 */
 function max(arr) {
    // your implementation
  }
  
  console.log(max([8]), 'one element test, must return 8');
  console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
  console.log(max([8, 17]), '2 elements test, must return 17');

  const CATEGORY = 'category';
const PRODUCT = 'product';
const menu = [
  {
    type: CATEGORY,
    name: 'Mac',
    menu: [
      {
        type: PRODUCT,
        name: 'MacBook Pro 16”',
      },
      {
        type: PRODUCT,
        name: 'iMac 24”',
      },
      {
        type: PRODUCT,
        name: 'iMac 27”',
      },
      {
        type: CATEGORY,
        name: 'Accessories',
        menu: [
          {
            type: CATEGORY,
            name: 'Featured Magic',
            menu: [
              {
                type: PRODUCT,
                name: 'Magic Keyboard',
              },
              {
                type: PRODUCT,
                name: 'Magic Trackpad',
              },
            ],
          },
          {
            type: CATEGORY,
            name: 'Audio',
            menu: [
              {
                type: PRODUCT,
                name: 'AirPods Pro',
              },
              {
                type: PRODUCT,
                name: 'AirPods Max',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: CATEGORY,
    name: 'Ipad',
    menu: [
      {
        type: PRODUCT,
        name: 'iPad Pro 11”',
      },
      {
        type: PRODUCT,
        name: 'iPad Pro 12.9”',
      },
      {
        type: CATEGORY,
        name: 'Accessories',
        menu: [
          {
            type: PRODUCT,
            name: 'Apple Pencil',
          },
          {
            type: PRODUCT,
            name: 'Smart Keyboard',
          },
        ],
      },
    ],
  },
  {
    type: CATEGORY,
    name: 'Empty Category',
    menu: [],
  },
]

/**
 * Функция конвертирует объект menu в строку.
 *
 * Пример реального меню: https://www.apple.com/
 *
 * Возможное время выполнения: 23 мин
 *
 * @param {{}} menu - рекурсивная структура
 * @param {number} level - уровень вложенности, используйте его для отображения отступов
 * @returns {string}
 */
function printMenu(menu, level = 0) {
  let res = '';

  // your implementation

  return res;
}

const menuStr = printMenu(menu);

console.log(menuStr); // В консоле должно вывести вот такую структуру меню со всеми отступами:
/*
* Mac
 - MacBook Pro 16”
 - iMac 24”
 - iMac 27”
 * Accessories
  * Featured Magic
    - Magic Keyboard
    - Magic Trackpad
  * Audio
    - AirPods Pro
    - AirPods Max
* Ipad
 - iPad Pro 11”
 - iPad Pro 12.9”
 * Accessories
  - Apple Pencil
  - Smart Keyboard
* Empty Category
*/