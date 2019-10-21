/* use strict*/
let s ="*", n=10;
for (let i= 0; i<10;i++) 	{
	let p=" ";
	for (let j=1; j<n;j++) {
		p+=" ";
		};
	console.log(p+s);
	n--; 
	s+="**";
}