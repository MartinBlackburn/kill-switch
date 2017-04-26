# Kill switch

A simple bit of javascript to take down a site it is included on.

### Why?
Despite best efforts, sometimes you just need to take a site down.

* Your client has decided not to pay you. 
* A site you have made has been plagiarised.
* You feel like being a bit of a dick.

### How it works
The small bit of JavaScript calls in another JavaScript file, which can then do anything you need, for example: 

* Remove the body element. 
* Randomise all the background colours of elements. 
* Change all the pictures to somethings else (offensive or not, its up to you). 
* Display a modal saying the site has been stolen.

### How to use it
Copy the safe file to somewhere you control.  
Rename the domain part to the domain the kill switch is on. This is to stop accidental taking down of multiple sites.  
Replace the safe file location in the top of the kill-switch.js with your safe file location.  
Then minify the kill-switch.js and hide it in any other JavaScript you have, so it is harder to remove.  
Should you need to take the site down replace your safe file with one of the "kills" files, or some javascript of your own.  
