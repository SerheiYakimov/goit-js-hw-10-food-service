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

  themeSwitch.addEventListener('change', onThemeChange);

  //  Проверка на первое вхождение на сайт, есть ли данные в localeStorage
  const currentTheme = (JSON.parse(localStorage.getItem("Theme")));
  
  console.log('currentTheme', currentTheme);
 
  if (currentTheme === null || currentTheme === "light-theme") {
    themeSwitch.checked === false;
    localStorage.setItem("Theme", JSON.stringify(Theme.LIGHT));
    body.classList.add('light-theme');

    
  }  

  
  if (currentTheme === "dark-theme") {
    themeSwitch.checked = true;
    localStorage.setItem("Theme", JSON.stringify(Theme.DARK));
      body.classList.add('dark-theme');
    
  };
  

  function onThemeChange(e) {
      
      if (e.target.checked) {
      
      localStorage.setItem("Theme", JSON.stringify(Theme.DARK));
      body.classList.replace('light-theme', 'dark-theme');
      }
      else {
        localStorage.setItem("Theme", JSON.stringify(Theme.LIGHT));
        body.classList.replace('dark-theme', 'light-theme');
      }

  }

  




  

 

