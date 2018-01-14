//OLOO style
"use strict";

//Root behavior
var handleState = {
    setState: function(obj){
        //state will actually be created in the object simon via implicit binding.
        this.state = obj || [];
    },
    getState: function(){
        return this.state;
    },
    setButtons: function(){
        this.btns = {
        green:".btn--green",
        pink:".btn--pink",
        orange:".btn--orange",
        blue:".btn--blue"}
    },
    getButtons: function(){
        return this.btns;
    },
    clearState: function(){
        this.state = [];
    },
};

var state = Object.create(handleState);
//Some combination of root behavior, we can reduce
//stuff going on humanTurn/Computer Turn from here

////////////////////////////////
//STUFF TO REDUCE/COMBINE handleState methods.
///////////////////////////////

var computer = Object.create(state);
var human = Object.create(state);

var match = function(humanState, computerState){
//See if human matched computer's array.
    for(var i = 0; i < humanState.length; i++){
        if (humanState[i] !== computerState[i]){
            return false;
        }
    }
    return true;
}
//Exclusive object(s) for human:
human.humanTurn = function(btn){
    human.state.push(btn);
    console.log('HUMAN STATE:')
    console.log(human.state);

    var check = match(human.state, computer.state); //Check if human matched computer.
    console.log("The match is: " + check);
    //Constaint:
    //Once we have enough pushes to at least have a case to compare the arrays
    if(check && (human.state.length === computer.state.length) ){//1
        human.clearState();//Continue and add n+1 state
            setTimeout(function timer(){
            computer.computerTurn(check);        
        },3000);
    } else if(!check && human.strict){//3
        //  STRICT MODE: ON
        computer.clearState();
        human.clearState();
        computer.computerTurn();//Start over
    } else if(!check && !human.strict){
        human.clearState();//Continue and add n+1 state
        setTimeout(function timer(){
        computer.computerTurn(check);        
        },3000);
    }
};

//Exclusive object(s) for computer:
computer.random = function(){
    switch(Math.floor((Math.random() * 4))){
        case 0:
        this.state.push('green');
        break;
        case 1:
        this.state.push('pink');
        break;
        case 2:
        this.state.push('orange');
        break;
        case 3:
        this.state.push('blue');
        break;
    }
}
computer.computerTurn = function(check){
    if(check || computer.counter === 0){
        computer.random();            
    }
    
    for(var i = 0; i < computer.getState().length;i++){
    (function(j){
        setTimeout(function timer(){
            //The last iteration will stll be on here.
            var color = computer.getState()[j];
            var button = computer.getButtons()[color];
            $(button).toggleClass("btn--computer"+color);
            setTimeout(function timer(){
                $(button).toggleClass("btn--computer"+color);
            }, 2000);
        },j*3000);
    })(i);
}
console.log("COMPUTER STATE:")
console.log(computer.state);
console.log(computer.counter);
if(computer.counter + 1 ===computer.state.length){
    computer.counter++;
}

};

$(document).ready(function(){

//Set the Initial Conditions
computer.setState([]);
computer.setButtons();
human.setState([]);
human.setButtons();
human.strict = false;
computer.counter = 0;

  //ON BUTTON
$(".start").click(function(){
    
    computer.computerTurn();
});
$(".strict").click(function(){
    human.strict = !human.strict;
});

$(human.getButtons().green).click(function(){
    human.humanTurn('green');
    //human.humanTurn();
});
$(human.getButtons().pink).click(function(){
    human.humanTurn('pink');
});
$(human.getButtons().orange).click(function(){
    human.humanTurn('orange');  
});
$(human.getButtons().blue).click(function(){
    human.humanTurn('blue');
});

})