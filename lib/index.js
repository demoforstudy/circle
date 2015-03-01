var PI = Math.PI;
var perimeter = function(radius){
	if(radius <= 0){
		return "Please set positive radius";
	}
	else{
		return 2 * PI * radius
	}
}
var area = function(radius){
	if(radius <= 0){
		return "Please set positive radius";
	}
	else{
		return PI * Math.pow(radius,2); 
	}
}
exports.perimeter = perimeter; 
exports.area = area; 
