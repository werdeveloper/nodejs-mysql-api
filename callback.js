// Add
function add(a, b, cb){
	if(a!=''){
		console.log("Get the data", a);
		cb(null, a);
	} else{
		console.log("No data found");
		cb(null, a);
	}
	console.log(a+b);
}
//call the function
add(1, 2, (err, result)=>{
	console.log("Error", err);
	console.log("result", result);
});
