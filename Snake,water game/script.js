// Created a snake,water&gun game in javascript
// The game should ask you to enter s,w or g and declare win or loss using alert
// Use alert,prompt and confirm wherever required!
let welcome_page = alert("WELCOME TO THE SNAKE,WATER AND GUN GAME :)");

let test = prompt("Please, enter the no. of rounds you want to play");
let user = 0;
let computer = 0;
let c_chooses, we_choose;
let statement = "swg";
let generator;
for (let i = 0; i < test; i++) {
  generator = Math.floor(Math.random() * statement.length);

  c_chooses = statement[generator];

  we_choose = prompt("Enter any character from s,w and g");

  if (
    (c_chooses == "s" && we_choose == "w") ||
    (c_chooses == "w" && we_choose == "g") ||
    (c_chooses == "g" && we_choose == "s")
  ) {
    computer++;
    alert("This round won by computer!");
  } else {
    user++;
    alert("This round won by you!");
  }
}
if (computer > user) {
  alert("Computer has won the game by " + computer + "-" + user);
} else if (computer < user) {
  alert("You has won the game by " + user + "-" + computer);
} else {
  alert("Game Tied :)");
}
