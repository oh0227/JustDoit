function plus(a, b){
    console.log(a + b);
}

function divide(a, b){
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);


const player = {
    name: "jinwoo",
    sayHello: function(playerName){
        console.log("Hello! " + playerName)
    }
};

player.sayHello("jinwoo");
console.log(player, console);