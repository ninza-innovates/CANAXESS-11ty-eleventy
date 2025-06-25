---
tags: ["posts"]
title: WCAG 2.2 is finally here!
subtitle: After a long wait and several false starts WCAG 2.2 is now a W3C recommendation.
showDate: true
date: 2023-10-09
dateFormat: 9 October 2023
---

After a long wait and several false starts WCAG 2.2 is now a W3C recommendation. 2.2 is a modest update and has nine new criteria to build and test against.
* 2 criteria at level A
* 4 criteria at level double A
* 3 criteria at level triple A. 

But it’s not all new, there is also a deletion. Success criterion [4.1.1 Parsing](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html) has been marked as obsolete and is out. 

Since WCAG 2.0 was published, browsers have improved their handling of parsing errors. Parsing problems either no longer exist or are addressed by other criteria.

## How can the criteria be arranged?

Seven of the new criteria are designer focused. Look at adding these requirements to any design assets (such as Figma) before coding.

That said there are two developer focused criteria. If you're responsible for implementing authentication in a developer role 3.3.8 accessible authentication (minimum) and 3.3.9 accessible authentication (enhanced) are the relevant criteria for you.

## Seven criteria for designers

**Single A criteria**

* [3.2.6 consistent help](https://www.w3.org/TR/WCAG22/#consistent-help)
* [3.3.7 redundant entry](https://www.w3.org/TR/WCAG22/#redundant-entry)

**Double A criteria**

* [2.4.11 focus not obscured (minimum)](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum)
* [2.5.7 dragging movements](https://www.w3.org/TR/WCAG22/#dragging-movements)
* [2.5.8 target size (minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum)

**Triple A criteria**

* [2.4.12 focus not obscured (enhanced)](https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced)
* [2.4.13 focus appearance](https://www.w3.org/TR/WCAG22/#focus-appearance)

2.4.12 focus not obscured (enhanced) and 2.4.13 focus appearance are triple A criteria and not necessary if you're conforming to level double A only.

However, where possible understand if there is scope to adopt more criteria at the higher conformance level to support more users with diverse requirements.

## Two criteria for developers

**Double A criteria**

* 3.3.8 accessible authentication (minimum)

**Triple A criteria**

* 3.3.9 accessible authentication (enhanced)

3.3.8 accessible authentication (minimum) and 3.3.9 accessible authentication (enhanced) are functionally the same. 

The detail between these two criteria is identical except where 3.3.9 is a triple A requirement removing authentication via user submitted content or object recognition. A test which was allowed at the double A level.

**Our opinion is if you’re developing with familiar login and authentication patterns it’s unlikely you’ll encounter a requirement for authentication via object recognition or user submitted content.**

This means passing at the double A level also passes at the triple A level if standard authentication patterns are used.

## Do I need to start thinking about WCAG 2.2?

This is a firm yes. Internal accessibility policy in organisations and governments tends to lag behind the WCAG version changes. Adopting the new 2.2 criteria will future proof digital content when policy changes catch up.

**If you’re already meeting WCAG 2.1 criteria you’re most of the way there with meeting 2.2 criteria.**

Even though it isn’t yet a requirement it’s good to begin thinking about how to improve processes, design assets and digital service details to incorporate the 9 new criteria when internal policies change.

## New WCAG 2.2 course

To help familiarise you with the requirements we’ve created a new course [Master the 9 new WCAG 2.2 success criteria](https://www.udemy.com/course/master-the-wcag-22-criteria/?referralCode=EEDA656FC1FF61553051) on Udemy. 

We've poured over each criterion, unpicked what it means, tested it, read background information including both the official guidance from the W3C and from the accessibility community to give you the best outcome.

The course contains practical patterns and clear guidance with what to do (and not do). Some of the topics taught on the course include:
* Relate the new requirements to real users through the use of personas
* Understand design patterns which pass WCAG 2.2
* Avoid design patterns which fail WCAG 2.2

For the next 30 days the course has 25% off the full price using the code **MASTER-WCAG-22**. Follow the [Master the 9 new WCAG 2.2 success criteria](https://www.udemy.com/course/master-the-wcag-22-criteria/?couponCode=MASTER-WCAG22) link with the code applied.

## ThisIsWCAG.com update

We’re also finalising updates to [thisiswcag.com](https://thisiswcag.com/). Along with a newly designed UI the 9 new WCAG 2.2 criteria have expanded into approximately 15 new tests.

**Although WCAG 2.2 is a modest update it’s an important one. There’s a stronger emphasis with unobscured and clearer focus indicators with 2.4.11, 2.5.8, 2.4.12 and 2.4.13. Increased support for cognitive impairments with 3.2.6, 3.3.8 and 3.3.9 and support for alternative input interactions with 2.5.7.**

**Understanding the criteria and knowing how to add the techniques to projects isn’t always straightforward. Drop us line if you’re interested in working together and would like help to apply the new criteria to your digital projects.**

Stay up to date and subscribe to our newsletter and digital channels on [YouTube](https://www.youtube.com/@canaxessteaches), [LinkedIn](https://www.linkedin.com/company/canaxess) and [X (formerly Twitter)](https://twitter.com/CANAXESS) as we’re sharing more information on WCAG 2.2 over the next few weeks.
