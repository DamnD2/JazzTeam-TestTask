export const setCookie = (key, value) => {
  document.cookie = `${key}=${value}`;
};

export const getCookieValue = (key) => {
  const { cookie } = document;

  const arrayOfCookies = cookie.split('; ');

  const resultCookie = arrayOfCookies.filter((element) => element.includes(key));

  return resultCookie.length
    ? resultCookie.toString().split('=')[1]
    : false;
};

export const authorizationValidation = (name, password) => name === 'Admin' && password === '12345678';
