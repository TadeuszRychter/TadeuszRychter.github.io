---
layout: post
title:  "How not to write CSS?"
date:   2016-02-29
categories:
tags: CSS
permalink: how-not-to-write-css
author: "Tadeusz Rychter"
---
In this article I’m going to show some CSS anti-examples, explain them and gradually improve the code.
<!-- more -->

Let’s say that we’re creating a widget. It’s just a div with a button – an anchor – in it. How could we style it?

<pre class="line-numbers"><code class="language-css">#widget {
/*  container specific rules */
}
#widget a {
  /* button specific rules */
}</code></pre>

It’d do the job, but it’s bad for a few reasons.

1.	Performance. Even though the browsers are very fast with the selectors nowadays it’s good to remember that they read them right to left. In this specific case it means that a browser would search through all the links on the website checking their parents. If you have thousands of links on your website and overuse this pattern making it even more complex it might catch on to you.
2.	Uniqueness. What if you’re going to have another similar widget some day? Will you duplicate some parts of the code? And then again and again? It’s better to use classes because you can have many of them on your site.
3.	Greed. Style sheets have “cascade” in the name for a reason. Using the code above you’ll set e.g. the font colour of all the links in the widget. So if you ever add a paragraph with some explanations next to that button you’ll most likely have to reset colours of the links in it. Actually you’ll have to do it for every single link (in the widget) that you don’t want to look like the button.

Now we know that classes are better than IDs and it’s better not to style bare HTML tags, so we could write something like that:

<pre class="line-numbers"><code class="language-css">.widget {}
.button {}</code></pre>

Unfortunately that’s still pretty bad.
When it comes to the CSS there is only one, global scope. The rules declared later on in the document overwrite the previous ones. How many buttons are you going to have on your page? Probably plenty. Will you always go back in the sources and change the lines you need? Maybe you will. 

What if other developers come up with a class name just like yours and use it without checking if it already exists? They may not even notice that they’ll break your code.
What if you want to have buttons in one widget different than in another? Would you use <code class="language-css">.button-widget2 {}</code> or nest it like <code class="language-css">.widget2 .button {}</code>? Either way it’s hard to reuse something like that.

We can always use multiple classes. Let’s take a look at the following:

<pre class="line-numbers"><code class="language-css">.button {}
.button.big {}</code></pre>

It’s all fine until somebody uses the <code class="language-css">.big {}</code> alone and gives it i.e. an underline messing with all the stuff you’ve made. That’s why global modifiers are bad. One slip (or import from some library/framework) and it’s gone. Try to find such stuff if you work on something big and don’t have automatic tests for visual regressions.

What you really want to do is to follow an established CSS methodology like [BEM](https://en.bem.info/method/key-concepts/) or [SMACSS](https://smacss.com/) and try to write independent components/modules.

In our case that would result in three different classes:

<pre class="line-numbers"><code class="language-css">.widget {}
.widget__button {}
.widget__button--important {}</code></pre>

It’s always a good idea to put some meaning into a class name rather than a specific value. What if your <code class="language-css">.widget__button—-red {}</code> ought to be green when clicked or grey when disabled? Small things like that lead to misunderstandings and extra work.

I hope you could see that writing CSS that works is very different than creating something maintainable, future-proof and friendly to the developers.













