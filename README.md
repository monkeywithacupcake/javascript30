# javascript30
This repo is my trip through [Wes Bos javascript30](https://javascript30.com/). I'm starting on 22Feb2018.

## Day 18
Dealing with data that is not in the format that you like. The example is focused on string times, doing math, and getting an output. Array methods of reduce and map are used. Very useful for messy data.

## Day 17
Sorting an array by something besides the first thing. We used band names and sorted them without the initial article. Since I've spent most of my coding days dealing with ugly data, this was a trick I already knew, but it was fun to use band names.

## Day 16
Cool effects with movement of the mouse.

## Day 15
Super helpful explanation of event delegation and local storage. I use local storage for JWT on apps, and it was fun to use it for something else. However, the explanation of event delegation with responsible parents and negligent children was awesome :smile:
Side note, the idea to change the checkbox to something besides a traditional checkbox, in this case tacos, with css, was neat.

<p align="center">
 <img src="/img/day15.png" alt="day15 end image")/>
</p>

## Day 14
A little bit of a reminder that you have to be careful with what is in your data. Do you have a copy of the data, or are you pointing to the data? One of the things that you remember when making action creators for flow or redux design is that you never, never, never change the state, just return a new state - preventing the issue that you might mess it up.

## Day 13
Today's effort was to move images into the page view as the user scrolls. I did not particularly like the effect, but I imagine that it could be useful for catching when users are moving through your page quickly or are going to a particular space. I made a simple typo that neither my linter nor my console caught. I had typed

```
const isNotScrolledPast = window.ScrollY < imageBottom;
```

in what was supposed to be this function.

```
function checkSlide(e) {
    theImages.forEach(theImage => {
        console.log(theImage.classList); // the image
        // calculate where we need to start the image slide in at and where the bottom is
        //const windowBottom = (window.scrollY + window.innerHeight)
        const slideInAt =
            window.scrollY + window.innerHeight - theImage.height / 2;
        const imageBottom = theImage.offsetTop + theImage.height;
        const isHalfShown = slideInAt > theImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            theImage.classList.add('active');
            console.log("show");
        } else {
            theImage.classList.remove('active');
            console.log("unshow")
        }
    });
}
```

Did you see it? Yep. I had capitalized the *S* in scrollY. Good reminder - You have to catch your own mistakes!

## Day 12
How fun. Today, we learned how to add an easter egg when users present a secret code. Wes had us use the cornify.js script with the `cornify_add();` function to add random unicorns and rainbows as an example, but you could do anything.

<p align="center">
 <img src="/img/day12.png" alt="day12 end image")/>
</p>

## Day 11
Build a custom interface for HTML5 video player because the defaults are not the same in each browser, change over time, and may not look how we like. I was not able to get any of my javascript to have an impact with the player. I think this is because I am using python to host an http.server, and I think that may have also been my problem with the canvas day. However, I watched the video and pasted the code that I hadn't been able to test and guess. The first parts, I had spot on :) It's a bummer when I can't test and learn. The little open source video that Wes picked here is pretty cute. Check it out!

## Day 10
Focus on writing a little function to consider the current action and an array and take another action. I should have just googled for shift key because it was making me crazy. I finally watched the rest of the video only to realize that it was `shiftKey`. I'll know for next time.

## Day 9
The lesson was focused on some tips and tricks in the Javascript developer console. Most of these were new to me. Hooray for learning! Today I stopped splitting up the files. I just copied `index_START.html` into my `index.html` to do the work.

## Day 8 (March 1)
Learning about fundamentals of canvas. I followed along, but this never worked for me. I couldn't get any action even after copying the indexFINISHED js. I'm not sure why. :confounded:

## Day 7
A little bit of array methods review. And...some cleaner code with fewer temporary variables. I like it.
<p align="center">
 <img src="/img/day7.png" alt="day7 end image")/>
</p>

## Day 6
Search and highlight matches from data. This was a simple data fetching and then quick updates to a page. I learned more ways to use regex and how to match while things are still going (listen for `keyup` instead of just `change`). I should have realized the match before because we used `keyup` for the drumkit on day 1. I also liked the css for this day even though we did not touch it at all. The accordion effect is simpler than I thought.

<p align="center">
 <img src="/img/day6.png" alt="day6 end image")/>
</p>

## Day 5
Fancy page animations with css flexbox and a little bit of javascript to change css classes. I knew the basics of flexbox, but I followed along completely to update my css and js file. I am enjoying learning about the transitions and transforms.

<p align="center">
 <img src="/img/day5.png" alt="day5 end image")/>
</p>

## Day 4
Data wrangling with array functions. Yay. I already knew most of these. My use of other languages instead of javascript for most of these functions made me screw up a little bit at first, but I was able to figure it out mostly. Learned some pretty tricks for reduce, though.

<p align="center">
 <img src="/img/day4.png" alt="day4 end image")/>
</p>

## Day 3
Updates css variables based on user input and applies them to elements on the page. I copied the starter code into my index.html and style.css, created a new js file, and updated the css and wrote the js while watching the video. I had no idea about css variables, so the whole thing was new to me. The actual setup of this file is testy to the screen it is rendered on, so it did not work for me when I was looking at my javascript console, but I did not update it. I'm excited to learn about css variables.

## Day 2
Takes in the current time from js and updates the css clock image. I copied the starter code into my index.html and style.css, created a new js file, and updated the css and wrote the js while watching the video. I greatly prefer my files split up, but I understand why they are all on one page for these simple projects.  After he walked us through the seconds, I paused the video and wrote the minutes and hours alone and changed my `transition-timing-function` to `ease-in-out;` instead of the curve bezier, which seemed too jumpy on my screen. I was happy that it worked.

## Day 1
A simple (but awesome) keyboard based drumkit. I copied the starter code into my index.html and wrote the main.js script while watching the video. I did not know how to handle changing classes with vanilla javascript before - always used jquery! **I love that I can just navigate into the project directory and use `python3 -m http.server ` to serve the files locally.**
