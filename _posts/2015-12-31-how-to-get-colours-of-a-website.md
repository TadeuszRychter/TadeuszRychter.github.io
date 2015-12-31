---
layout: post
title:  "How to get colours of a website?"
date:   2015-12-31
categories:
tags: ['colour picker'] 
permalink: how-to-get-colours-of-a-website
author: "Tadeusz Rychter"
---
This one is going to be short and simple (even though it would make a nice extension to the [configurator from the previous article](http://blog.fullystacked.it/live-preview-personalisation-configurator-angularjs/)). 

First, we’ll need a screenshot of a website.
<!-- more -->
  
## Manet
[Manet is a cool Node.js app](https://github.com/vbauer/manet) by Vladislav Bauer. To get it up and running you only have to:

1.	Install a headless web browser <code class="language-markup">npm install -g phantomjs</code>
2.	Install Manet <code class="language-markup">npm install -g manet</code>
3.	Run Manet <code class="language-markup">manet</code>

If everything goes well you should see at http://0.0.0.0:8891 the same [UI as at the example deploy](https://manet.herokuapp.com/) by Bauer himself.

<div class="alert-info">
	<div class="line1"></div>
	<div class="line2"></div>
	<h3>Sidenote</h3>
	<p>Instead of PhantomJS (WebKit) you could use an almost-headless browser (SlimerJS - Gecko) as described <a href="https://github.com/vbauer/manet#slimerjs">in Manet’s docs</a>.</p>
</div>

## Generating the colour palette
OK, so now I’m going to create my own website where some client-side JavaScript will try to find the dominant colours of another website. As an example I'll use the screenshot (which I'll create using Manet and embed on my website) of T-Mobile's website.
 
Of course it’s also possible to achieve the same server-side with Node.js.

I’ll have to run Manet with <abbr title="Cross-origin resource sharing">CORS</abbr> option <code class="language-markup">manet --cors</code>, because my website and Manet are going to be on different ports and that’s an example of violating [the same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy).

I’m not going to discuss the whole [code which is available on GitHub](https://github.com/TadeuszRychter/website-colours).
 
I’ve used [Color Thief by Lokesh Dhakar](http://lokeshdhakar.com/projects/color-thief/). The only downside it has, is that it may return a different number of colours than you actually wish in the settings. As an alternative one can use e.g. [Vibrant.js by Jari Zwarts](http://jariz.github.io/vibrant.js/).

One important thing is the line <code class="language-markup">img.crossOrigin = "Anonymous";</code>
Without it the [browser wouldn’t let Color Thief grab the colours](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-crossorigin) from the screenshot.

Also please remember to set the URL of your own instance of Manet at <code class="language-markup">var src = "http://192.168.0.12:8891/?url="+url;</code> 

The end result should look like on the picture below:
![alt text](http://blog.fullystacked.it/images/colours.png "Colour palette generated from a website")