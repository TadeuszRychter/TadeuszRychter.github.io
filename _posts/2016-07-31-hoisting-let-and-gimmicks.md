---
layout: post
title:  "Hoisting, let and gimmicks"
date:   2016-07-31
categories:
tags: JavaScript interview debugging
permalink: hoisting-let-and-gimmicks
author: "Tadeusz Rychter"
---
Let’s jump straight into the code.
<!-- more -->

<pre class="line-numbers"><code class="language-javascript">myFunction ();
function myFunction () {
  console.log ("I’m hoisted");
}

myFunctionExpression ();
var myFunctionExpression = function () {
  console.log ("I’m not");
};</code></pre>

The second part fails with a type error. Function expressions are not hoisted in JavaScript.

Now let’s consider the following:

<pre class="line-numbers"><code class="language-javascript">console.log (myVar);
var myVar = "is hoisted";

console.log (myLet);
let myLet= "is also hoisted, but uninitialised";</code></pre>

The first part prints undefined (we first execute the console.log() and assign a value afterwards). The second part throws a reference error. That’s because even though declared and hoisted the variable declared by let is in the Temporal Dead Zone at the time of calling the console.log().

So be careful when doing any type checking. This will throw the same error:

<pre class="line-numbers"><code class="language-javascript">if (typeof x === "undefined") {
  console.log (x);
}

let x;</code></pre>    
    
Of course the simplest way to avoid any trouble is to follow the old practice of declaring everything at the top of a function. However it’s likely to run into such cases during some job interviews, especially those done with pen and paper when one is supposed to perform like a biological compiler.


