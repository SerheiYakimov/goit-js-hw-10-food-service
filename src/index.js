import menuTemplate from './templates/menu-tps.hbs';
import menuList from './menu.json';
import './styles.css';

// console.log(menuTemplate);
// console.log(menuList);

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

  // themeSwitch.addEventListener('change', onThemeChange);

  // function onThemeChange(e) {

  //   console.log(e.target);
  //   e.preventDefault();
  //     if (e.target.checked === true) {
  //       body.classList.toggle('.dark-theme');
          
  //     }

  // }

  // const dataforStorage = JSON.stringify(Theme);
  // localStorage.setItem("Theme", dataforStorage);
  // const data = localStorage.getItem("Theme");
  // console.log('data', JSON.parse(data));
//  Проверка на первое вхождение на сайт, есть ли данные в localeStorage
  const storageTheme = (JSON.parse(localStorage.getItem("Theme")));
  // const currentTheme = storageTheme ? localStorage.setItem(JSON.stringify(Theme)) : storageTheme;
  console.log('storageTheme', storageTheme);
  // console.log('currentTheme', currentTheme);

  // let currentTheme = null;

  // if (storageTheme === null) {
  //   localStorage.setItem("Theme", JSON.stringify(Theme.LIGHT));
  //   body.classList.toggle('light-theme');
  // };
  // console.log('storageTheme', storageTheme);

 

