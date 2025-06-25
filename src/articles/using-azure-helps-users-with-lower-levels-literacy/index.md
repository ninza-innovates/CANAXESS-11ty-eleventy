---
tags: ["posts"]
title: Using Azure to help users with lower levels of literacy
subtitle: Immersive reader is a Microsoft Azure Cognitive Services tool to help a user's ability to understand content on a page.
showDate: true
date: 2020-08-13
dateFormat: 13 August 2020
---

***Update 20/10/2021 Since publishing the original post the Immersive Reader demo has been updated with a [TailwindCSS UI](https://github.com/canaxess/tailwindcss-ui-immersive-reader) and fixed text selection**

## Quick Summary
Immersive reader is a Microsoft Azure cognitive services tool to help a user's ability to understand content on a page.

If complex web content can't be rewritten immersive reader can be a helpful addition to allow users with dyslexia, ADHD and autism to understand complex terms and conform to WCAG 2.1 AAA success criteria.

It's a single API call which displays a dialog containing the page content and a range of reading options including highlighting nouns, verbs and adjectives.

Integration with Boardmaker's picture dictionary provides augmentative and alternative communication (AAC) capability to support users who have difficulty with verbal communication.

**[Demo](https://tailwindcss-ui-immersive-reader.netlify.app/)**

<hr>

<h2 id="webpage-legalese">Webpage legalese <a class="header-anchor" href="#webpage-legalese">#</a></h2>

There are often situations where creating content in an organisation is at the mercy of the legal department. 

All the good intentions of creating an accessible application can be undone with the insertion of large and difficult to read legalese describing the user's rights and obligations and the organisations limits of liability amongst other things. 

You have probably seen it with the **terms and conditions for Apple iTunes which stretch to a whopping 19 A4 pages and close to eight thousand words!** 

Only the most diligent give it anything more than a cursory glance, and if users have lower levels of literacy understanding the content becomes increasingly difficult.

<h2 id="immersive-reader">Immersive Reader <a class="header-anchor" href="#immersive-reader">#</a></h2>

I've been researching cloud technology accessibility tools and Microsoft Azure is previewing a new addition to their suite of cognitive service tools called immersive reader. 

This is a tool which can be used to enhance a user's ability to understand content on a page which can be particularly helpful for users with dyslexia, ADHD and autism. 

<div class="image image--border">
<figure>
<img src="immersive-reader.png" alt="" width="100%">
<figcaption>The open Immersive Reader dialog</figcaption>
</figure>
</div>

It's a single API call which displays a dialog containing the page content and a range of reading options. 

Understanding of grammar can be enhance with highlighting nouns, verbs, and adjectives whilst the tool has the capability to read aloud the content. 

There are also several options for reducing the viewable number of lines, increasing the font size, and selecting one of three fonts all to assist a user's ability to understand content their own way.

<h2 id="aac-support">AAC Support <a class="header-anchor" href="#aac-support">#</a></h2>

What is particularly impressive is the integration with [Boardmaker's picture dictionary](https://goboardmaker.com/pages/picture-communication-symbols), an augmentative and alternative communication (AAC) system which can be used to enhance and support a user's communication. 

Picture dictionary is a collection of symbols and icons paired with a word for users who have difficulty communicating verbally, with the symbols and pictures used to describe the situation. 

<div class="image image--border">
<figure>
<img src="boardmaker.png" alt="" width="100%">
<figcaption>Boardmaker's picture dictionary describing the word 'enhancing' visually</figcaption>
</figure>
</div>

Selecting any word within the immersive reader tool displays an image of that word, along with the ability for the word to be read aloud. This increases the number of ways content can be understood by more users.

<h2 id="implementation">Implementation <a class="header-anchor" href="#implementation">#</a></h2>

The typical implementation of immersive reader onto a web page is with a button adjacent to a block of content. Clicking the immersive reader button will trigger the tool to use the content which has been specified in the Javascript. 

However, I wanted to create something a little more contextual, acknowledging users may not want all content loaded into immersive reader and instead allow sentences, sections of sentences or even individual words to be loaded.

The [demo](https://canaxess-immersive-reader.herokuapp.com/) uses Apple iTunes terms and conditions for demonstration purposes. The `getSelection()` Javascript method is used to select any highlighted text either via the keyboard or mouse. 

```javascript
if (window.getSelection)
{
    text = window.getSelection().toString();
}
```

If no text is highlighted rudimentary error handling is added where the whole container is specified.

```javascript
if(text == "")
{
    text=$('#default').text();
}
return text;
```

The immersive reader is then triggered from a button click, equally remappable keyboard controls can be used.

```javascript
$('button').click(function(){
    handleLaunchImmersiveReader();
});
```

<h2 id="reach-more-wcag-21-aaa-sc">Reach more WCAG 2.1 SC <a class="header-anchor" href="#reach-more-wcag-21-aaa-sc">#</a></h2>

Using the immersive reader can become a way to allow your applications to pass Web Content Accessibility Guidelines (WCAG 2.1) success criteria at greater levels, addressing [3.1.3 Unusual Words](https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html), [3.1.5 Reading Level](https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html) and [3.1.6 Pronunciation](https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html) all of which are at level AAA. 

The traditional approach of creating a glossary of terms and adding in page anchors requires substantial extra resourcing to implement and maintain. 

If the content changed in either the glossary or page broken links could begin to creep in. The immersive reader tool can overcome this by being a relatively straightforward addition to the page.

<h2 id="existing-wcag-21-aa-support">Existing WCAG 2.1 AA support <a class="header-anchor" href="#existing-wcag-21-aa-support">#</a></h2>

In addition, the tool supports existing WCAG 2.1 criteria including keyboard support and accessible names for controls.

<h2 id="product-evaluation">Product evaluation <a class="header-anchor" href="#product-evaluation">#</a></h2>

Katherine McKnight of [RTI](https://www.rti.org/) evaluated immersive reader as part of Microsoft's learning tools to determine if it is useful for enhancing reading and writing. 

Research was carried out with several teachers from Bellevue School District in Bellevue, Washington USA with research indicating the tool is a _useful addition for reading and writing for elementary, middle and high school students, who range from struggling to above grade-level in their skills._

Special education teachers could see how the tool could be used to help students and adapt the tool for specific students with specific needs.

> I have students who have difficulty in both reading and writing…Once I used the tools, I could see how to train students who have other learning disabilities to use them and I could see how to adapt each individual tool for specific purposes for specific students…I did initial trainings and then followed up … to make sure they were practicing on a weekly basis. Then I alerted parents to the tool so that they could support it at home and help kids troubleshoot it and use it independently

However, a special education teacher acknowledges difficulty getting neurodiverse students to become comfortable with using the tool.

> It is NOT easy to get Special Ed students to use technology. Often times these are students who struggle with technology use, both the appropriateness—i.e. being on task with it, not choosing to do something they shouldn’t be doing in class—but also being able to navigate; they really struggle with that. While Learning Tools is really easy to understand…the reality is … it was outside of the norm of how they used their technology and because a lot of them just struggle with being able to remember how to access it…Also the voices…a lot of my students have social-emotional challenges and so…things that a neurotypical person could get over, like ‘this voice sounds a little funny,’ they couldn’t get over that. It was really challenging for them, so they wouldn’t listen to it

<h2 id="should-you-use-it">Should you use it? <a class="header-anchor" href="#should-you-use-it">#</a></h2>

If you can reduce the complexity of your content this is the first step and arguably the most achievable. 

However, sometimes particularly in large organisations or government departments legal disclaimers must be displayed and there's no way to avoid this. 

In these instances, immersive reader can be a good addition to a website to help users with a range literacy levels to understand your content. But as the research from RTI showed neurodiverse students had difficulty getting used to the voice of the tool. 

As a complementary learning aid, its use combined with other technologies including structuring existing web content to conform to WCAG 2.1 is promising, but some users will still experience difficulty and other levels of support need to be considered.

Immersive reader is currently in [preview](https://azure.microsoft.com/en-us/updates/public-preview-immersive-reader-an-azure-cognitive-service/) and has zone [availability](https://azure.microsoft.com/en-us/global-infrastructure/services/?products=cognitive-services&regions=all) on Australia's East Coast and several regions around the world.

<h2 id="resources">Resources <a class="header-anchor" href="#resources">#</a></h2>

* [Demo](https://tailwindcss-ui-immersive-reader.netlify.app/)
* [Code](https://github.com/canaxess/tailwindcss-ui-immersive-reader)
* Azure cognitive services [Immersive Reader](https://azure.microsoft.com/en-us/services/cognitive-services/immersive-reader/)
* [Immersive reader documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/?branch=release-preview-immersive-reader)
* [Levelling the playing field with Microsoft Learning Tools [PDF]](http://edudownloads.azureedge.net/msdownloads/Learning_Tools_research_study_BSD.pdf)

