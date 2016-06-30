---
layout: post
title:  "Debugging CSS"
date:   2016-06-30
categories:
tags: CSS debugging
permalink: debugging-css
author: "Tadeusz Rychter"
---
When it comes to debugging in web browser developers almost always think of the JavaScript, console.logs and breakpoints. That’s pretty straightforward, unlike trying to figure out what went wrong in a complex layout.
<!-- more -->

Speaking of console.logs, a browser might give plenty of hints regarding CSS.

![alt text](http://blog.fullystacked.it/images/console-css.png "CSS warnings and errors in browser's console")

As you can see there are many false-positives stemming from unsupported selectors, properties and vendor prefixes. Those might be helpful at times (when trying to figure out discrepancies between the browsers), but usually won’t help at finding out why some elements are misplaced.

Luckily, there’s a tool that does a good job at it. Let’s take a look at the [Pesticide](http://pesticide.io/).

![alt text](http://blog.fullystacked.it/images/pesticide.png "An example of using Pesticide")

Pesticide is a peculiar stylesheet. It gives a colourful 1px outline to each element on the page. An outline doesn’t change the size of an element like a border would. As a result we can see how the elements actually behave.

The thing is that generally the boxes we see should not overlap. If they do, it most likely means one of the few things: 

* an element is out of the document flow (because of floats or absolute/fixed position) 
* funny margins (especially negative ones) 
* incorrect line-height 

Issues listed above are not necessarily errors (especially being out of document flow), but might lead to complex situations. Pesticide helps to spot them and investigate closer.

Just like in the case of console.logs there might be “false positives”. As you can see on the screenshot above, the layout is perfectly well even though the “Add-ons” overlaps with the menu below it.

Not only the overlaps are red flags. You can see that there are vertical, thicker (2px) lines here and there, for example above the “Not yet rated”. Most of the times that’s a result of an empty element. Depending on other properties such an element might cause others to e.g. move to another row.

Also you should be careful with every container that’s much wider than the content inside of it. If it’s not a block element then you probably have a problem. 

I hope you’ll give Pesticide a try. For the convenience it’s available as an extension to most of the major browsers:

* [Chrome](https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh?hl=en-US)   
* [Firefox](https://addons.mozilla.org/pl/firefox/addon/pesticide/)   
* [Safari](https://extensions.apple.com/details/?id=com.paulmolluzzo.safari.pesticideforsafari-62EHEH25U5) 
