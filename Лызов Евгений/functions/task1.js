//0. Написать функцию которая возвращает среднее арифм любого количества эл-тов чисел

// function avg2() {
//    let arrArguments = [...arguments];
//    let summ = 0;
//    for (let i = 0; i < arrArguments.length; i++) {
//       summ += arrArguments[i];
//    }
//    return console.log(summ / arrArguments.length);
// }

// avg2(2, 4, 5, 6);




// 1. Написать функцию, которая принимает массив и степень.
// Функция возвращает массив, в котором каждое число
// массива возведено в указанную степень

// function getPovNumbers (pov,...arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = Math.pow(arr[i] , pov);
//     }
//     return console.log(arr);
// }

// getPovNumbers(2,3,4,5)


// 2. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели».

// function dayOfWeek(numOfDay) {
//    if (numOfDay >= 1 && numOfDay <= 7) {
//       switch (numOfDay) {
//          case 1:
//             return alert('Понедельник');

//          case 2:
//             return alert('Вторник');

//          case 3:
//             return alert('Среда');

//          case 4:
//             return alert('Четверг');

//          case 5:
//             return alert('Пятница');

//          case 6:
//             return alert('Суббота');

//          case 7:
//             return alert('Воскресенье');

//       }
//    } else {
//       alert('Нет такого дня недели')
//    }

// }

// dayOfWeek(7)

// 3. Написать функцию, которая принимает два числа (n1 и n2) и
// возвращает массив (8 элементов) из этих чередующихся чисел.
// Например, передаем два числа arrMaker(2,5), функция вернет массив
// [2,5,2,5,2,5,2,5]


// function arrMaker(n1, n2) {
//    let arr = [];
//    arr.length = 8;

//    for (let i = 0; i < arr.length; i++) {
//       if (i % 2 === 0) {
//          arr[i] = n1;
//       } else if (i % 2 !== 0) {
//          arr[i] = n2;
//       }

//    }

//    return console.log(arr);
// }

// arrMaker(2, 5)



// 4. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N»

// function getFinalGrade() {
//    let userGrade;
//    let countOfGrade = 0;
//    let sumOfGrade = 0;


//    for (let i = 1; i <= 4; i++) {
//       userGrade = prompt(`«введите оценку за ${i} четверть»`);
//       if (userGrade !== '' && userGrade !== null) {
//          sumOfGrade += +userGrade;
//          countOfGrade++
//       } else {
//          alert('Введите коректыне данные')
//       }
//    }

//    let finalGrade = sumOfGrade / countOfGrade;
//    return `Ваша годовая оценка ${finalGrade}`
// }

// console.log(getFinalGrade());

// 5. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%».

// function myStat(percentWins, percentLoss) {

//    let resultOfWins = Math.trunc((percentWins / (percentWins + percentLoss)) * 100);

//    let resultOfLoss = 100 - resultOfWins;

//    return `ваш процент побед - ${resultOfWins}% , поражений – ${resultOfLoss}%`
// }

// console.log(myStat(352, 211));

// 6. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74]

// let array = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

// function createArray() {
//    let newArray = [];

//    for (let i = 0; i < array.length; i++) {


//       for (let j = i + 1; j < array.length; j++) {
//          if (newArray.includes(array[i])) {
//             continue;
//          } else if (array[i] === array[j]) {
//             newArray.push(array[i]);
//          }
//       }

//    }
//    return newArray
// }


// console.log(createArray());

// 7. Написать функцию, которая принимает случайный
// двумерный массив (разной длины) из 8 элементов. Функция
// возвращает тот массив сумма элементов которого
// наибольшая


// function createNewArray(arr) {

//    let newArray = [];
//    let summ = 0;

//    for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);

//       for (let j = 0; j < arr[i].length; j++) {

//          summ += arr[i][j];
//          newArray.push(summ);

//       }
//    }
//    // console.log(summ);
//    return newArray
// }

// console.log(createNewArray([[12, 3, 4], [24, 5, 6, 4, 6], [1, 2], [1, 56, 7, 8], [3, 55, 77, 88, 99], [5, 4, 3, 2, 1, 5, 6, 7, 8, 9], [3, 45, 5, 56, 76, 88, 78, 235345, 76567], [1, 2, 3]]));




let arr = [
   [12, 3, 4],
   [24, 5, 6, 4, 6],
   [1, 2],
   [1, 56, 7, 8],
   [3, 55, 77, 88, 99],
   [5, 4, 3, 2, 1, 5, 6, 7, 8, 9],
   [3, 45, 5, 56, 76, 88, 78, 235345, 76567],
   [1, 2, 3]
];

const resultFunction = function (someArr) {
   const sumAllElementsOfArr = someArr.map((item, index, mass) => {
      let firstValue = 0;
      for (let i = 0; i < mass[index].length; i++) {
         firstValue += mass[index][i];
      }
      return firstValue;
   });


   let bigNum = 0;
   const findTheBiggestNum = sumAllElementsOfArr.reduce((acc, item, index) => {
      if (bigNum < item) {
         bigNum = item;
         acc = index;
      }
      return acc;
   }, 0);

   return someArr[findTheBiggestNum];
};
console.log(resultFunction(arr));



// 8. Написать программу, которая спрашивает у пользователя сколько ему
// лет. В программе должна присутствовать функция validator(), которая
// проверяет введенное число. Если validator() вернет true, то возраст
// можно выводить на экран в виде “Вам N лет”. Функция validator()
// должна проверять, чтобы введенный возраст не был отрицательным,
// меньше 5 лет и больше 100, чтобы возраст не был строкой, и не был
// null или undefined.



// function validator(age) {
//    if (+age >= 5 && +age <= 100 && age !== '' && age !== null && age !== undefined) {
//       return true
//    }
// }

// function showAge() {
//    let userAge = prompt('сколько вам лет?');

//    if (validator(userAge)) {
//       return alert(`“Вам ${userAge} лет”`)
//    } else {
//       return alert('Данные введены не правильно')
//    }
// }

// showAge();






// 9. Написать компьютерную игру «отгадай число». Игра на двух игроков.
// Сначала игрок1 указывает максимальное число(max) до которого
// можно загадывать. Потом игрок2 указывает число n от 1 до max.
// Игрок1 пытается отгадать число n, если не угадал выводится
// сообщение «Загаданное число меньше указанного вами» или
// «Загаданное число больше указанного вами». Выигрывает тот игрок,
// который за наименьшее количество попыток отгадает число. 


let maxNumber;
let trueNumber;


function rulesGame() {
   maxNumber = +prompt('Игрок 1 введите максимальое число!');

   trueNumber = +prompt(`Игрок2 введите число от 1 до ${maxNumber}`);
}

function theGame() {

   rulesGame();

   let countOfTryesPlayer = 1;
   let attempt;

   for (let i = 0; i < maxNumber; i++) {
      attempt = prompt('Введите верное число');

      if (+attempt === trueNumber && attempt !== '' && attempt !== null) {
         break;
      } else if (+attempt < trueNumber) {
         alert(`Загаданное число больше указанного вами`);
         countOfTryesPlayer++;
      } else if (+attempt > trueNumber) {
         alert(`Загаданное число меньше указанного вами`);
         countOfTryesPlayer++;
      }
   }
   return alert(`Вы выиграли , количество попыток ${countOfTryesPlayer}`);
}

theGame();

