//wHAT IS THE PURPOSE OF A  CLASS?
    //Make a blueprint for objects
    //Cookie Cutter - reusable template

//DEMO 1
// Discuss the blueprint
//Unlike Function declarations, Class declarations do not get hoisted. Classes can be declared like this:
class Person {
    constructor(name){
        this.personName = name;
    }
};
//and can also be expressed like this:
// const Person = class {
//     constructor(name){
//         this.personName = name;
//     }
// }

//Make cookies
var jenn = new Person("Jenn");
var paul = new Person("Paul");
var kenn = new Person("Kenn");

//Show the data
console.log(jenn);
console.log(jenn.personName);
console.log(paul);


// Discuss constructor
class Tweet {    //1
    constructor(tweet){
        //2            //1
        this.text = tweet;
    }
}

var paulsTweet = new Tweet("Hey everyone! This is awesome!");
var quincysTweet = new Tweet("This is pretty cool!");

//1
//Discuss the parameter & where the value goes

//2 Discuss this.tweet and how it's like pronouns. Use console.logs to show
console.log(paulsTweet.text);


//Discuss two params/properties
class Player {
    constructor(name, points){
        this.name = name,
        this.points = points
    }
}


//Challenge building a class with three
//Build a class called Cat that has name, weight, and tail properties. 
//Make three cats with the blueprint.
//The console should read the following:
//Sansa, 30 points, true
// 

class Cat {
    constructor(name, weight, tail){
        this.name = name,
        this.weight = weight,
        this.tail = tail
    }
    
}
var sansa = new Cat('sansa', "30 pounds", true)
var timmy = new Cat('timmy', "250 pounds", true)
var ricky = new Cat('ricky', "8 pounds", true)
console.log(sansa)
console.log(timmy)
console.log(ricky)
const baseURL = "https://www.googleapis.com/youtube/v3/channels"
function fetchResults(e) {
    e.preventDefault();
  
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
  
    //1
    fetch(url)
      .then(function(result) {
      console.log(result)
      return result.json(); //2
    }).then(function(json) {
        console.log(json); //3
    });
  }


  fetch("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true").then((res)=>{console.log(res)})
  fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet")