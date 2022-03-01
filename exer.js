function highlight() {
    var highlight = document.getElementsByTagName("strong");
    for (var i = 0; i < highlight.length; i++) {
        highlight[i].style.color = "Gold";
    }
  }
  
  function noHighlight() {
    var highlight = document.getElementsByTagName("strong");
    for (var i = 0; i < highlight.length; i++) {
        highlight[i].style.color = "black";
    }
  }