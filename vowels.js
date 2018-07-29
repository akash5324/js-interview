var input =(str)=>{


	var output=str.match(/[aeiou]/gi);



	console.log(output.length);

}

input('hello world out there');



// var input =(str)=>{

// 	var words=str.toLowerCase();
// 	var count=0;
// 	var testing=['a','e','i','o','u'];
// 	for(let word of words){

// 		if(testing.includes(word)){

// 			count++;
// 		}
// 	}


// 	console.log(count);

// }