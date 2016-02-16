window.onload=function(){
	var sence = document.getElementById('sence'),
		list = document.createElement('div'),
		suiji,tt,ziMu,time,kaiguan=true,count = 0,top,dd,timerId;
		list.setAttribute('class','list');
	suiji = function(){
		tt = Math.floor(Math.random()*57+65);
		while(tt>=91&&tt<=96){
			return suiji();
		}
		return String.fromCharCode(tt);
	};
	for(var i=0;i<52;i++){
		list = document.createElement('div');
		list.setAttribute('class','list');
		list.style.webkitTransform = 'scale(0.85)';
		ziMu = suiji();
		list.innerHTML = ziMu;
		sence.appendChild(list);
	}
	time = document.getElementById('time');
	time.innerHTML = 0;
	top = sence.firstElementChild;
	document.onkeydown = function(e){
		dd = top.innerHTML;
		if(e.shiftKey){
			if( e.keyCode !== dd.charCodeAt(0) ) return;
		}else{
			if( e.keyCode+32 !== dd.charCodeAt(0) ) return;
		}
		top.style.background = 'white';
		top = top.nextElementSibling;
		// sence.removeChild(top);sence.children.length == 0
		if(!top){
			clearInterval(timerId);
			alert(time.innerHTML);
			location.reload();
		}
		if(kaiguan){
			timerId = setInterval(function(){
				count++;
				time.innerHTML = count;	
			},1000);
			kaiguan = false;
		}
	};
};