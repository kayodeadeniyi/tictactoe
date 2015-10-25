var remote = require('remote')
var Menu = remote.require('menu')
var MenuItem = remote.require('menu-item')
var wins = [['i0','i1','i2'], ['i3','i4','i5'], ['i6','i7','i8'],['i0','i3','i6'], ['i1','i4','i7'],
              ['i2','i5','i8'], ['i0','i4','i8'], ['i2','i4','i6']];

function check(data, val){
  wins.forEach(function(win){
    var lookup = 0
    for(var i=0; i < data.length; i++){
      if (win.indexOf(data[i]) > -1){
        lookup++
      }
      if(lookup == 3){
        alert(val + "wins");
        location.reload();
        return true;
      }
    }
  });
}

// Add the listener
document.addEventListener('DOMContentLoaded', function () {
  var classname = document.getElementsByClassName("node");
  var menu = ""
  var board = {"X":[], "O":[]}
  var x = 1
  function myFunction () {
    x += 1
    if(x % 2 == 0){
      menu = "X";
    }else{
      menu = "O";
    }
    this.innerHTML = menu
    board[menu].push(this.id)
    var gty= false
    gty = check(board[menu], menu);
  }

  for(var i=0;i<classname.length;i++){
      classname[i].addEventListener('click', myFunction, false);
  }
});
