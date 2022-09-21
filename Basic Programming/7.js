//string method
// trim method
// to uppercase()
// to lowercase()
// slice method

let first_name = "ijaz";
console.log(first_name.length);
first_name = first_name.trim();
console.log(first_name);
console.log(first_name.length);


//upercase method

let name = "ijaz ali";
console.log(name);
name= name.toUpperCase();
console.log(name);
console.log(name.UpperCase());

//lowercase method

let lowname = "ijaz ali from ce department";
console.log(lowname);
lowname = lowname.toLowerCase();
console.log(lowname);
console.log(lowname.toLowerCase());


//to slice method

let slicename = "ijaz ali from ce department";

// if we need a particular words in the string
// so need a where to start and where to end
let newslicename = slicename.slice (0,4);

// if we add start on the 1 mean the just added the start point the
// so the string we strting from that point to end the string.

let startname = slicename.slice(2);
console.log(startname);

------------------
console.log (newslicename.length);
console.log(newslicename);
