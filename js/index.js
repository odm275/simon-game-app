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
        green:$(".btn--green"),
        pink:$(".btn--pink"),
        orange:$(".btn--orange"),
        blue:$(".btn--blue")}
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
state.print = function(){
    console.log(this.getState());
};

state.computerTurn = function(){
    
  this.getState().forEach(function(i){//loop through some state element i [3,1,2,1]
    this.getButtons()[i].css(function(){
            $(this).css("color", j);
        });   
    }.bind(this));
    
}

var simon = Object.create(state);
//Computer generating pattern
simon.setState([]);
simon.setButtons();
//0,1,2,3; 0:green, 1:pink, 2:orange; 4:orange.
simon.random();
simon.random();
simon.random();
simon.print();
simon.computerTurn();

$(document).ready(function(){ 

})


//Computer's turn
/*simon.newState({
    green: $(".btn--green").on("click", function(){
       console.log(this);
    }),
    pink: $(".btn--pink").click(function(){
        console.log(this);
    }),
    orange: $(".btn--orange").click(function(){
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














