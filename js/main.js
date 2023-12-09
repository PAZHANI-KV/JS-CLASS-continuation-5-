// Continuation of module topic. (Here, we are going to discuss about importing class to the main file)

// consider the following code snippet (Line 5 to 10)

/* import Subscriber from "./app.js";

const me = new Subscriber("Aji");

console.log(me);
console.log(me.emailme()); */


//Topic: Higher Order Functions:(Discussed as follows)

// If we pass a function itself as a parameter for another function, then it is called as an higher order function. (Explained in line 17)

// function functioneName(Passing another whole function as a parameter) { }

// An example for Higher order function is given below

import {posts} from "./app.js";

posts.forEach((posts) => {
    console.log(posts);
}); //Here, they are using prewritten forEach function.

// console.clear();

const filteredPosts = posts.filter((post) => {
    return post.userId ===2;
}); //Here, they are using prewritten filter function.

console.log(filteredPosts);

const mappedPosts = filteredPosts.map((posts) => {
    return posts.id;
}); //Here, they are using prewritten map function.

console.log(mappedPosts);