// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// my way
const older18 = people.some(function(person) {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
});
console.log(older18);

// wes bos way
const isAdult = people.some(
    person => new Date().getFullYear() - person.year >= 19
);
console.log({ isAdult });

// Array.prototype.every() // is everyone 19 or older?
// my way
const all18 = people.every(
    person => new Date().getFullYear() - person.year >= 19
);
console.log({ all18 });
// we did it the same...because I based my second answer on his first!!

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// my way
const thecomment = comments.find(comment => comment.id == 823423);
console.log(thecomment);

// the same

// Array.prototype.findIndex()
// Find the comment with this ID

const commentindex = comments.findIndex(comment => comment.id == 823423);
console.log(commentindex);

// delete the comment with the ID of 823423
const testcomments = comments.slice();
console.log("approach to delete directly on an array");
testcomments.splice(commentindex, 1);
console.table(testcomments);

// another approach from Wes Box
console.log("approach with creating a new array")
const newComments = [
    ...comments.slice(0, commentindex),
    ...comments.slice(commentindex+1)
];
console.table(newComments);
