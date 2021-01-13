var pool = 1234567
var str = pool.toString()
var l = str.length
var res = ""

for (let i = 0; i< l; i++){

    zeros = l - i
    res += str[i]

    for (let j = 1; j < zeros; j++){
        res += "0"
    }

    console.log(res)
    res = ""
}