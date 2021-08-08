import menuTemplate from './templates/menu-tps.hbs';
import menuList from './menu.json';
import './styles.css';

console.log(menuTemplate);
console.log(menuList);
const menu = document.querySelector('.js-menu');


const markup = menuList.map(menuTemplate).join('');
// console.log(markup);
menu.insertAdjacentHTML('beforeend', markup);