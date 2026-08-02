function random(array){

return array[
Math.floor(Math.random()*array.length)
];

}



function generateThought(){


let A = random(concepts);

let B = random(
concepts.filter(
item=>item !== A
));


let relation =
random(relationships);


let contradiction =
random(contradictions);



let template =
random(argumentTemplates);



let output =
template

.replaceAll(
"{A}",
A.name
)

.replaceAll(
"{B}",
B.name
)

.replaceAll(
"{R}",
relation
)

.replaceAll(
"{X}",
contradiction[0]
)

.replaceAll(
"{Y}",
contradiction[1]
);



document
.getElementById("output")
.innerText =
output;


}
