//Sorting Algorithms
//1 Сортировка выбором
// const arr = [0, 3, 2, 5, 1, -7, 8, 1, 32, 4, 8, 9, 11, 10];
// let count = 0;
//
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let indexMin = i;
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[j] < arr[indexMin]) {
//                 indexMin = j
//             }
//             count += 1; //счетчик(за сколько итераций массив был осортирован)
//         }
//         let tmp = arr[i];
//         arr[i] = arr[indexMin];
//         arr[indexMin] = tmp;
//     }
//     return arr;
// }
//
// console.log(selectionSort(arr));
// console.log(`Count - ${count}`);


//2 Быстрая сортировка
// const arr = [0, 3, 2, 5, 1, -7, 8, 1, 32, 4, 8, 9, 11, 45, 50, 4, 10, 1, -7, 8, 1, 32, 4, 8, 9, 11, 10];
// let count = 0;
//
// function quickSort(arr){
//     if(arr.length <= 1) {//если длина массива будет меньше или равна 1, возвращаем сам массив
//         return arr;
//     }
//     //выбираем опорный элемент (берем центральный элемент из массива)
//     let pivotIndex = Math.floor(arr.length / 2); //Получаем Индекс элемента (Длину массива делим на 2)
//     let pivot = arr[pivotIndex]; //получаем опорный элемент
//
//     let less = [];//в этот массив сохраняем числа меньше чем опорный
//     let greater = [];   //в этот массив сохраняем числа больше чем опорный
//
//     //проходимся по массиву и сравниваем каждый элемент с опорным
//     for (let i =0; i < arr.length; i++){
//         count +=1;//счетчик операций
//         if(i === pivotIndex){
//             continue//слово пропускаем
//         }
//         if(arr[i] < pivot){ //если текущий элемент итерации меньший чем Опорный элемент(pivot) Мы добавляем в массив less
//             less.push(arr[i])
//         } else {
//             greater.push(arr[i])
//         }
//     }
//     //рекурсия(вызов функции саму себя)
//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }
// console.time('quickSort')
// console.log(quickSort(arr));
// console.timeEnd('quickSort')
// console.log(`Count - ${count}`);


// //метод sort
// const newArray = arr.sort((a, b) => a - b);
// console.log(newArray, 'Method Sort')


//3 Сортировка вставками
// const arr = [5, 6, 1, 8, 0, 20, 25, -5, 110, -6, -1, 2, 3, 4, 5, 100];

// function selectionSort(arr) {
//Самое большое находит и ставит в конец и т д
// for (let j = 0; j < arr.length; j++) {
//     let max = -Infinity; //предположим что максимальное исходное число - минус бессконечность
//     let index = null; //ищем индекс этого самого большого числа
//
//     for (let i = 0; i < arr.length - j; i++) {
//         if (arr[i] > max) {// если число вдруг больше чем max то max становиться этим числом
//             max = arr[i];
//             index = i;
//         }
//     }
//     const buff = arr[arr.length - 1 - j];//ставим на самое посл. место
//     arr[arr.length - 1 - j] = max; //берем послед.число и заменяем его на максимальное
//     arr[index] = buff; //а то где находилось раньше максимальное заменяем на buff;
// }

// ..................................................................................

//Самое маленькое находит и ставит на перед и т д
//     for (let j = 0; j < arr.length - 1; j++) {
//         let min = Infinity; //Поиск самого маленького числа в массиве
//         let index = null; //ищем индекс этого самого маленького числа
//
//         for (let i = j; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//                 index = i;
//             }
//         }
//         //ставим на нулевой индекс этого массива
//         const buff = arr[j];
//         arr[j] = min;
//         arr[index] = buff;
//     }
//
//     return arr
// }
//
// console.log(selectionSort(arr));