//OLOO style

"use strict";

//Root behavior
var handleState = {
    newState: function(obj){
        //state will actually be created in the object simon via implicit binding.
        this.state = obj;
    },
    getState: function(){
        return "The state is: " + this.state;
    },
    clearState: function(){
        this.state = [];
    },
    random: function(){
        this.state.push(Math.floor((Math.random() * 4) + 1));
    }
};

var state = Object.create(handleState);

//Some combination of root behavior
state.print = function(){
    console.log(this.getState());
};


var simon = Object.create(state);

//Computer's turn
simon.newState({
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

$(document).ready(function(){
    simon.state.green;
});



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














