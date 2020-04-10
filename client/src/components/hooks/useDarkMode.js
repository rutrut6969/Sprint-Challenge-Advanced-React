import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
// import { card } from '../selector';
// import { body } from './functions/selector';
export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage('Dark Mode Status:', false);
  const card = window.document.getElementsByClassName('.card');
  useEffect(() => {
    value
      ? window.document.body.classList.add('dark-mode')
      : window.document.body.classList.remove('dark-mode');

    // value
    //   ? document.querySelector('.card').classList.add('dark-mode-card')
    //   : document.querySelector('.card').classList.remove('dark-mode-card');
  }, [value]);
  //   console.log(body);

  const setDarkMode = (e) => {
    !value ? setValue(true) : setValue(false);
  };

  return [value, setDarkMode];
};
