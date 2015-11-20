---
layout: post
title:  "Configurator with a&nbsp;live preview of&nbsp;a&nbsp;personalised product in&nbsp;AngularJS"
date:   2015-11-18
categories:
tags: ['live preview', 'personalisation', 'colour picker', 'AngularJS'] 
permalink: live-preview-personalisation-configurator-angularjs
author: "Tadeusz Rychter"
---
**[DEMO](/demo-live-preview/)**

In a previous article I wrote about [mass-generation of personalised print products](/batch-generation-and-mass-personalisation-of-print-products). The next thing we wanted to achieve at that project was to introduce some level of self-service for our clients. The idea was to simply provide a website with two inputs – one for company’s logo and one (or two) for colours – and send them straight into our CRM.
  <!-- more -->
  
## User experience and plugins/libraries
That was supposed to be a small task with literally two inputs on a page. But how would an owner of, let’s say a barber shop, know the hex value of that pink in company’s logo? Luckily I got a little bit of room in a sprint with this task and decided to experiment.
 
An obvious choice for an interface to choose a colour is a colour picker. [Spectrum](https://bgrins.github.io/spectrum/) with its API and wide browser support seems to be the best colour picker out there. The only minor downside it has is a dependence on jQuery.
 
OK, so now the user could click on a preferred colour. What about the logo? Some drag & drop would be nice. With [DropzoneJS](http://www.dropzonejs.com/) it really is, both for an end-user and a developer.
 
If I’m already showing a preview of the uploaded logo with DropzoneJS, then maybe a user could just click a colour on it. In the age of HTML5 it’s only a matter of putting an image to a canvas element and some extra JS code.
 
Finally we’d like to put it all together and add a preview of a personalised product. I decided to use AngularJS to achieve this. The main reason for that was its two-way data binding.
 
## Product preview in real time 
There are generally two ways to dynamically change a colour of a picture in a browser. One option is to erase a colour from the picture in an image editing software leaving transparency. Then you put an element with CSS background of your choice behind that picture. The cons are: an effort to remove the colour in the first place, rectangular areas of the new colour which might overlap (although that’s fixable), using a raster image which isn’t going to look well when printed out.

Another solution is to use an SVG image of a product. At work we actually vectorised a photo of our product and then tweaked it a little bit. The thing is that all the colours are (ideally) going to be defined as fills or gradients. Then all you have to do is put it inline into your HTML and exchange these colours with the colour variables of your app. Think of something like <code class="language-markup">fill='&#123;&#123;clientsColour&#125;&#125;'</code> Using subtle gradients instead of solid fills gives a very natural look.
 
To complete the preview you could display a copy of the uploaded logo on the personalised product. In principle that’s simple with CSS3 transformations. The difficult part is to get the combination of rotations and perspective right. I believe I did it relatively well in the demo but you might notice it’s not perfect. It’s good to think of it when creating the picture of the product.
Instead of CSS3 one could use SVG transformations. Depending on a workflow it might be an easier way to achieve the perfect alignment.

## Sidenotes 
You can check the [DEMO](/demo-live-preview/) or the commented [source code at GitHub](https://github.com/TadeuszRychter/picker).
Mind you that it’s a demo version and might not have sufficient error handling etc.
For the handling of two colours I toggle two instances of a colour picker since I [couldn’t pull it off](http://stackoverflow.com/questions/30187527/dynamically-choosing-models-for-data-binding-using-a-jquery-plugin-via-a-direct) in a more elegant fashion. I also realise that fiddling with HTML in the controller is against best practices, but with plugins relying closely on each other that seems to be justified. Maybe somebody could propose better solutions to these problems in the comments.

## Summary
That’s one of the little projects that I’m very proud of. It shows how significant role frontend developers have. By putting some existing plugins and libraries together and duckt taping them with AngularJS I was able to quickly create a product. Event though it wasn’t expected from me, I delivered a solution that eventually became an important part of marketing strategy.
