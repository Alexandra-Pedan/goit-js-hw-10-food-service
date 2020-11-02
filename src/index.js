import menuItem from "./templates/menu-item.hbs";
import menu from "./menu.json";
import "./styles.css";
import checkboxChange from "./change-theme";


const menuList = document.querySelector('.js-menu');

menuList.innerHTML = menu.map(menuItem).join('');

