/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

// const str: KeyValuePair<string, string> = {
//   key: "one",
//   value: "two",
// };
// const num: KeyValuePair<number, number> = {
//   key: 1,
//   value: 2,
// };

export {};
