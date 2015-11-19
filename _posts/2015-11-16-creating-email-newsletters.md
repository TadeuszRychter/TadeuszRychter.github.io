---
layout: post
title:  "Creating e-mail newsletters"
date:   2015-11-16
categories:
tags: e-mail newsletter template
permalink: creating-email-newsletters
author: "Tadeusz Rychter"
---
Below I present my insights regarding the technical site of creating a template for an e-mail newsletter. It's certainly not an exhaustive list. This subject is full of tiny, yet important details and tricks. However the few points below ought to give every frontend developer a head start.
<!-- more -->

## It's got to be responsive

Probably most of the recipients will open an e-mail [using their smartphones](https://litmus.com/blog/53-of-emails-opened-on-mobile-outlook-opens-decrease-33). Depending on your target group it might be a device from Apple. That would be great because iPhones and iPads support most of the CSS3. Take a look at a table from [Campaign Monitor](https://www.campaignmonitor.com/css/) or [Mailchimp](http://templates.mailchimp.com/resources/email-client-css-support/).
Using a defualt Android e-mail client also shouldn't be a problem. Sadly, it’s not that great with e.g. the Gmail client.

## Worse than browser wars
The next thing you’ll run into is that the support for media queries isn’t universal. Because you cannot inline them (which itself is a good practice in the realm of e-mails) they complicate your workflow even more.

You have to realise that you’ll be targeting more rendering engines (and their versions) than you do when creating a website. It’s not only Webkit and IE but also Word (sic!) and online clients with their own quirks. The least complicated and safest way is to go full ‘97 and make a layout using tables. Lots of tables.

## Tools
Nesting multiple tables is a tedious process that’s prone to errors. You really want to continuously and automatically validate your HTML code. That’s the job for the IDE of your choice.

Some e-mail clients strip the <code class="language-markup"><head></code> section out, so it makes sense to inline the stylesheets. There [are](http://inliner.cm/) quite [a few](http://templates.mailchimp.com/resources/inline-css/) online inliners as well as [Node.js apps](https://github.com/SLaks/Styliner).
If you have to work with already inlined CSS there’s also something for you. For example [this plugin](https://github.com/RebelMail/html-postcss) if you happen to fancy PostCSS.

## Use someone else’s code
It’s usually a good idea to jumpstart with already existing code. There’s a [boilerplate from Zurb](http://zurb.com/ink/docs.php) (they’re better known for the [Foundation framework](http://foundation.zurb.com/)). Even if you won’t like a design of a [paid template](http://themeforest.net/search?utf8=%E2%9C%93&term=&view=list&sort=&date=&category=marketing%2Femail-templates&tags[]=responsive&price_min=&price_max=&sales=&rating_min=) it might be a good way to learn some best practices and tricks.

I’d recommend building independent horizontal sections and stacking them on top of each other. That way it’ll be easier to modify the code. In the case of e-mail templates modifications are especially time consuming.

## Testing
Some of the premium templates are already tested with [Litmus](http://litmus.com/) to ensure consistent display in different e-mail clients. If you’re using Mailchimp then even with the cheapest paid plan you can use integrated service from Litmus. Beware that even they might not be offering tests on the client, that’s important to you, like Android 5 right now.

Aside from testing on different devices you ought to test your newsletter with the images not being displayed. Up to [60% of the recipients](http://www.exacttarget.com/blog/4-email-design-tips-to-drive-clicks/ "This number is from 2012...") won’t see any graphics unless they’ll explicitly enable them. Usage of the „alt” tag is a must. So is the correct sizing and choice of background colours (even if they are not „normally” visible).

Some e-mail clients will automatically show your images if you happen to be on the recipient’s contacts list, so it’s always a good idea to ask for it in the e-mail. That would also prevent the mailing from going into spam.

## Deployment
After you finish the template you’ll probably upload it to some service like Mailchimp or FreshMail so the folks from marketing could use it. The thing is that a WYSIWYG editor provided there might not be perfect. For example with the editor at CleverReach it was tricky to preserve style of the links after editing them. One had to do it in a specific, rather unintuitive way creating a demand for user support from my side.

It’s either that or you’ll have to add some <abbr title="E-mail Service Provider">ESP</abbr> specific [tags](http://kb.mailchimp.com/templates/code/getting-started-with-mailchimps-template-language#Editable-Sections "Mailchimp's template language") throughout your code. That’s of course providing that they are available.

## Summary
Creating a professional e-mail template is a surprisingly complex task. It really pays off to base it on some premium theme. If it’s going to be a recurring task, working out a good CSS workflow is unavoidable. So is testing. Lots of it.
  