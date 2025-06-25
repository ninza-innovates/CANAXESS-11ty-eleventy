---
tags: ["posts"]
title: "Uninterrupted keyboard focus: conquer popups, cookie consents, and overlays"
subtitle: WCAG success criterion 2.4.11 stresses keeping keyboard focus visible, despite common popup and overlay content. While partially hidden controls are allowed, it's better to ensure their focus remains identifiable.
showDate: true
date: 2024-04-01
dateFormat: 1 April 2024
customImage: true
customImagePath: true
customImageURL: "articles/uninterrupted-keyboard-focus/uninterrupted-keyboard-focus.png"
---

<div class="videoWrapper">	
<iframe src="https://www.youtube.com/embed/imgas7gn0Zo?si=3N6faH325ix_1w6y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Embedded youtube video"></iframe>
</div>

## Transcript

Keeping focusable controls visible has always been great UX advice, now it's great accessibility guidance with the latest version of WCAG. 

2.4.11 focus not obscured (minimum) is a 2.2 criterion requiring keyboard focus to remain visible. The goal is to keep keyboard focusable controls at least partially visible all of the time.

But to understand this success criterion, you need to understand the web of today. Popup and overlaying type content is everywhere. There’s sticky headers, sticky footers, newsletter popups and if you’re in the European Union numerous GDPR cookie banners. 

This content has a significant disadvantage when displayed as it hides keyboard-focusable controls, things like buttons, links, and widgets. Making it difficult for a keyboard user to know where they are on the page. 

Picture this, a user is navigating through the page, and the keyboard focus is on a control. But a GDPR cookie banner appears hiding the control. Resulting in the user no longer knowing where the keyboard focus is. 

At this stage, you’re probably thinking let’s just avoid creating content that hides focusable controls. Whilst that would undoubtedly pass this requirement, that isn’t what the success criterion is saying.

Whilst avoiding popup content is a good UX decision, the requirement for 2.4.11 is to make sure keyboard-focusable controls are not fully hidden. What I mean is, a focusable control can be partially hidden if its focus remains identifiable.

So, an in-focus button, partially hidden by a newsletter popup is allowed. It isn’t a good design decision, but it is allowed.

Now the term “partially hidden” is wildly open to interpretation. How much hiding is too much? There’s no figure. But a principle to follow is when more of a focusable control is hidden by dialogs, popups, or sticky content the user has greater difficulty finding and using it. 

While one approach is to avoid hiding any keyboard focusable feature at all. In practice this is difficult to do. A better approach is allowing keyboard focus to follow onto the popup. When popups, dialogs or banners appear, move keyboard focus to a control within. 

This content typically come with one or more buttons to dismiss or perform some action. What I mean is a dialog has a dismiss button and a GDPR cookie banner has accept and reject buttons. 

Making the focus follow onto the popup content means this criterion is automatically passed. As the focus can no longer be hidden by the popup as its now become part, of the popup.

Those are the requirements defined in WCAG, but how would designers or developers apply them?

If you’re a designer, you want to be aware of positioning content which doesn’t hide focusable features. Is there generous top and bottom spacing on sticky headers and footers to allow content to scroll and not be hidden? Can popups be shown in such a way that focusable content is not hidden? 

Whilst if you’re a developer you need to understand if content is shown above interactive controls, keyboard focus is always following. 

What I mean is if a GDPR cookie consent banner is used which has a dismiss button then that button has keyboard focus when the banner is visible. And the keyboard focus is retained in the banner until its dismissed. 

What I’ve said goes beyond the WCAG 2.2 requirement of keeping a control partially visible. When more of the focusable control is hidden by dialogs, or sticky content the user has greater difficulty finding and using it.

And so 2.4.11 focus not obscured (minimum) reduces the distraction of hidden content and means the user always know which control is in focus, but its requirement should be viewed as the bare minimum. 

Partially hidden content whilst accepted by WCAG means the user has greater difficulty finding and using it. Whenever possible go beyond the minimum requirement and avoid partially hidden content.
