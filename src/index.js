import menuItemTemplate from './templates/menu-item.hbs';
import {menuItem} from './menu.json';
import './sass/main.scss';

console.log(menuItemTemplate);
console.log(menuItem);
const menu = document.querySelector('.js-menu');

const markup = menuItemTemplate(menuItem);
menu.insertAdjacentHTML('beforeend', markup);