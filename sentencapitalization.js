var sentence=(str)=>{

		var words=str.split(' ');
		console.log(words);
		const result=[];
		for(let word of words){


			result.push(word[0].toUpperCase() + word.slice(1));

		}

		var output=result.join(' ');

		console.log(output);

}



sentence("hello world");