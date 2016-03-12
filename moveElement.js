function moveElement(elementID,final_x,final_y,interval){
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement){     //当elem有movement属性时，清除该属性，保证一个元素只执行一个移动动作
    clearTimeout(elem.movement);
  }
  if (!elem.style.left){
    elem.style.left = "0px";
  }
  if (!elem.style.top){
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if(xpos == final_x && ypos == final_y) return true;
  if(xpos < final_x) {
    dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if(xpos > final_x) {
    dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if(ypos < final_y) {
    dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if(ypos > final_y) {
    dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos+"px";
  elem.style.top = ypos+"px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")" ; //注意此处单引号双引号，elementID在输入是是一个带引号的值
  elem.movement = setTimeout(repeat,interval);
}
addLoadEvent(moveElement);
