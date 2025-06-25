---
tags: ["posts"]
title: Accessible chatbot UI revisited
subtitle: Revisiting making a chatbot accessible and updating the recommended accessibility advice.
showDate: true
date: 2018-11-25
dateFormat: 25 November 2018
---

Native HTML elements have keyboard support. Buttons, links and form controls all appear in the keyboard ordering sequence as standard.

Because each chat bubble is a non-semantic element (they were rendered as `DIV` elements) I had decided to make each bubble focusable and added the `tabindex` attribute. My thinking was this approach would allow a user to navigate through the entire conversation history solely from the keyboard.

I admit, it’s a technique I've used in the past and it's been a convenient way to navigate content which doesn’t traditionally fit in the regular layout of a page.

Chat conversations update frequently, and possibly don't sit well under static heading structures, so could become difficult to understand if a user wanted to re-read parts of the conversation.

Several people at the conference mentioned how only interactive elements should receive tab focus. Just because you can make non-interactive elements focusable, should you?

Adding `tabindex` onto each message bubble will ensure they become "interactive", but what does that achieve? The messages are now reachable in the keyboard sequence and that’s it, they don’t do anything else, they're not really interactive.

Besides the [HTML 5.3 W3C Editors Draft](http://w3c.github.io/html/dom.html#interactive-content) describes interactive content as content that is specifically for user interaction. Chat bubbles don’t fit that definition.

> Interactive content is specifically intended for user interaction.

The technique I used isn’t necessarily incorrect, but it did make me think is there a better way of doing this? And there is, and it is using less code instead of more.

```html
<div class="conversation-text user">That would be great, 
can I book in for Monday?</div>
```

Removing the `tabindex` attribute on all `DIV` message bubbles, means the messages no longer appears in the keyboard ordering sequence. However, each message is still reachable using screen reader navigation keys.

## aria-label identification
Previously I had used `aria-label` to identify where the message was originating from - the bot or the user. `aria-label` can be used on any base element but that doesn’t necessarily mean it works consistently across all browser/assistive technology combinations, as explained by the Paciello Group:

> If you use aria-label, aria-labelledby, or aria-describedby with any other elements (like div, span, p, blockquote, or strong etc.), they generally won’t work across all browser/assistive technology combinations.

The `aria-label` technique had previously been tested and worked consistently. But when a colleague questioned its usage and their understanding of it, this caused me to retest previously working components. The outcome was it no longer worked, it may have been a specific combination of browser/assistive technology which originally allowed it to work fine.

I decided to rely on a technique which has consistent support across browsers and that is screen reader specific text. CSS is used to render text off-screen and hide in the visible screen display, but still announced through the screen reader.

```html
<div class="conversation-text user"><span class="sr-hidden">You said</span> That would be great, 
can I book in for Monday?</div>
```

This throws up a further problem though, the screen reader hidden text is now unread as part of the visible sentence when tabbing through the conversation history.

## Summary
There are always several ways to achieve the same outcome. Solutions which may have worked in previous browser/AT combinations may no longer work with updates and so it's crucial to constantly apply a critical lens over any accessibility solutions. Thanks to the OZeWAI community for flagging this.