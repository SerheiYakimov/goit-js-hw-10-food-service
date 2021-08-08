import menuTemplate from './templates/menu-tps.hbs';
import menuList from './menu.json';
import './styles.css';

// console.log(menuItemTemplate);
console.log(menuList);
const menu = document.querySelector('.js-menu');

function createMarkup(menuList) {
    return menuList.map(menuTemplate).join('');
}

console.log(createMarkup);


const markup = createMarkup(menuList);
menu.insertAdjacentHTML('beforeend', markup);