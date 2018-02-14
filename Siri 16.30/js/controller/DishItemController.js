var DishItemController = function(view, model, state) {

    view.menuAdd.click(function(){
      model.addDishToMenu(model.getCurrentDish());
      model.notifyObservers();

    });

    view.backSearch.click(function(){
      $(".dishinfo").hide();
      $(".second").show();
    });


    console.log("hej");
  	view.update();

}
