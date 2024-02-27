//your JS code here. If required.

var op=document.getElementById("output");
var btn=document.getElementById("btn");
function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
			var ip=document.getElementById("ip").value;
            resolve(ip);
        }, 2000);
    });
}

function promise2(res) {
    return new Promise((resolve, reject) => { 
              setTimeout(() => {
                resolve(res);
        }, 1000); 
    });
}

function sub(mul){
	return new Promise((resolve,reject)=>{
       setTimeout(()=>{
		   resolve(mul-3);
	   },1000);
	})
}
function div(mul){
	return new Promise((resolve,reject)=>{
       setTimeout(()=>{
		   resolve(mul/2);
	   },1000);
	})
}
function add(mul){
	return new Promise((resolve,reject)=>{
       setTimeout(()=>{
		   resolve(mul+10);
	   },1000);
	})
}
function final(mul){
	return new Promise((resolve,reject)=>{
		   resolve(mul);
	});
}

function onClick() {
   promise()
	   .then((res)=>{
		   var re=res;
	   document.getElementById("output").innerHTML ="Result:"+" "+res;
	   return promise2(res);
   })
	.then((res)=>{
	   document.getElementById("output").innerHTML ="Result:"+" "+res;
		return sub(res);
   }).then((res)=>{
		document.getElementById("output").innerHTML ="Result:"+" "+res;
		return div(res);
   }).then((res)=>{
		document.getElementById("output").innerHTML ="Result:"+" "+res;
		return add(res)
   }).then((res)=>{
		document.getElementById("output").innerHTML ="Result:"+" "+res;
		return final(res);
   }).then((res)=>{
		document.getElementById("output").innerHTML ="Final Result:"+" "+res;
	})
	   
}
  


btn.addEventListener('click', (event) => {
    // event.preventDefault();
    onClick();
});