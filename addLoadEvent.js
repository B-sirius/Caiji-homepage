function addLoadEvent(func){	//用于将各个函数都绑定到 window.onload 事件
	var oldonload = window.onload;	//将 window.onload 事件处理函数存入oldonload
	if (typeof window.onload != 'function'){	//如果该函数还没有绑定任何函数，将新函数添加给他
		window.onload = func;
	}
	else{
		window.onload = function() {
			oldonload();
			func();		//如果已经绑定了函数，将函数绑定到其末尾
		}
	}
}
