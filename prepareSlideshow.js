function prepareSlideshow() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementsByTagName("linklist")) return false;
  if (!document.getElementById("preview")) return false;
  var preview = document.getElementById("preview");
  preview.style.position = "absolute";
  var list = document.getElementById("linklist");
  var links = list.getElementsByTagName("a");
  for(i=0;i<links.length;i++)
  {
    links[i].onclick = function(){
    return false;
    }
  }
  //为mouseover添加动画效果
  links[0].onmouseover = function() {
    moveElement("preview",0,0,15);
  }
  links[1].onmouseover = function() {
    moveElement("preview",-500,0,15);
  }
  links[2].onmouseover = function() {
    moveElement("preview",-1000,0,15);
  }
  links[3].onmouseover = function() {
    moveElement("preview",-1500,0,15);
  }
  links[4].onmouseover = function() {
    moveElement("preview",-2000,0,15);
  }
}
addLoadEvent(prepareSlideshow);
