/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const r1 = merge({ a: 1 }, { b: 2 });
const r2 = merge({ a: 1 }, { b: 2, c: "one" });

export { merge, r1, r2 };
