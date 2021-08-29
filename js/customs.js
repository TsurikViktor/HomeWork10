/**
 * Задача № 1
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
 
 console.log(`Задача № 1`);

//`первый вариант решения`
console.log(`первый вариант решения`);

function max(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
      if(arr[i] > max){
        max = arr[i];   
      }
     }
   return max;
}

console.log(max([8]), 'one element test, must return 8');
console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max([8, 17]), '2 elements test, must return 17');

//`второй вариант решения`

console.log(`второй вариант решения`)

function max2(arr) {
  return Math.max.apply(null, arr);
};

console.log(max2([8]), 'one element test, must return 8');
console.log(max2([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max2([8, 17]), '2 elements test, must return 17');

//`третий вариант решения`
console.log(`третий вариант решения`)

function max3(array){
  if(array.length === 1){
    return array[0]
  } else {
    if(array.length > 2){
      const e = array[0];
      array.splice(0, 1);
      return max3([e, max3(array)])
    } else {
      return array[0] >= array[1] ? array[0] : array[1]
    }
  }   
};

console.log(max3([8]), 'one element test, must return 8');
console.log(max3([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max3([8, 17]), '2 elements test, must return 17');

/**
 * Задача № 2
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

console.log(`Задача № 2`);

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




function printMenu(menu, level = 0) {
  let res = ``;
  for(var i = 0; i < menu.length; i++){

    if (menu[i] === [] && type === PRODUCT ) {
      console.log(`  -`+ menu[i].name);
      printMenu(menu);
    }
    //else {
    //if ( menu[i].type === CATEGORY) {
    //  printMenu(menu);
    //  console.log(`*  -`+ menu[i].name);
    //  if ( menu[i].type === PRODUCT) {console.log(`   -`+ menu[i].name)};
    //}
    //
    console.log(`*`+ menu[i].name)
  }
  return res = res + menu[i]
};

printMenu(menu);
//const menuStr = printMenu(menu);
//console.log(menuStr); // В консоле должно вывести вот такую структуру меню со всеми отступами:

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
