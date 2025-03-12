function firstNonRepeatedChar(str) {
 // Write your code here
	// for(let i=0;i<str.length;i++){
	// 	// if(i-1>=0){
	// 	   const s1=str.substring(0,i);
	// 	// }
	// 	const s2=str.substring(i+1,str.length);
	// 	// prompt(s1,'   ',s2);
	// 	if(!s1.includes(str[i]) && !s2.includes(str[i])){
	// 		return str[i];
	// 	}
	// }
	let mp = new Map();
	for(let x of str){
		if(mp.has(x)){
			mp.set(x,mp.get()+1);
		}
		else{
			mp.set(x,1);
		}
	}

	for(let [key, value] of mp){
		if(value==1){
			return key;
		}
	}
	return null; 
}
// const input = prompt("Enter a string");  
alert(firstNonRepeatedChar(input)); 
