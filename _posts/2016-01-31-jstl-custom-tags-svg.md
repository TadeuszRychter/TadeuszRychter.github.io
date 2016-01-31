---
layout: post
title:  "Using JSTL custom tags to place SVGs and organise your JSP templates"
date:   2016-01-31
categories:
tags: JSTL JSP 
permalink: jstl-custom-tags-organise-jsp-code
author: "Tadeusz Rychter"
---
One of the problems I’ve faced dealing with creating JSP templates is that they easily get out of hand. Sure, you can use includes to divide your template into multiple files but that still might look cumbersome.
<!-- more -->

Luckily JSTL provides an option of creating own tags. They can have some logic in them and their usage is very concise.
To create your own JSTL tag make a new file with a .tag extension e.g. <code class="language-markup">textScore.tag</code>

<pre class="line-numbers"><code class="language-markup">&lt;%@ tag body-content=&quot;empty&quot; %&gt; 
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt; 
&lt;%@ attribute name=&quot;score&quot; rtexprvalue=&quot;true&quot; required=&quot;true&quot; type=&quot;java.lang.Float&quot; %&gt; 

&lt;c:if test=&quot;${score &gt;= 3}&quot;&gt;
    &lt;c:out value=&quot;Good&quot;/&gt;
&lt;/c:if&gt;
&lt;c:if test=&quot;${score &lt; 3}&quot;&gt;
    &lt;c:out value=&quot;Bad&quot;/&gt;
&lt;/c:if&gt;</code></pre>

Where the "score" is a variable you’d normally use all over your template. Then in the main template file you have to declare that you’ll be using custom tags, point to their location and specify their prefix:

<pre class="line-numbers"><code class="language-markup">&lt;%@ taglib prefix=&quot;spring&quot; uri=&quot;http://www.springframework.org/tags&quot;%&gt;
&lt;%@ taglib prefix=&quot;myTag&quot; tagdir=&quot;/WEB-INF/tags/&quot;%&gt;</code></pre>

Then in the body of your template you use your tag like this (notice the name of the tag's file after the prefix):

<pre class="line-numbers"><code class="language-markup">&lt;myTag:textScore score=&quot;${rating.score}&quot; /&gt;</code></pre>

The same goes for SVG images. Create a <code class="language-markup">starsScore.tag</code>.

<pre class="line-numbers"><code class="language-markup">&lt;%@ tag body-content=&quot;empty&quot; %&gt; 
&lt;%@ taglib prefix=&quot;c&quot;  uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt; 
&lt;%@ attribute name=&quot;score&quot; rtexprvalue=&quot;true&quot; required=&quot;true&quot; type=&quot;java.lang.Float&quot; %&gt; 

&lt;c:set var='full' scope='page' value='&lt;img alt=&quot;full star&quot; src=&quot;/img/fullStar.svg&quot; /&gt; ' /&gt;
&lt;c:if test=&quot;${score &gt; 4.5}&quot;&gt;
    &lt;c:out value=&quot;${full}${full}${full}${full}${full}&quot; escapeXml=&quot;false&quot;/&gt;
&lt;/c:if&gt;</code></pre>

This way you can have one custom tag to use all over your website for placing ratings represented as SVG stars. The code above would insert five of them for a score of more than 4,5. 

You’d invoke it with <code class="language-markup">&lt;myTag:starsScore score =&quot;${rating.score}&quot; /&gt;</code>
<br/>If you ever want to change your graphics or the logic behind scoring e.g. by using halves then you only have to edit your custom tag.