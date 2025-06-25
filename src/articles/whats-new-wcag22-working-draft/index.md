---
tags: ["posts"]
title: What's new in the WCAG 2.2 working draft
subtitle: The Web Accessibility Guidelines (WCAG) 2.2 working draft has been released with several new accessibiltiy techniques.
showDate: true
date: 2020-08-17
dateFormat: 17 August 2020
---
## Quick Summary
_The Web Content Accessibility Guidelines (WCAG) 2.2 working draft has been released and is accepting comments until the 18th September 2020._

_The Accessibility Guidelines Working Group recommend adopting WCAG 2.2 as the new conformance target to anticipate future policy changes._ 

_In this working draft release there are 9 new success criteria. 4 single A success criteria, 4 double A success criteria and 1 triple A criteria with a stronger focus on cognitive impairments._

_As it’s a draft, what's contained should be treated cautiously because it isn't a stable release and may change based on feedback._

<hr>

The [Web Content Accessibility Guidelines (WCAG) 2.2 working draft](https://www.w3.org/TR/WCAG22/) has been released and is accepting comments until the 18th September 2020. It doesn't deprecate or supersede WCAG 2.0 or WCAG 2.1 but is an extension. 

The numbering convention is maintained, and it uses the same conformance model as WCAG 2.0. 

The Accessibility Guidelines Working Group recommend sites adopt WCAG 2.2 as the new conformance target even if the formal obligations in your organisation mention previous versions. 

This is to anticipate future policy changes and ensure you're better positioned.

**As it’s a draft what's contained should be treated cautiously as it isn't a stable release and may change based on feedback.**

Generally, the working draft document does give a pretty accurate picture of what new accessibility requirements to expect in the recommendation document due later this year.

In this working draft release there are 9 new success criteria.
* 4 single A success criteria
* 4 double A success criteria 
* 1 triple A criteria. 

**In addition, WCAG 2.1 [Success Criterion 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/quickref/#focus-visible) has been [promoted to a single A technique](https://www.w3.org/TR/WCAG22/#focus-visible).**

<h2 id="accessible-authentication">3.3.7 Accessible Authentication (Level A) <a class="header-anchor" href="#accessible-authentication">#</a></h2>

Memorising usernames and passwords can place a high burden for users with some cognitive disabilities. 

Users with cognitive impairments relating to memory, reading, numbers and recalling information may have difficulty remembering passwords and usernames. 

This success criterion ensures an accessible and easy to use method is available to log in and access content. 

A technique to pass this success criterion is to require login input fields have the `autocomplete` attribute added, and the [HTML 5.2 value tokens](https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute) applied to allow browsers to remember the details. 

```html
<label for="username">Username</label>
<input type="text" id="username" autocomplete="username">

<label for="password">Password</label>
<input type="text" id="password" autocomplete="current-password">
```

If you're already applying these attributes as part of [WCAG 2.1 AA conformance](https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose) then this is one way you've addressed WCAG 2.2 conformance.

<h2 id="dragging">2.5.7 Dragging (Level AA) <a class="header-anchor" href="#dragging">#</a></h2>

Maintaining a constant mouse pressure whilst dragging content such as a slider control can be difficult for users with mobility impairments. 

This success criterion ensures all functionality can be achieved using single mouse clicks unless a click and drag operation is essential.

[WCAG 2.1 already has a requirement that relates to drag and drop](https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation), this success criterion takes that further by ensuring it’s a specific success criterion and it's activated by clicks or taps as well as keyboard events.

A general technique exists ([G219](https://www.w3.org/WAI/WCAG22/Techniques/general/G219)) which gives more flexibility to decide how you want to pass the success criterion. 

If you had content that operated by dragging, an additional alternative option could be the use of buttons to accomplish the same action.

<h2 id="findable-help">3.2.6 Findable Help (Level A) <a class="header-anchor" href="#findable-help">#</a></h2>

Users encountering difficulties on a site may not be able to complete their task without further assisted help, such as completing a form, or logging in. 

This success criterion ensures a human contact mechanism is available and displayed in the same consistent location throughout the application, and at least one of the following exists:

* Human contact details
* Human contact mechanism
* Self-help option
* A fully automated contact mechanism

The human contact details should take the user to the area within the organisation that is responsible for the content and not be a catchall contact point for the whole organisation. 

If the self-help option is provided, the help should state no human support is available and should go beyond a search option for the whole site. 

If the chatbot option is provided this as well should meet other WCAG 2.1 success criteria. See [Accessible chatbot design](https://www.canaxess.com.au/infocard/chatbots/)

<h2 id="fixed-reference-points">2.4.13 Fixed Reference Points (Level A) <a class="header-anchor" href="#fixed-reference-points">#</a></h2>

Fixed reference points help users navigate and understand digital page content when magnified where indicators like page numbers may be hidden. 

The objective is to provide a way to navigate to static page breaks allowing printed and digital content be synchronised.

This success criterion is primarily for electronic publishing formats including EPUB and PDF and appears to be less relevant for web applications. 

<h2 id="focus-appearance">2.4.11 Focus Appearance (Minimum) (Level AA) <a class="header-anchor" href="#focus-appearance">#</a></h2>

Knowing where the screen focus is for vision impaired and keyboard users is critical as it assists navigation. The greater the contrast of the focus state, the easier the component is to see. 

This success criterion is closely related to existing [WCAG 2.0 success criterion 2.4.7 focus visible](https://www.w3.org/WAI/WCAG21/quickref/#focus-visible) and defines a minimum level of visibility.

The focus indicator must be at least a 1px border around the focused area. 

For example, a button element 90px wide by 30px tall would have an outer border width of 1px and an effective target area of 240px **(90px * 2 – both of the longest edges + 30px * 2 both of the shortest edges)**. 

The border focus effect is probably the most straight forward technique to implement, however other focus effects can be applied including at least an 8px thick line along the shortest edge of the element. 

It's important to understand these measurements define the minimum requirements and you're encouraged to go above the minimum and make the effect more prominent.

<h2 id="focus-appearance-enchanced">2.4.12 Focus Appearance (Enhanced) (Level AAA) <a class="header-anchor" href="#focus-appearance-enchanced">#</a></h2>

This is the enhanced success criterion for 2.4.11 Focus Appearance and it defines a higher level of visibility for the focus indicator. 

It expands the minimum area around the focused area to 2px, Increases the change of contrast to 4.5:1 and does not allow any part of the element to be obscured. 

A visible border effect once again is the most straight forward technique to apply. As this is at a greater WCAG conformance level it emphasises a 2px border thickness. 

A button element 90px wide by 30px tall would have an outer border thickness of 2px and an effective target area of 244px.

<h2 id="hidden-controls">3.2.7 Hidden Controls (Level AA) <a class="header-anchor" href="#hidden-controls">#</a></h2>

Users with cognitive impairments may have difficulty finding controls if they are selectively hidden as part of the screen design when progressing through a workflow.

This success criterion ensures all controls which are part of advancing through a workflow are always visible without requiring user interaction. 

However, it doesn’t require inactive controls to be visible all the time. So, for example a submit button which is conditionally visible when all fields are completed is acceptable.

Video players and other content which have an overlay visible only on hover and are not part of a workflow don’t require the controls to always be visible. 

However, if the video player is part of the workflow, for example a person must watch a video to progress then those controls need to be always visible.

<h2 id="pointer-target-spacing">2.5.8 Pointer Target Spacing (Level AA) <a class="header-anchor" href="#pointer-target-spacing">#</a></h2>

Users with hand tremors, limited dexterity or fine motor movement challenges may accidentally activate adjacent controls if the target area is small. 

Additionally, users with a touch screen device can also be affected due to a narrow control activation area.

This success criterion features in [WCAG 2.1 AAA criteria](https://www.w3.org/WAI/WCAG21/quickref/#target-size) and has been promoted to WCAG 2.2 AA. 

It ensures that any target activation area on links and form controls is at least 44px wide by 44px tall. 

This isn't to say a target area alone must be those dimensions but the target area and the white space surrounding it must add up to 44px in both directions.

```css
.enhanced-target
{
	min-width: 44px;
	min-height: 44px;
}
```

The CSS technique `min-width` and `min-height` is a straightforward way to ensure adequate spacing is applied to targets and the properties are [very well supported](https://caniuse.com/#search=min-width) in all major browsers.

<h2 id="redundant-entry">3.3.8 Redundant entry (Level A) <a class="header-anchor" href="#redundant-entry">#</a></h2>

Users with short term memory difficulties or cognitive impairments may have difficulty recalling information multiple times as part of a workflow. 

Additionally, all users encounter gradual mental fatigue if asked for the same information multiple times.

This success criterion ensures that any information the user has entered as part of the current session is persisted and used again if there is a requirement for further data entry of the same information.

There are exceptions to this success criterion where password entry and games involving the user's memory wouldn’t be in scope.

<h2 id="summary">Summary <a class="header-anchor" href="#summary">#</a></h2>

It's good to see users with cognitive impairments are increasingly better supported with improved authentication techniques. Ensuring controls remain visible when navigating a workflow and persisting user's information throughout the current session. 

Whilst more support is provided not all users will benefit from these techniques and will still require support from alternative ways.

A surprising addition is success criterion 3.2.6 Findable Help. The Accessibility Guidelines Working Group perhaps recognise a user's accessibility support request can become lost in large organisations. 

The traditional approach of a contact us form or email link can result in a request being redirected, and this technique provides several options for immediate support when the user requires it.
