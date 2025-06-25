---
tags: ["posts"]
title: Accessibility shims as a stop-gap
subtitle: An accessibility shim is jQuery code which is run after the page has loaded. By using jQuery selectors, we can target page elements that we want to change or alter.
showDate: true
date: 2017-06-23
dateFormat: 23 June 2017
---
It’s not always easy to fix accessibility on the client side. The platform may already be chosen, or there’s an extra layer between you and the HTML code, and in these circumstances a shim can be used.

## What is a shim?
An accessibility shim is jQuery code which is run after the page has loaded. It alters the document object model and the changes are picked up by the screen reader. By using jQuery selectors, we can target page elements that we want to change or alter, it sounds like a great technique but there are significant downsides.

The problem is the shim is run every time a page is loaded. If the shim is many lines in length it can begin to degrade page performance. It’s also very specific to the page content, if the page has altered significantly, then the shim no longer works.

There may be situations where you only want accessibility features introduced on a specific page. For example, using it on a contact us page and nowhere else, and localising shims to particular pages can be tricky. We would identify any unique content per page – this could be a heading or control, and then test to see if the element exists, if it returns true the shim is run.

```js
$(function() {
if($('#selector').length)
{
//it exists add extra content or attributes
}
});
```

## An interim fix
Accessibility shims are a hack, plain and simple. They attempt to retrofit accessibility features onto existing content. Retrofitting accessibility using shims isn’t great, but it does serve a purpose and should be considered a part of an accessibility solution, if a site is moving towards accessibility this is an ‘ok’ approach as a temporary fix. The underlying platform may have been procured without considering accessibility requirements or former developers may have added features that aren’t accessible and you’re now stuck with challenging web content.

We occasionally use shims to retrofit accessibility onto an existing system, but we always make the organisations we work with aware it’s not great, it’s a temporary fix and is liable to break if a significant portion of the web content is rewritten. **For us, using shims is the exception, not the rule, we consider them a valuable addition to the accessibility toolkit when it’s not always possible to work with the HTML code direct.**