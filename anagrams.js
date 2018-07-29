function anagram(stringA,stringB)
{


 if(cleanstring(stringA)=== cleanstring(stringB))

 {

 	console.log('anagram');
 }

 else
 {
 	console.log('not an anagram');
 }


}

function cleanstring(str)
{
	return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}



anagram('akash','shaka');


