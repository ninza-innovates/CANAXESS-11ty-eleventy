---
tags: ["posts"]
title: Headings the right way
subtitle: Incorrectly adding headings makes it's difficult for screen reader users to understand the page structure. Headings function as the document hierarchy - the hidden skeleton of a webpage.
showDate: true
date: 2018-10-07
dateFormat: 7 October 2018
---

It's easy to misuse headings when structuring a page. Incorrectly adding headings makes it's difficult for screen reader users to understand the page structure. Headings function as the document hierarchy - the hidden skeleton of a webpage.

This makes it easier for screen reader users to understand the page.

In the early days of web design, heading styles were used based on how they looked, not their structure. Instead of altering heading styles with CSS to make each level different. A smaller heading depth would instead be chosen.

**Although HTML is very forgiving this isn’t correct, and it's just plain bad.**

## Use a good structure
Assistive technology announces the level of a heading for users to understand. This helps users to create a mental model of the content. If we don’t nest headings based on their depth it can be difficult to understand the content.

It may look correct with each heading having its own styling. But if you're unable to see the effect visually you instead rely on the heading elements themselves.

## The benefits of heading level 
An assistive technology user can understand the page because of the semantic elements used. Using the correct heading levels provides a solid skeleton core to the webpage. This makes the document hierarchy easier to understand.

Follow the principle to lay out headings when writing a document in a word processor. Begin with a master heading level and set this as a H1, this is only ever used once in the page.

This serves as the documents main heading, the one which all other headings sit under.

Follow this by using one or more H2 headings, which are child elements to the master H1 heading. Followed by one or more H3 headings, H4 heading and H5 headings.

The child heading element is part of the preceding parent heading element. This establishes a clear logical relationship.

```html
<h1>Master heading</h1>
<h2>Level 2 Subheading (child of master heading)</h2>
<h3>Level 3 subheading (child of level 2 subheading)</h3>
<h4>Level 4 subheading (child of level 3 subheading)</h4>
```

## The outlining algorithm problem
The HTML5 specification allows H1 heading elements throughout the page within different regions. The main page could have a H1, an aside region could have a H1, and a footer could have a H1.

The theory is many H1 heading elements can be used as they're defined in different regions.

However, no browser or assistive technology has successfully implemented the document outlining algorithm. Whilst the technique is technically correct it isn't implemented and cannot be relied upon.  

> There are currently no known native implementations of the outline algorithm in graphical browsers or assistive technology user agents, although the algorithm is implemented in other software such as conformance checkers and browser extensions. Therefore, the outline algorithm cannot be relied upon to convey document structure to users. Authors should use heading rank (h1-h6) to convey document structure.
[HTML 5.2 W3C Recommendation](https://www.w3.org/TR/html52/sections.html#creating-an-outline)

Always ensure your heading depths follow the pattern of one H1 heading, followed by one or more H2, H3 and H4 heading levels. All heading levels should follow sequentially, and don't skip levels.

## Use as many headings as you need
Even though there are several depths of headings you don’t have to use them all. Some of your pages may only need a H1 heading level, or a H1 followed by two H2 heading levels and that’s ok too.

If you think some of your content may be too long, that’s a good indicator for adding another heading level to break it down.

## Headings are not subtitles
Don’t use a lower heading level as a subtitle as this is wrong. A subtitle isn’t separate to the main heading item. It's only used to provide a more detailed description for the heading.

Therefore enclose it in the heading level and style accordingly. Unless new content is introduced, don’t use headings for subtitles.

```html
<h2>This is a level 2 heading
<span class="subtitle">This is the subtitle for the heading</span>
</h2>
```


> Everyone keeps getting this wrong. Subtitles are not headings! They don't introduce new sections of content! #bootstrap
[Heydon Pickering 24th May 2018 (Twitter)](https://twitter.com/heydonworks/status/999582012582359040)

## Summary
* Structure your page using sequential heading elements
* Use as many headings as required
* Don’t rely on the HTML5 heading outline as it isn’t implemented