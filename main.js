function firstFunction(){
    colorPicker = document.getElementById('colorChange');
    document.body.style.backgroundColor = colorPicker.value;    
};
// var evt = document.createEvent("MouseEvents")
// evt.initMouseEvent("click", true, true, Window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
// document.getElementById().addEventListener("click", )
    //DO NOT Talk about how it's just syntactic sugar...yet....




//wHAT IS THE PURPOSE OF A  CLASS?
    //Make a blueprint for objects
    //Cookie Cutter - reusable template

//DEMO 1
// Discuss the blueprint
//The class keyword does not get hoisted. It can be declared like this:
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
    constructor(name, weight, isAnnoying){
        this.name = name,
        this.weight = weight,
        this.isAnnoying = isAnnoying
    }
    
}