---
layout: post
title:  "WYSIWYG approach to frontend prototypes"
date:   2016-04-30
categories:
tags: WYSIWYG prototyping Bootstrap Pinegrow
permalink: wysiwyg-frontend-prototypes
author: "Tadeusz Rychter"
---
Starting from scratch feels liberating, but when there are many stakeholders involved, different expectations and poor communication may kill the project. What if everyone could provide input in the same form and see the same outcome?
<!-- more -->

Many times I’ve felt that being able to create precise pictures of what I had in mind would have saved a whole lot of time and trouble. Actually that’s not entirely true, because a client/co-worker would have to respond in the same manner, so we could really achieve a mutual understanding.

That’s rarely possible, so we’re using crutches (i.e. wireframing tools) and multiple iterations. That produces results, but obviously costs money. Usually lots of it. Each iteration might involve many people or even groups of them: designers, usability/UX specialists, business analysts and developers. If a client or one of the managers likes micro-managing then it gets even more complex.

Have you ever heard *“I imagined it differently, it must be changed”*? That’s what you get for using schematic gray boxes and dummy texts. People’s imaginations differ and that’s going to lead to problems.

The thing is that everyone uses different tools. Designers have graphic editors they’ve mastered, analysts and specialists move their rectangles in wireframing apps, developers move stuff around with CSS and the management creates doodles that make three year olds look like professionals. In the end we resort to apps that allow us to write post-it-like comments on static images.

*“Okay Mr Communication, then what’s your big idea for prototypes?”* you might ask. *“What’s that new incarnation of the FrontPage you’re trying to pitch us?”*

Well, it’s HTML components. In the sense of those from the Twitter’s Bootstrap. And [Pinegrow](http://pinegrow.com/).

Pinegrow is [a feature-rich, multi-platform app](http://pinegrow.com/#features) that lets you drag and drop components. Sounds simple, but just download the 7-day trial and see how well it’s made.

You can buy a premium Bootstrap Theme and import it to the Pinegrow. The idea behind buying a premium theme is to start with a big set of ready elements that are as close as possible to those that you need in your project. Then you choose those that you need, add them to your collection of snippets and just use. Look at the screenshots below. I did exactly that with the information badge from [the Inspinia theme](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S).

![alt text](http://blog.fullystacked.it/images/pinegrow-add-snippet.png "Create a snippet in Pinegrow")

![alt text](http://blog.fullystacked.it/images/pinegrow-adding-from-collection.png "Use a snippet from collection in Pinegrow")

It’s very easy to not only place the components, but also to edit them. 

![alt text](http://blog.fullystacked.it/images/pinegrow-change-colour.png "Pinegrow edit a component")

Do you already see how each of the stakeholders can go beyond simply (yet clearly!) expressing oneself and actually modify something? Since it’s all code it can be easily versioned.

Since it’s all code you actually end up with much more than a design at the end of the process. You have a functioning product. Well, at least the frontend part of it. It might be bloated up a little bit (Bootstrap isn’t tiny) and require some manual tweaks, but it’s right in front of you, waiting to be used.

That’s the process I’ve imagined some 1.5 years ago. Since then Pinegrow has only got more mature. You may want to [check out its competitors]( https://bootstrapbay.com/blog/bootstrap-editors/). Unfortunately I haven’t had the opportunity to use this approach in a real project. However I find it very promising and hope that somebody will finally go this path and be very successful at it.