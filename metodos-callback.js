const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num){
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)
console.log(arraySomada)

// Arrow function
// const arrayNums = [1, 2, 3, 4]

// const arraySomada = arrayNums.map(nums => nums * 10)
// console.log(arraySomada)