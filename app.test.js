const arrToString = require('./app')

const arr1 = [1,2,3,4,5,6,7,8]
const arr2 = [1,3,4,5,6,7,8]
const arr3 = [1,3,4,5,6,7,8,10,11,12]
const arr4 = [1,2,3] 
const arr5 = [1,2] 
const arr6 = [1,2,4]
const arr7 = [1,2,4,5,6]
const arr8 = [1,2,3,7,8,9,15,17,19,20,21] 
const arr9 = [1,2,3,4,5,6,100,1091,1999,2000,2001,2002]
const arr10 = [1]
const arr11 = [1,3,5,7,9,11] 

const expected1 = "1-8"
const expected2 = "1,3-8"
const expected3 = "1,3-8,10-12"
const expected4 = "1-3"
const expected5 = "1,2"
const expected6 = "1,2,4"
const expected7 = "1,2,4-6"
const expected8 = "1-3,7-9,15,17,19-21"
const expected9 = "1-6,100,1091,1999-2002"
const expected10 = "1"
const expected11 = "1,3,5,7,9,11"


test('Добавляем массив arr1 и ожидаем получить "1-8"', () => {
    return arrToString(arr1).then(data => {
        expect(data).toMatch(expected1);
    })
})
test('Добавляем массив arr1 и ожидаем получить "1,3-8"', () => {
    return arrToString(arr2).then(data => {
        expect(data).toMatch(expected2);
    })
})
test('Добавляем массив arr3 и ожидаем получить "1,3-8,10-12"', () => {
    return arrToString(arr3).then(data => {
        expect(data).toMatch(expected3);
    })
})
test('Добавляем массив arr4 и ожидаем получить "1-3"', () => {
    return arrToString(arr4).then(data => {
        expect(data).toMatch(expected4);
    })
})
test('Добавляем массив arr5 и ожидаем получить "1,2"', () => {
    return arrToString(arr5).then(data => {
        expect(data).toMatch(expected5);
    })
})
test('Добавляем массив arr6 и ожидаем получить "1,2,4"', () => {
    return arrToString(arr6).then(data => {
        expect(data).toMatch(expected6);
    })
})
test('Добавляем массив arr7 и ожидаем получить "1,2,4-6"', () => {
    return arrToString(arr7).then(data => {
        expect(data).toMatch(expected7);
    })
})
test('Добавляем массив arr8 и ожидаем получить "1-3,7-9,15,17,19-21"', () => {
    return arrToString(arr8).then(data => {
        expect(data).toMatch(expected8);
    })
})
test('Добавляем массив arr9 и ожидаем получить "1-6,100,1091,1999-2002"', () => {
    return arrToString(arr9).then(data => {
        expect(data).toMatch(expected9);
    })
})
test('Добавляем массив arr10 и ожидаем получить "1"', () => {
    return arrToString(arr10).then(data => {
        expect(data).toMatch(expected10);
    })
})
test('Добавляем массив arr11 и ожидаем получить "1,3,5,7,9,11"', () => {
    return arrToString(arr11).then(data => {
        expect(data).toMatch(expected11);
    })
})
