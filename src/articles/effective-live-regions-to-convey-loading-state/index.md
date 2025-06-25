---
tags: ["posts"]
title: Effective live regions to convey the loading state of your web app
subtitle: How to use an aria live region effectively to continuously output the loading state of dynamic page content.
showDate: true
date: 2022-05-17
dateFormat: 17 May 2022
customImage: true
customImageURL: "twitter-card.png"
---

<div class="videoWrapper">	
<iframe src="https://www.youtube.com/embed/VUqdXCE94sI?controls=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Embedded youtube video"></iframe>
</div>

## Summary

Single Page Applications have a rocky history with web accessibility. Dynamically loading page content won't be outputted by assistive technology without using an aria live region. But just adding a live region alone isn't the end of the problem, any text to describe the loading needs to be continuously communicated for the length of time the loading is taking place. 

I'll show you a technique how to use an aria live region effectively, the pitfalls to avoid and how this simple pattern can be used to great effect to describe your web app's loading state.

## Resources

* Check out the [Repository](https://github.com/canaxess/app-loading-pattern) 
