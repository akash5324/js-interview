function maxchars(str)
{
	const charmap={};
		let max=0;
		let maxchar='';
		
	for(let char of str)
	{
		if(charmap[char])

			charmap[char]++ ;

		else

			charmap[char]=1;
	}

for(let char in charmap)
{
	if(charmap[char]>max)
	{
		max=charmap[char];

		maxchar=char;
	}

}

console.log(charmap);

console.log(maxchar);

console.log(max);
}

maxchars('hello world');