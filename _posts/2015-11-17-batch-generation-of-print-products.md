---
layout: post
title:  "Batch generation and mass personalisation of&nbsp;print products"
date:   2015-11-17
categories:
tags: print batch personalisation InDesign 
permalink: batch-generation-and-mass-personalisation-of-print-products
author: "Tadeusz Rychter"
---
## *Part I – Adobe InDesign*
Back at my previous job we had this new project named [Meinungsmeister](https://www.meinungsmeister.de/). Among its key deliverables were print products like table stands or review forms. The idea was that we would personalise them for local businesses with their logos and colours. Then they would put printed products in their stores allowing the customers to write reviews that would be digitalised and published across the Internet.
 <!-- more -->
 
Initially a print shop would do for us not only the printing itself but also merge the provided data into the actual products. Unsurprisingly they were charging us extra for that. Even worse was, that the timing of it didn’t really suit our needs. We had to figure something out. The print shop gave us one limitation – they wanted to receive a specific version of a PDF file – the PDF/X-1a.
 
## Merging in InDesign
 After some research it looked like only some expensive software was able to produce the X-1a version of the PDF format. Those were enterprise-oriented server-side packages that would have to be integrated. The only hassle-free piece of software was the InDesign from Adobe. It has a [data merge capability](https://helpx.adobe.com/indesign/using/data-merge.html) and produces the desired PDF files <abbr title="Out Of The Box">OOTB</abbr>.
 
The only trick here is the right encoding of the CSV input file. It has to be UTF-16 little-endian. If you’re using Windows I’d recommend to use [BabelPad](http://www.babelstone.co.uk/Software/BabelPad.html) for the conversion.
 
## Post-processing in InDesign
Not everyone knows that it’s possible to code in InDesign using AppleScript, JavaScript or VBScript. Adobe provides some [manuals about scripting](http://www.adobe.com/devnet/indesign/documentation.html). The more complicated part is the [InDesign’s Document Object Model](http://cssdk.s3-website-us-east-1.amazonaws.com/sdk/1.0/docs/WebHelp/app_notes/id_obj_model.htm). One could say that there are de facto 2 DOMs – one model for pages and one for layers. These models differ when it comes to properties and methods. Unfortunately AFAIK Adobe doesn’t provide a handy manual for DOM. Luckily Jongware [extracted it](http://www.jongware.com/idjshelp.html) from older versions of InDesign so it’s best to use the [object model documentation of the InDesign CS6](http://jongware.mit.edu/idcs6js/) (sic!).
 
## The job itself
 What you do during the merging is that you put texts and images into an InDesign document (InDesign might also generate QR codes for you). You can programmatically access the content of each text frame (text field), which means that you can put some variables in your source CSV file. For example a color, dimensions, amount of copies – all you need to personalise and prepare your order.
A little bit trickier was to automatically create multiple variants of a product. I chose to:

* add a variable for a variant’s ID,
* draw all the variants in one InDesign template,
* do the merging
* write a conditional statement for post processing where I’d delete all the unnecessary variants
 
It’s possible to integrate some really complex stuff or make something small you wouldn’t be able to peform manually. Let’s say that your clients provide you with colours which you use as a text background. By default the text is black.  If somebody provides you with a dark colour the text will become illegible. With a [few lines of code to check the perceived brightness](http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color) you can change the text colour to white when dealing with dark background.
 
## Duration
 In our case the average total time per page was around 4-6 seconds for a product with over a dozen of fields and few steps of personalisation. That might look innocent but eventually proved to be too long for us. If you have e.g. 2 pages per product and 20 clients ordering 30 items each that makes the total of 1200 pages. That’s 2 hours. Actually it was more than that because with the increasing number of pages the average duration per page would also rise. So think of up to a working day per order. That’s providing there wouldn’t be any errors e.g. in CSV file forcing you to generate everything again. In the end I devised another process using Inkscape that I’ll describe in a follow-up article.
 
However, if you don’t expect that much throughput then you’re good to go. I’d also recommend using InDesign for the prototype phase because it’s easy to iterate quickly. Designers might work really close with a developer making lots of changes as far as they won’t modify identifiers of the elements (like names of the text frames you’d access with <code class="language-markup">txtF.itemByName</code>).
 
## Tips
 
To increase performance of the post-processing disable showing changes to the document using
<code class="language-markup">app.scriptPreferences.enableRedraw = false ;</code>
before you run the main code.
 
Things might not be what you think they are and deceive you. Why doesn’t that black element change its colour like it’s supposed to? What black do you see? The K from the CMYK or maybe something else? Is that text you’re trying to edit a text in a text frame or a polygon? Sadly there is no comfortable console or inspector like in a web browser. Sometimes you have to click through the document and understand what’s really going on.