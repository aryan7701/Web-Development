console.log("This is a custom made module");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}


//module.exports = average;

//module.exports = {
//    avg: average,
//    name: "Aryan",
//    repo: "GitHub"
//}

module.exports.name = "Aryan";