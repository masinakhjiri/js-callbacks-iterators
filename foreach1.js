
// (1) Use the .forEach iterator to loop over the f
//ollowing array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
let foods = ["pizza", "tacos", "ice cream", "sushi"];


// your code here
const likeFood = foods.forEach((food)=>{
    console.log("I like " + food)
})
