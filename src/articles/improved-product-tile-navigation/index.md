---
tags: ["posts"]
title: "Improving product tile navigation using landmarks"
subtitle: According to WebAIM's latest screen reader survey, after years in decline, the use of landmarks is increasing. But can these seldom used elements become more useful?. 
showDate: true
date: 2024-05-20
dateFormat: 20 May 2024
customImage: false
---

<div class="videoWrapper">	
<iframe src="https://www.youtube.com/embed/0oWl9zFDr88?si=G2hEPQF6uDpl8mYg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Embedded youtube video"></iframe>
</div>

## Transcript

Most sites use landmark regions in some capacity, these are HTML elements that act as containers for sections of the page content. 

### Common site landmarks

There could be a footer positioned at the bottom of the page, header at the top, main content for of course main content, and these all segment the page into a defined region for screen reader users to navigate to.

Depending on the screen reader it may list all landmark regions, iterate through them individually or jump straight to that region. 

### WebAIM's most recent screen reader survey results

WebAIM’s most recent screen reader survey identified landmark usage which had for several years been on the decline begin to climb with the frequent usage up to 31 % of the users surveyed.

And it’s this navigation option and the increase in users navigating with landmarks which shows we can begin to apply them more effectively for describing product tiles.

### Typical makeup of a product tile

Typically, product tiles on a lot of ecommerce sites contain a sectioning element with a heading, product image along with some text. 

But these product tiles are often complex and crammed with pricing information, specials, bought before indicators, buy now, ½ price all being conveyed visually.

This isn’t an equivalent experience for a screen reader user.

### How a screen reader user may find product specials

A screen reader user who wants to find products with some sort of specials indicator, would have to navigate through all product tiles individually to read that information. And this is either found further down in the product tile or in the image. 

Or what’s most likely filter the page results. First find the filter options, apply a filter, wait for the page to reload and if they’re lucky keyboard focus remains where it was before the load. It all takes a screen reader user much more effort.

The way the product tile container is built is problematic. They all follow the same format. It’s generally comprised of a generic section element, or div, which provides no meaning. 

But the scaffolding is in place to enhance this and provide a way to navigate to product items quicker.

If we think about it conceptually, it’s the product tile container that needs to provide additional context for the entire contents. 

If a specials indicator is within the component it’s more effort to understand. Since the user must first navigate the component to understand the text and find out it’s a special product. 

I think we can do far far better.

### Replace the generic section element

Firstly, replace the generic section element with a more appropriate semantic landmark element. 

### Choose the article element

Choose the article element as its meaning more accurately describes the content. As the HTML specification describes an article element as representing “a self-contained composition which could be reused elsewhere”. 

And this is what product tiles are, reusable web content. They not just found on product listing pages they’re found on other pages, the product tile component is reused a lot.

### Now the article element is anonymous

The tweak is a good start, but whilst its now semantically appropriate and in theory identifiable in a screen reader it's anonymous. The product tiles are marked up as articles which means we’ve introduced the landmark equivalent of click here. 

How does a user know what landmark leads to which product tile, what’s important about the product tile, the landmark of course needs a label!

### Introduce aria labelling to the article element

Next apply aria labelling to the article element. 

We could use the aria-label as its quick to add to the article element but is a little bit messy. We’re having to duplicate the existing text within the product tile making sure this aria-label text is the same as the text within the product tile and when coding it all it can get out of synch.

### Use aria-labelledby to label the article element

Instead use aria-labelledby and reference the product name and specials indicator by ID. 

The product tile now has a semantically appropriate element and a label to highlight those items which are specials.

The article element is used because the content can be reused elsewhere on the site and we’ve called out the type of special the product offers with aria-labelledby referencing existing text so no messy duplication efforts. 

This is good!

### Now exposed by the accessibility tree

This is now exposed by the accessibility tree, the element is an article and has been labelled with the product tile heading and the special indicator “down down discount” and means a screen reader user navigating through landmarks can understand which products are on special solely from the landmark text. 

It provides another way to navigate product tile information without requiring a user to filter or manually navigate product tiles to find items on special. It’s making it easier for the user.

At this point you might be thinking let’s provide every product tile with additional detail, aria-labelledby everything! but avoid this. 

Named landmarks can add a significant amount of screen reader noise. If there are 20 products each marked up with an article and label then the positive outcome you had from labelling key products with special indicators has now evaporated. 

Follow the principle less is more.

### Reserve the technique for only special products

Instead reserve the technique for only those elements which have some special indicator attached to them. They might be specials, buy now, or bought before. 

Reserve the technique for those product tiles which benefit from being highlighted.

### How well is the technique supported?

This all sounds like a worthy enhancement to make product tiles more descriptive semantically, but the elephant in the room is compatibility. 

How well is it supported by screen readers. 

This is where it gets interesting. In their default configuration

* NVDA doesn’t announce the article element or list it.
* JAWS lists the articles and infers the label from the article contents but does use the aria labelling if it exists.
* VoiceOver on iOS lists the article if a rotor setting for articles is turned on but ignores the aria labelling.
* and VoiceOver on MacOS lists all articles, and only provides the custom label for those articles which have it.

Just because the screen readers support is currently patchy it doesn’t mean don’t use the technique. Building with semantic HTML means when technology supports it, it’s used.

It’s about choice, it’s making it easier for a user to find relevant product information faster using other navigation mechanisms if that’s their preferred way. 

Aria labelling combined with semantically appropriate landmark regions are a powerful way to call out important information for selected product tiles. 

But consider this technique as falling into the goldilocks zone, too little landmark usage is unhelpful as is too much, using aria labelling and articles appropriately means it becomes just right and can become an additional help to the user.

Checkout the full code at [codepen.io/canaxess](https://codepen.io/canaxess/pen/rNgBZwO) and follow the link to Improving product tile navigation using landmarks and aria labelling.

I’m Ross I run [CANAXESS](https://www.canaxess.com.au), if you’re interested in working together boosting your accessibility efforts drop me a line at [ross.mullen@canaxess.com.au](mailto:ross.mullen@canaxess.com.au).

## Resources

- [Improving product tile navigation using landmarks and aria labelling](https://codepen.io/canaxess/pen/rNgBZwO)