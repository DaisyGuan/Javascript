var myPlaces = ['home','work','fun'];
var friendPlaces = ['home','work','haha'];

for (var i=0;i<myPlaces.length;i++){
 // console.log(myPlaces[i]);
  for (var j=0;j<friendPlaces.length;j++){
    if (myPlaces[i]===friendPlaces[j]){
      console.log('Match: ' + friendPlaces[j]);
    }
  }
}
