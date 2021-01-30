var date=new Date;  
var year=date.getFullYear();   
var month=date.getMonth()+1;  
month =(month<10 ? "0"+month:month);  
var day=date.getDate() 
var mydate = (year.toString()+"/"+month.toString()+"/"+day.toString());  

function godGiven(x=10){
      var  givenNum=parseInt(Math.random(1)*x)+1
     // console.log(god.givenNum)
      return givenNum   
    }
function getJqTime(x,n){
	var year=date.getFullYear()-2000
	// var year=18
	z=parseInt(year*0.2422+n-year/4)
	if(x%2>0){
		y=x/2+1.5		
	}else{
		y=x/2+2		
	}
	if(y>12){
		y=y-12
		year=year+1
	}
	return((2000+year)+"/"+y.toString()+"/"+z.toString()) 

}

function loadHtml(x) {        
        document.getElementById("res").innerHTML = '<div class="bigimg-area" style="background:#eee url('+data.teChan[x].img+') no-repeat center; background-size:cover;"><div class="imgtitle">'+data.teChan[x].title+' | '+data.teChan[x].txt+'</div></div>'
        +'<div class="classify-item"><br/>'+data.teChan[x].html+'</div><div class="collapse-arrow"><span onclick="clsHtml()" class="icon icon-up-nav"></span></div><div></div>'
        document.getElementById("res").setAttribute("class", "classify-area open")
}
function clsHtml() {        
        document.getElementById("res").setAttribute("class", "classify-area close")
}

