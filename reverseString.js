//console.log('helloe world');

function reverse(str)
{ 
	let reversed='';

	for(let character of str)
	{
		reversed= character + reversed;
		console.log(reversed);
	}



	console.log(reversed);
}
reverse('hello world');








// function reverse(str)
// { 
// 	const arr= str.split('');

// 	arr.reverse();

// 	const revarr=arr.join('');
// 	console.log(revarr);
// }




// function reverse(str)
// { 
// 	let reversed='';

// 	for(let character of str)
// 	{
// 		reversed= character + reversed;
// 	}

// 	console.log(reversed);
// }



// function reverse(str)
// { 
// 	const arr= str.split('').reduce( (rev,char) => char+rev, '');


// 	console.log(arr);
// }