import menuTemplate from './templates/menu-tps.hbs';
import menuList from './menu.json';
import './styles.css';

console.log(menuTemplate);
console.log(menuList);

const menu = document.querySelector('.js-menu');
const themeSwitch = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');


const markup = menuList.map(menuTemplate).join('');

// console.log(markup);
menu.insertAdjacentHTML('beforeend', markup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  themeSwitch.addEventListener('change', onThemeChange);

  function onThemeChange(e) {

    console.log(e.target);
    e.preventDefault();
      if (e.target.checked === true) {
        body.classList.toggle('.dark-theme');
          
      }

      


  }
  