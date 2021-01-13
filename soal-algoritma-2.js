arr = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3]

var l = arr.length / 3

arr1 = arr.splice(0,l)
arr2 = arr.splice(0,l)
arr3 = arr.splice(0,l)

barr = []

barr.push(arr1)
barr.push(arr2)
barr.push(arr3)

for (let i = 0; i < barr.length; i++) {
    console.log(barr[i].sort())
}

for (let i = 0; i < barr.length; i++) {
    let total = 0

    for (let j = 0; j < barr[i].length; j++){
        total = total + barr[i][j]
    }
    console.log('-------------------------------------------------')
    console.log(`total : ${total}`)
    console.log(`Rata Rata : ${total/barr[i].length}`)
    console.log(`Min : ${Math.min( ...barr[i] )}`)
    console.log(`Max : ${Math.max( ...barr[i] )}`)
}