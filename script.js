function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

$(function(){

  var amount = 4;
  var col = 4;
  var rows = Math.floor( amount/col );

  var $picContainer = $("#picture-container");
  var shuffleArray = [];
  console.log("meow");
  /*
  for( var i = 0; i < amount; i++){
    shuffleArray[i] = i + 1;
  }
  shuffleArray = shuffle( shuffleArray );
  console.log("meow");
  var counter = 0;
  for( var i = 0; i < rows; i++ ){
          console.log("outer loop" + i);
  var $div = $(document.createElement('div'));
    for( var j = 0; j < col; j++){
      console.log("inner loop" + j);
      var $img = $(document.createElement('img'));
      $img.attr("src", "img/image" + shuffleArray[counter] + ".jpg");
      counter ++;
      $div.append($img);
    }
  $picContainer.append($div);
  */
  }
});