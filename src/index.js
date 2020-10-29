
import menuItem from "./templates/menu-item.hbs";
// import menuItems from "./templates/menu-items.hbs";
import menu from "./menu.json";
import "./styles.css";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.menuList.innerHTML = menu.map(menuItem).join('');
if (JSON.parse(localStorage.getItem('checked-dark-theme'))) {
  refs.body.classList.remove(`${Theme.LIGHT}`);
  refs.body.classList.add(`${Theme.DARK}`);
  refs.checkbox.setAttribute('checked', true);
}

refs.body.classList.add(`${Theme.LIGHT}`);

refs.checkbox.addEventListener('change', checkboxChange);

function checkboxChange() {
  refs.body.classList.toggle(`${Theme.LIGHT}`);
  refs.body.classList.toggle(`${Theme.DARK}`);

  if (refs.checkbox.getAttribute('checked') === 'true') {
    refs.checkbox.removeAttribute('checked');
    refs.checkbox.setAttribute('checked', false);

    localStorage.removeItem('checked-dark-theme');
    localStorage.setItem('checked-dark-theme', false);
  } else {
    refs.checkbox.removeAttribute('checked');
    refs.checkbox.setAttribute('checked', true);

    localStorage.removeItem('checked-dark-theme');
    localStorage.setItem('checked-dark-theme', true);
  }
}


// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const menuEl = document.querySelector(".js-menu");
// const cardsMarkup = createMenuCards(menu);
// const themeSwitch = document.querySelector('#theme-switch-toggle');
// const body = document.querySelector('body');

// menuEl.insertAdjacentHTML("afterbegin", cardsMarkup);

// function createMenuCards(menu) {
//     return menu.map(menuItem).join("");
// }

// if (JSON.parse(localStorage.getItem('checked-dark-theme'))) {
//   refs.body.classList.remove(`${Theme.LIGHT}`);
//   refs.body.classList.add(`${Theme.DARK}`);
//   refs.checkbox.setAttribute('checked', true);
// };

// body.classList.add(`${Theme.LIGHT}`);
// themeSwitch.addEventListener('change', checkboxChange);
// function checkboxChange() {
//   body.classList.toggle(`${Theme.LIGHT}`);
//   body.classList.toggle(`${Theme.DARK}`);

//   if (themeSwitc.getAttribute('checked') === 'true') {
//     themeSwitc.removeAttribute('checked');
//     themeSwitc.setAttribute('checked', false);

//     localStorage.removeItem('checked-dark-theme');
//     localStorage.setItem('checked-dark-theme', false);
//   } else {
//     themeSwitc.removeAttribute('checked');
//     themeSwitc.setAttribute('checked', true);

//     localStorage.removeItem('checked-dark-theme');
//     localStorage.setItem('checked-dark-theme', true);
//   }
// }
// // function createMenuCards(menu) {
// //     return menuItems(menu);
// // }


