function palindrome(str)
{
	const arr= str.split('').reverse().join('');

	if(str===arr)
	{
		
		console.log('its palindrome');
	}

	else
		{
			console.log('its not palindrome');

		}
}	


palindrome('abba');




// function palindrome(str)
// {
// 	const arr= str.split('').reverse().join('');

// 	if(str===arr)
// 	{
		
// 		console.log('its palindrome');
// 	}

// 	else
// 		{
// 			console.log('its not palindrome');

// 		}
// }	
