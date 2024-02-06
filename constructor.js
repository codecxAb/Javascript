function music(artist,name,duration){
    this.artist = artist;
    this.name = name;
    this.duration = duration;
}

let hamnava = new music("Arijit Singh" ,"Hamnava","3:45");
console.log(hamnava);

//Constructor Functions:
//A constructor function is a function that is used to create and initialize objects. It serves as a blueprint for creating objects of a particular type. Constructor functions are typically named with an initial uppercase letter to distinguish them from regular functions.

// The new Keyword:
// The new keyword is used to create an instance of an object from a constructor function. When you use new with a constructor function, it performs the following steps:

// Creates a new empty object.
// Sets the this keyword in the constructor to refer to the newly created object.
// Executes the constructor function with the provided arguments.
// Returns the newly created object.