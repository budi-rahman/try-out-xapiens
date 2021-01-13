var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio."
var strU = str.toUpperCase()
spl = strU.split("")

var pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var poolU = pool.split("")
var tmp = new Array(pool.length)
var res = ""

for (let i = 0; i< spl.length; i++) {

    x = poolU.indexOf(spl[i])

    if (!tmp[x]) {
        tmp[x] = 1
    } else {
        tmp[x] += 1
    }

    mv = spl[i].charCodeAt() + 5

    if (mv > 90){
        mv = 65 + ( mv % 90 ) 
    }

    if (mv == 37 || mv == 49 || mv == 51 ){
        mv = mv - 5
    }

    res += String.fromCharCode(mv)
}

for (let i =0 ; i< poolU.length; i++){
    if (tmp[i] == undefined){
        tmp[i] = 0
    }
    console.log(`karakter ${poolU[i]} sebanyak ${tmp[i]}`)
}

console.log(res.toLowerCase())