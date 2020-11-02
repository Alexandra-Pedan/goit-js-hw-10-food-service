const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

checkbox.addEventListener('change', checkboxChange);

if (JSON.parse(localStorage.getItem('checked-dark-theme'))) {
  body.classList.remove(`${Theme.LIGHT}`);
  body.classList.add(`${Theme.DARK}`);
  checkbox.setAttribute('checked', true);
}

body.classList.add(`${Theme.LIGHT}`);

export function checkboxChange() {
  body.classList.toggle(`${Theme.LIGHT}`);
  body.classList.toggle(`${Theme.DARK}`);

  if (checkbox.getAttribute('checked') === 'true') {
    checkbox.removeAttribute('checked');
    checkbox.setAttribute('checked', false);

    localStorage.removeItem('checked-dark-theme');
    localStorage.setItem('checked-dark-theme', false);
  } else {
    checkbox.removeAttribute('checked');
    checkbox.setAttribute('checked', true);

    localStorage.removeItem('checked-dark-theme');
    localStorage.setItem('checked-dark-theme', true);
  }
}
