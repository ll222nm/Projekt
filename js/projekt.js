var bilder = ["pics/dom_wachau04stor.jpg", "pics/agave_horse01stor.jpg", "pics/duorum51stor.jpg", "pics/kloster_neu09stor.jpg", "pics/mette13stor.jpg"];
var count=1;

setInterval(function() {
	changeImage();
}, 5000);

function changeImage () {
  var image=document.querySelector("#wachau");
  image.setAttribute("src",bilder[count] );
  count+=1;
  
  if(count>4){
  	count=0;
  }
}


