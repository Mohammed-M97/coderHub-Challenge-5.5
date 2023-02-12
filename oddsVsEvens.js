function oddsVsEvens(num) {
    // write your code here
    let n = num.toString()
    let a = " "
    let z = ' '
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 == 0) {
            a += n[i]
        } else {z += n[i]}
    }


    function toArray(array) {

        var myArr = array.split("").map((array)=>{
            return Number(array)
          })

        return myArr  
    }

    function sumOfArray(sum) {
        let total = 0
        for (const namber of sum) {
            total += namber
        }
        return total
    }
    
    let arrayA = toArray(a)   
    let sumA = sumOfArray(arrayA)
    let arrayZ = toArray(z)   
    let sumZ = sumOfArray(arrayZ)
    

    if (sumA > sumZ) {
        return 'even'
    } else if (sumZ > sumA) {
        return 'odd'
    } else return 'equal'

    
}


console.log(oddsVsEvens(54870));