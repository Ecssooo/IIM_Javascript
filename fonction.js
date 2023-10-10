let c = "Jean"
let d = "Paul"
let result = checkName(c,d)

function checkName(p1,p2){
    return p1 == p2
}
console.log(result)



var names = []

names.push('Vincent')
names.push("Paul")
names.push("Arthur")

names.forEach(function (name){
    console.log(name+"va à la pêche")
})
