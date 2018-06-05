    class Person {
        constructor(name) {
            console.log(this)
        }
    };

    var jenn = new Person("Jenn");
    console.log(jenn)
    var paul = new Person("Paul");
    var kenn = new Person("Kenn");


// console.log(jenn.personName); console.log(paul);

class Tweet { //1
    constructor(tweet) {
        //2            //1
        this.text = tweet;
    }
}

// var tomsTweet = new Tweet("Hey everyone! This is great!"); var quincysTweet =
// new Tweet("Ehhh, this is pretty cool!"); console.log(tomsTweet.text); class
// Player {     constructor(name, points){         this.name = name,
// this.points = points     } } //Challenge building a class with three //Build
// a class called Cat that has name, weight, and tail properties. //Make three
// cats with the blueprint. //The console should read the following: //Sansa, 30
// pounds, true //Timmy, 250 pounds, true //Ricky, 8 pounds, true // class Cat {
// //     constructor(name, weight, isAnnoying){ //         this.name = name, //
//         this.weight = weight, //         this.isAnnoying = isAnnoying //
// } // }