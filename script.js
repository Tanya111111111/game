let d1=document.querySelector(".d1");
let d2=document.querySelector(".d2");
let d3=document.querySelector(".d3");
let main=document.querySelector(".main");
let loc1=document.querySelector(".loc1");
let loc2=document.querySelector(".loc2");
let loc3=document.querySelector(".loc3");
let b1=document.querySelector(".b1");
let b2=document.querySelector(".b2");
let b3=document.querySelector(".b3");
let rght=document.querySelectorAll(".rght");
let wrng=document.querySelectorAll(".wrng");
let rt=document.querySelector(".rt");
let arsc=0;
let start=document.querySelector(".start")
let arscor=document.querySelector(".arscor")
let art1=document.querySelectorAll(".art1");
let map=document.querySelector(".map");
let result=document.querySelector(".result");
let tr=3;
rt.innerHTML=tr;
arscor.innerHTML=arsc;
let y=0;
d1.onclick=function(){
	map.style.display="none";
	loc1.style.display="block"

}
d2.onclick=function(){
	map.style.display="none";
	loc2.style.display="block"

}
d3.onclick=function(){
	map.style.display="none";
	loc3.style.display="block";
	

}
b1.onclick=function(){
	map.style.display="block";
	loc1.style.display="none";
	
}
b2.onclick=function(){
	map.style.display="block";
	loc2.style.display="none";
	time=10;
	scor=0;
	document.querySelector(".timer").innerHTML=time;
	score.innerHTML=scor;
	
}
b3.onclick=function(){
	map.style.display="block";
	loc3.style.display="none";
	
}
for(i=0;i<4;i=i+1){
	wrng[i].onclick=function(){
		tr=tr-1;
		alert("wrong");
		rt.innerHTML=tr;
		if (tr==0){
			alert("проигрыш")
		}
	}
}
for(i=0;i<2;i=i+1){
	rght[i].onclick=function(){
		
		alert("right");
		y=y+1
		if (y==2){
			alert("победа")
		}
	}
}
start.onclick=function(){
 let score=document.querySelector(".score");
	let scor=0;
	let topp=[150,350,550];
	let leftt=[ 500,700,900];
	let time=10;
	
function game(){
	let kr=document.createElement('div');

	document.body.appendChild(kr);
	kr.style.height="100px";
	kr.style.width="100px";
	kr.style.marginLeft="25px";
	kr.style.position="absolute";
	kr.style.transition="1s";
	kr.classList.add("img");
	function getRandom(number){
            let rand = Math.random() * number;
            let round = Math.round(rand);
            return round;
        }
    let r2=getRandom(2);
    
	let r1=getRandom(2);

	kr.style.top=topp[r2]+"px";
	kr.style.left=leftt[r1]+"px";
	kr.onclick=function(){
		kr.style.display="none";
		scor=scor+1;
		score.innerHTML=scor;
	}
	function d(){
		
		kr.style.display="none";
		
	}

	setInterval(d,1500);
		function up(){
			kr.style.top=topp[r2]-50+"px";
	}
	function down(){
			kr.style.top=topp[r2]+"px";
	}
	setTimeout(up,500);
	setTimeout(down,1000)


}
function timer(){
	time=time-1;
	document.querySelector(".timer").innerHTML=time;
}



let int2=setInterval(timer,1000)
let int1=setInterval(game,500);
function finish(){
	clearInterval(int1);
	clearInterval(int2);
	
	if (scor>=15){

		alert("победа")
	}else if (scor<15){
		alert("проигрыш")
	}
	
}
setTimeout(finish,10000)
}

for(let i=0;i<12;i=i+1){
	art1[i].onclick=function(){
		arsc=arsc+1;
		art1[i].style.display="none";
		arscor.innerHTML=arsc;
		if(arsc==12){
			alert("победа")
		}
	}
}