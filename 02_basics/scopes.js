var c = 300 //global scope
let a = 300
if (true) {     //block scope
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
}
console.log(a);
//console.log(b);
console.log(c);

function one() {
    const username = "trupti"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()
if (true) {

}