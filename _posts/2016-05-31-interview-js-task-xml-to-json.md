---
layout: post
title:  "A job interview JavaScript task – parsing XML to JSON"
date:   2016-05-31
categories:
tags: XML JSON interview
permalink: interview-js-task-xml-to-json
author: "Tadeusz Rychter"
---
Some time ago I was presented with the following task: create in JSON a list of all the 2nd level nodes from an XML input and display the number of children for each such node. It sounds simple but it’s trickier than instantiating the <code class="language-markup">DOMParser</code> and then using <code class="language-markup">JSON.parse </code> ([read about them at MDN]( https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML)).
<!-- more -->

If your input is:

<pre class="line-numbers"><code class="language-markup">&lt;a&gt;
  &lt;b&gt;
    &lt;d&gt;&lt;/d&gt;
  &lt;/b&gt;
  &lt;c&gt;
    &lt;d&gt;&lt;/d&gt;
  &lt;/c&gt;
&lt;/a&gt;</code></pre>

Then there are two 2nd level nodes – <code class="language-markup">&lt;d&gt;&lt;/d&gt;</code> and <code class="language-markup">&lt;d&gt;&lt;/d&gt;</code>. These nodes have the same names but are different nodes of different parents and might have different numbers of children.

However if you use <code class="language-markup">JSON.parse('{"d" : "0", "d" : "0"}');</code> then the result is <code class="language-markup">Object { d="0"}</code>. That's just not correct. [Duplicate keys are not disallowed in JSON]( http://stackoverflow.com/questions/21832701/does-json-syntax-allow-duplicate-keys-in-an-object) (there’s a reference to the spec there). A [JSON validator]( https://jsonformatter.curiousconcept.com/) says the same. The duplicated keys are valid, although there’s a warning raised. 

Obviously not everything that’s not forbidden should be done. It’s crucial to have a common understanding (and a way of handling) of such edge cases. I thought that this was the catch of this task and solved it by putting the JSON together by myself and writing a comment.

As it often is the reviewer overlooked/disregarded the comment and claimed that I made an error outputting duplicated keys anyway :).