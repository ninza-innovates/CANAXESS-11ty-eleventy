---
tags: ["posts"]
title: How Australian supermarket Coles creates accessible user stories
subtitle: Accessibility Acceptance Criteria (AAC) are broad accessibility criteria applied when user stories are created. Instead of developer-focused, they’re BA-focused and describe key behaviours the finished feature needs to display.
showDate: true
date: 2023-03-23
dateFormat: 23 March 2023
customImage: true
customImageURL: "aac.png"
---
Creating user stories with included accessibility information is hard. Is so much accessibility detail added into each story describing how a developer creates it? or just reference WCAG and hope that by osmosis the requirements appear in the finished feature?

Accessibility needs to be an integral part. But accessibility specialists in organisations are so few and often support many teams. Each team creates user stories for new features. And it becomes challenging balancing the accessibility needs of the teams, with the limited resources of a central accessibility team.

## Unnecessary navel-gazing
The best intentions begin where accessibility guidelines are meticulously described in each user story with coded samples acting as instructions for a developer to apply. But this is the problem, it's navel-gazing. 

There's a tendency for us to write requirements for accessibility experts and we end up writing so much information and technical detail that's added to the user story. 

But when the features become more numerous, this approach begins to slow down. And ultimately devolves into hastily copied code, or referencing WCAG guidelines which are incredibly difficult to understand for non-accessibility people and time-poor developers. 

Overly comprehensive accessibility requirements become separated and de-prioritised. With the familiar argument of accessibility being _too hard_ thrown around!

There just aren’t enough hours in the day for accessibility to be described in depth for developers to apply and confidently carried through into a finished feature.

## Guard rails and an undefined solution
Accessibility Acceptance Criteria (AAC) are one solution to this problem. 

AACs are broad accessibility criteria applied when user stories are created. Instead of developer-focused, they’re BA-focused. And describe key behaviours the finished feature needs to display – an outcome, but they don’t go so far as in specifying how to do it. 

Instead, they act as guard rails allowing a developer to implement the feature in any possible way, if the outcome is met.

They define the boundaries of a user story and are used to confirm when a story is complete and working as intended. They're written in plain language and easily understood by members of a team who have different expertise and varying levels of fluency in each other’s technical jargon.

They've been used incredibly effectively at the Australian supermarket [Coles](https://www.coles.com.au/). **We worked together with Accessibility Manager [Mel O'Brien](https://www.linkedin.com/in/melaniejobrien/) and the accessibility team to identify which WCAG criteria would be the most important to document.**

## Avoid reproducing WCAG
We didn't want to reproduce all 50 success criteria from WCAG in another format. Instead, we settled on 20'ish criteria before this was whittled down to 10.

This balanced the need to document core accessibility behaviour yet not be so taxing for BAs creating requirements.  

We chose common failing, high-impact WCAG success criteria to include in the top 10. Each AAC aligns with one or more success criteria. 
The accessibility acceptance criteria
* **AAC1 Keyboard Accessibility**
* **AAC2 Content on hover**
* **AAC3 Page title**
* **AAC4 Visible focus**
* **AAC5 Semantic markup used appropriately**
* **AAC6 Form control labelling and inline errors**
* **AAC7 Screen reader**
* **AAC8 Zoom & resize**
* **AAC9 Alt text**
* **AAC10 Orientation & reflow**

Each accessibility acceptance criteria follow the format of **user** + **action** + **outcome** and centre the story on the user's requirement.

Generally, people are familiar with keyboard accessibility and the requirements around keyboard focus behaviour are the most straightforward. 

## AAC 01 Keyboard accessibility
> Given I am a keyboard user when I encounter interactive content then I can control it solely from the keyboard.

This AAC maps directly to [success criterion 2.1.1 keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html). But the WCAG success criterion is far more detailed than this, where's the detail? We excluded anything that was difficult to understand, such as requiring specific timings for individual keystrokes and exceptions.

A requirement needs to be easily understood. If all the detail in SC 2.1.1 is documented then really, nothing is improved and WCAG has just been documented in another format. 
## AAC 07 Screen reader
Dynamic content on a page is captured with AAC 07 Screen reader. The Coles website is very complex and has a lot of parts that change. Text dynamically changes, and notifications announce items have been added to the trolley. 

> Given I use a screen reader when a visual change occurs on the page then I can understand the change audibly. E.g., search results displaying while searching, errors displaying after activating submit button

This maps to WCAG [success criterion 4.1.2 name, role value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html). It’s a shorthand way to condense all the technical detail in the criterion into something easy to understand. 

It doesn't cover everything; its essence however is when the page dynamically updates, the update needs to be conveyed to the screen reader.

## The AACs aren't perfect

They leave out a lot of the nuance found in the WCAG success criteria but always aim for [progress over perfection](../moving-forward-a-little-bit-more/). They’re guidelines BAs confidently apply when developing user stories.
## How successful have they been?
The AACs have been in use for over a year and over time it was found the handover point from BAs to testers was becoming challenging. Whilst the AACs were clear for BAs they weren't clear from a tester's perspective with a lot of uncertainty about how to test. 

A companion document was introduced titled 'testing with the AACs'. This gave testers a consistent approach to interpreting and testing each criterion.

Centring the AACs to a BAs perspective creates a resource better suited to capturing high-level accessibility requirements upfront. Instead of forcing a BA or a Tester to understand technical guidelines the companion resource tailors the AACs to each role using familiar language.

**The burden of decoding WCAG shouldn’t be placed on the shoulders of the BAs and Devs. This simplified approach is easy to understand, digest and apply. It accelerates the time new features reach production and ensures core accessibility behaviour is addressed.**

The AACs developed by the Coles Accessibility Team were inspired by the UK Government's Government Digital Service (GDS) work detailed in the blog post [Improving accessibility with accessibility acceptance criteria](https://insidegovuk.blog.gov.uk/2018/01/24/improving-accessibility-with-accessibility-acceptance-criteria/).

The [Accessibility Acceptance Criteria](https://github.com/meljobrien3/accessibility-acceptance-criteria/blob/main/WEB.md) are kindly shared by [Mel O'Brien](https://www.linkedin.com/in/melaniejobrien/) publicly through GitHub.

## Resources

* Check out the [Repository](https://github.com/canaxess/accessibility-acceptance-criteria) 