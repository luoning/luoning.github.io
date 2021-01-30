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