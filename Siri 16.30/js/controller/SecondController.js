
var SecondController = function(view, model, state) {

 	view.plusButton.click(function(){

		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		model.notifyObservers();
 	});

 	view.minusButton.click(function(){
 		
   	    if (model.getNumberOfGuests() < 2) {
    		return 
    	}
  	 	else {
    	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
        }
        model.notifyObservers();
        
    });

  view.confirm.click(function(){
    var menu = model.getFullMenu();
    if (menu !== undefined){
      
      $(".second").hide();
      $(".dishinfo").hide();
      $(".yourmenu").show();
    }
    else{
      alert("You have to put something in the menu!");
    }
  });

 
  	//state.changeState("#dishinfo");

}
