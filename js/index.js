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
    random: function(){
        //this.state.push(Math.floor((Math.random() * 4)));
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
    },
};

var state = Object.create(handleState);
//Some combination of root behavior



state.computerTurn = function(){
    var self = this;
    this.random();

for(var i = 0; i < this.getState().length;i++){
    (function(j){
        setTimeout(function timer(){
            //The last iteration will stll be on here.
            
            var color = self.getState()[j];
            var button = self.getButtons()[color];
            $(button).toggleClass("btn--computer"+color);

            setTimeout(function timer(){
                $(button).toggleClass("btn--computer"+color);
            }, 2000);
        },j*2000);
        
    })(i);
}

console.log(this.getState());
};

state.humanTurn = function(btn){
        console.log(this.getState());

        
};


$(document).ready(function(){
var computer = Object.create(state);
var human = Object.create(state);
//Set the Initial Conditions
computer.setState([]);
computer.setButtons();
human.setState([]);
human.setButtons();
  
  //ON BUTTON
$(".start").click(function(){
    computer.computerTurn();
});

$(human.getButtons().green).click(function(){
    human.humanTurn(this);
    //human.humanTurn();
});
$(human.getButtons().pink).click(function(){
    human.humanTurn(this);
});
$(human.getButtons().orange).click(function(){
    human.humanTurn(this);  
});
$(human.getButtons().blue).click(function(){
    human.humanTurn(this);
});



})


//Computer's turn
/*simon.newState({
    green: $(".btn--green").on("click", function(){
       console.log(this);
    }),
    pink: $(".btn--pink").click(function(){
        console.log(this);
    }),
    orange: $(".
+   btn--orange").click(function(){
        console.log(this);
    }),
    blue: $(".btn--blue").click(function(){
        console.log(this);
    })
});
*/

;



//----------------------------------------------------------------------//
/*
var Widget = {
    clickOn: function(btn){
        this.$elem = null;
    },
    insert: function($where){
        if(this.$elem){
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo( $where );
        }
    }
};

var Button = Object.create( Widget );

Button.setup = function(btn,btn2,btn3,btn4){
    //delegated call
    this.linkButton(btn,btn1,btn2,btn3);
};

Buttton.onClick = function(evt) {
    console.log("Button " + this.label + "clicked!")
}

*/
