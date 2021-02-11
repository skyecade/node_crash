const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Get serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

//Get host (root domain)

console.log(myUrl.host);

// Get hostname (same is host, but does not get port)

console.log(myUrl.hostname); 

// Get pathname

console.log(myUrl.pathname);

// Serialized query

console.log(myUrl.search);

// Params object

console.log(myUrl.searchParams);

// Add params

myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through the params

myUrl.searchParams.forEach((value, nom) => console.log(`${nom}: ${value}`));

