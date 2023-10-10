let student = {
    names: "Alex",
    favoriteFood: "pizza",
    city: "Paris"
};
let value = Object.values(student);
let cara = 0;
for (i = 0; i < value.length; i++) {
    m = value[i].length;
    cara += m;
}
pair = cara % 2;
if (pair = 0) {
    console.log("pair");
} else {
    console.log("impair");
}
