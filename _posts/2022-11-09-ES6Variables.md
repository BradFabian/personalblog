---
layout: post
author: B-rad
title: ES6 101 - Variables
tags: [Web Development, Javascript]
comments: true
base-url: https://www.mkdircode.com
---

It's 2022, why on earth do we need yet another article explaining es6, variables, hoisting, scope because understanding fundamentals is fundamental. If we are using javascript, typescript, react or whateer ECMAScript flavor of the week is in fashion, you'll be able to dive in and find your way. This will be a series of articles and I'll keep them short.

First up. Scope.

The 'Var' is scoped to the function. When it is declared in an function, it's only accessible in the function and can not be used outsided that funciton. However if it's declared in a loop or if statement it will "leak" into the global scope and accessed throughout the Javascript program. 

Const and Let are block scoped. Meaning when declared in an if, switch, for, while loop can be accessed within the particular condition or loop. 

{% highlight javascript %}
function scope() {
    if(true) {
       var stanz = "Dan Aykroyd"      //function scope
        let venkman = "Bill Murray"        //block scope
        const spengler = "Harold Remis"   //block scope
    }
     console.log(stanz)  // Dan Aykroyd
    console.log(venkman)  //not defined
    console.log(spengler). //not defined
}

{% endhighlight %}


They are both block scoped, Whats the big differece between const and let?
Const makes the contract that no rebinding will happen. Basically the const variable remains constant and can not change. If you expect an variable to change use the let. A for loop is a great example. Using let for i allows for scoped binding while using const will not allow i to be changed.

Hope this cleared up var, let and const. Stay tuned for the next es6 bite.