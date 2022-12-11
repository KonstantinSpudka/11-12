"use strict";

//const regExp1 = new RegExp(шаблон, прапорці);
const regExp1 = new RegExp("qwerty");

// const regExp2 = /шаблон/;
const regExp2 = /qwerty/i;
//прапорець і - незалежність від регістру (велика мала буква не важливо)
// прапорець g - пошук по всьому рядку

console.log("regExp2.test ", regExp2.test("mnhnqwertykfkd"));

console.log("regExp2.test ", "mnhnqwertykfkd".match(regExp2));

// Межі
// ^ - початок рядка
// $ - кінець рядка
// \b - границя слова
// \B - не межа слова

// Перевірити, що qwerty є всим рядком
console.log('"qwerty".match(/^qwerty$/) :>> ', "qwerty".match(/^qwerty$/));

// Перевірити, чи стоїть qwerty на початку рядка ігноруючи регістр
// 'qwerty'
// 'qwertyhjkn'
// 'Qwertyjmkk'
// '777qwerty'

console.log('"qwerty".match(/^qwerty/i) :>> ', "qwerty".match(/^qwerty/i));

// перевірити чи dog є окремим словом
console.log("My dog is cute :>> ", "My dog is cute".match(/\bdog\b/i));
console.log("My hotdog is cute :>> ", "My hotdog is cute".match(/\bdog\b/i));

//  . - один будь-який символ
// Перевірити, чи пароль начинається на qw і закінчується на ty
// по середені має бути 2 символи
// qw..ty
console.log('"qwerty".match(/^qw..ty$/) :>> ', "qwerty".match(/^qw..ty$/));
console.log('"qwerty".match(/^qw..ty$/) :>> ', "qw55ty".match(/^qw..ty$/));
console.log('"qwerty".match(/^qw..ty$/) :>> ', "qwrty".match(/^qw..ty$/));

// Перевірити, що рядок містить 7 символів і починається на 111
console.log('"qwerty".match(/^qw..ty$/) :>> ', "111qwer".match(/^111....$/));

// Квантифікатори
// {8} - строго 8 символів
// {1, 10} - від 1 до 10
// {8, 16} - від 8 до 16
// + - {1,} - від 1 до нескінченності
// * - {0,} - (.* - будь який символ в будь якій кількость)
// ? - {0,1} - може бути або не бути (приклад: символ s - s?)

console.log('"qwerty".match(/^qw..ty$/) :>> ', "111qwer".match(/^1{3}.{4}$/));
console.log(
  '"qwerty".match(/^qw..ty$/) :>> ',
  "{111qwer".match(/^\{1{3}.{4}$/)
); // \{ - екранування

// Перевірити чи відповідає рядок email
console.log(
  '"qwerty".match(/^qw..ty$/) :>> ',
  "111qwer@sdd".match(/^.{1,10}@.{1,10}$/)
);

// Альтернативні символи / один з групи символів

// \d = [0123456789] = [0-9]
// \D = ^\d - не цифри
// \W = ^\w - не символи слова
//
// [a-z]
// [A-Z]
// [a-zA-z]
// \w = [a-zA-Z0-9_] - символи слова
// \s - space
// \S - не space

// В рядку тільки цифри
// [0123456789]+
console.log('"qwerty".match(/^qw..ty$/) :>> ', "0123456789".match(/^\d+$/));

//  Перевірити, що вказано номер у форматі (+380-66-777-8888)
console.log(
  '"+380-66-777-8888',
  "+380-66-777-8888".match(/^\+380-\d{2}-\d{3}-\d{4}$/)
);

// Перевірити на ім'я (Asdfghy)

console.log('"Anna', "Anna".match(/^[A-Z][a-z]{1,19}$/));

// Перевірити, що число
// 1523,5555
// -1523,5555
console.log('"152.555', "152.555".match(/^-?\d+\.\d+$/));
console.log('"152.555', "-152.555".match(/^-?\d+\.\d+$/));

// Альтернативні слова
// [123] = (1|2|3)
// (cat|dog)
console.log('"I like cat', "I like cat".match(/\b(cat|dog)\b/));
console.log('"I like cats', "I like cats".match(/\b(cat|dog)s?\b/));
console.log('"I like catss', "I like catss".match(/\b(cat|dog)(s{2})?\b/));

// Перевірка складного імені Aaaa(-Aaaaa)?
console.log(
  '"Anna-Maria',
  "Anna-Maria".match(/^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/)
);

console.log(
  '"+380-66-777-88-88',
  "+380-66-777-88-88".match(/^\+380-\d{2}-\d{3}(-\d{2}){2}$/)
);

console.log(
  '"+380-66-777-88-88',
  "+380-66-777-88-88".match(
    /^\+380-(99|98|97|96|95|93|73|68|67|66|63|)-\d{3}(-\d{2}){2}$/
  )
);

// Знайти цитати
// ? - переводе квантифікатор з жадного режиму в лінівий
console.log("I sau 'yes', but think and say 'no'".match(/'.*?'/g));

// Виокремити речення

console.log(
  "I elkenrk elfekn wewe. Dkrel efre rf erf errf. Sd trthr rhhtrt".match(
    /[A-Z].*?\./g
  )
);

// Опережающая проверка X(?=Y)
console.log("I bought 10 apples by 1$".match(/\d+(?=\$)/g));

// Негативная опережающая проверка X(?!Y)
console.log("I bought 10 apples by 1$".match(/\d+(?!\$)/g));

console.log("Qq1.qqqq".match(/^(?=.*[A-Z].*).{8,16}/g));
console.log(
  "ww1.wWwww".match(
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&.].*).{8,16}$/
  )
);

// Методи з використанням регулярок

// replace
// 'Dtgrtg ergerg              ergerg eeg eger'
// 'Dtgrtg ergerg ergerg eeg eger'
const str1 = "Dtgrtg ergerg              ergerg eeg eger";
const str1Result = str1.replace(/\s{2,}/g, " ");

// replace(що замінити, на що замінити) - приклад: str2.replace(/(fuck|ass|asshole)/gi, "###");
// Прибрати ненармативну лексику з повыдомлень (fuck, ass, asshole)
const str2 = "Fuck you. ))) You are asshole";
const str2Result = str2.replace(/(fuck|ass|asshole)/gi, "###");
console.log("str2 :>> ", str2Result);

const str3 = "Ffuckk you. ))) You are asshole";
const str3Result = str3.replace(/(f+u+c+k+|a+s+s+|a+s+s+h+o+l+e+)/gi, "###");
console.log("str3Result :>> ", str3Result);

// split - видаляє вказанні символи (приклад: (/-|\/|\./g) - видалили "-", "/", ".")
const str4 = "Dtgrtg ergerg              ergerg eeg eger";
const str4Result = str4.split(/\s{1,}/g);

const str5 = "1999-01-01";
const str5Result = str5.split(/-|\/|\./g);
console.log("str5Result :>> ", str5Result);
