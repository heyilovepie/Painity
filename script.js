function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var results = [];

$(function(){

  var amount = 4;
  var col = 7;

  var rows = Math.floor( amount/col );
  var $picContainer = $("#picture-container");
  var shuffleArray = [];
  for( var i = 0; i < amount; i++){
    shuffleArray[i] = i + 1;
  }
  shuffleArray = shuffle( shuffleArray );
  var counter = 0;
  for( var i = 0; i < rows; i++ ){
  var $div = $(document.createElement('div'));
  $div.attr("id", i  );
    for( var j = 0; j < col; j++){
      var $img = $(document.createElement('img'));
      $img.attr("src", "images/image" + shuffleArray[counter] + ".jpg");
      $img.attr("id", shuffleArray[counter]);
      counter ++;
      $div.append($img);
    }
  $picContainer.append($div);
  }


  $('#picture-container img').click(function(){
    var element = $(this);
    var name = element.attr("id");
    var row = element.parent().attr("id");
    results[parseInt(row)] = name;
  });
});