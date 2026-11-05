function outer(){
    let c = 0
    return function(){
        c++
        return c
    }
}

let increment = outer()
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
