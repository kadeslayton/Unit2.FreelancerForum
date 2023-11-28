
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
 ];

const randFreelancers = {
  name:["Nancy", "Betty", "Mike", "Johnson", "David", "Robert", "Mark", "Nolan", "Debbie", "Eve"],

  price:[20, 22, 25, 33, 36, 39, 41, 47, 54, 65, 66, 80, 71],

  occupation:["plumber","diver","teacher","stock broker", "personal trainer", "maid", "electrician", "carpenter", "banker", "software developer", "photographer"]
};
//--------------------------------------------------------------------//
/*-------------CREATE ALL FUNCTIONS-------------------------*/

//Create a function that assigns values from an array passed through it to the table
function render(array){
  //assign a constant to the tablebody ID
  const tableParent= document.getElementById(`tableBody`)

  array.forEach((value) => {
    //make a row with 3 cells wide
    let newRow= tableParent.insertRow();
    let nameCell = newRow.insertCell(0);
    let occCell = newRow.insertCell(1);
    let priceCell = newRow.insertCell(2);
    //assign the values of the passed array to its coinciding cell
    nameCell.innerHTML= value.name;
    occCell.innerHTML= value.occupation;
    priceCell.innerHTML= value.price;
  });
}

//finds the average of all the freelancers prices
function createAvg(array){
  //assign a constant to avg price ID
 let total = array.reduce((value,current)=>{
    return value.price += current.price;
 });
 let average = total/array.length;
 return average;
}

//picks random index of the passed array
function randNum(array){
  let randnumber = Math.floor(Math.random() * array.length)
  return randnumber;
}

function newTable(array){
  
let array1 = array.name;
let array2 = array.occupation;
let array3= array.price;
//assign random index value of each array by calling the randNum function.
let newName = randNum(array1);
let newOcc = randNum(array2);
let newPrice = randNum(array3);

//push the new random values from the individual arrays to the initial array
freelancers.push({
  name: array1[newName],
  occupation: array2[newOcc],
  price: array3[newPrice]
});
const tableParent= document.getElementById(`tableBody`)

while (tableParent.firstChild){
  tableParent.removeChild(tableParent.firstChild);
}
render(freelancers);
}
/*----------------Initalize HTML----------------*/

//init first table
render(freelancers);

//init average
let averageParent = document.getElementById(`averagePrice`);
let average = createAvg(freelancers);
averageParent.innerHTML = average;

/*--------------- Set Timer ---------------------*/

const intervalID= setInterval(newTable, 3000, randFreelancers, freelancers, render, createAvg);
function stopNew(){
  clearInterval(intervalID);
}
const stop = setTimeout(stopNew, 30000)



