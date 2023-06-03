---
layout: post
author: B-rad
title: Got JSON, How to Show it off?
tags: [Web Development, Javascript, APIs]
comments: true
base-url: https://www.mkdircode.com
---

In a galaxy far far away some poor developer is trying to figure out how to 
display star wars films on a website. Lets build on what we learnt in the previous article.

{% highlight javascript %}

const baseURL = https://swapi.dev/api/films/

fetch(baseURL)
.then(response => response.json())
.then(data => console.log(data.results));
{% endhighlight %}