const readline = require("readline-sync");

function direction(){

    let direcOfCount = readline.question("Which direction do you want to count in, up or down?: ")

    let up = "up"
    let down = "down"
    if (direcOfCount == up){
    let stopNum = readline.question("Pick which number you want to stop the count increasing at: ")
    
        for(let i = 1; i <= stopNum; i++){
            console.log(i)
        } 
    }
if (direcOfCount == down) {
        let startNum = readline.question("Enter a number between 20 and 1 to start the countdown to 1 from: ")
                for(let i = startNum; i>= 1; i--){
                    console.log(i)
            }; // need to add in a catch so startNum can't go above 20
        }
}
    direction()
