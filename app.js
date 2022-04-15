const myShopping = ["eggs", "milk", "bread", "cake", "pasta"]

// for(let i = 0; i < myShopping.length; i++){
//     console.log(myShopping[i])
// }

// for(let groceryItem of myShopping){
//     console.log(`Groceries in shopping cart: ${groceryItem}`)
// }



//let dayOfWeek = prompt("please enter  ")

const studentGrades = {
    Tavez: 90,
    Aisha: 89,
    Jake: 76,
    Natasha: 52
}

for(let student in studentGrades){
    console.log(student + " " + studentGrades[student])
}

for(let grades of Object.values(studentGrades)){
    console.log(grades)
}

function getColor(phrase){
    if(phrase === "stop"){
        console.log("red")
    } else if(phrase === "slow"){
        console.log("yellow")
    } else if(phrase === "go"){
        console.log("green")
    } else{
        console.log("purple")
    }
}