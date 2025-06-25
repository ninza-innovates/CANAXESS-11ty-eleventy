---
tags: ["posts"]
title: "Canberra’s New Ticketing System MyWay+: A Step Forward, But Not for Everyone"
subtitle: A government digital accessibility policy should mean all digital services built are accessible. Unfortunately for Canberra’s new ticketing system MyWay+ it means people with disabilities are once again forgotten, and the Australian Capital Territory (ACT) Government's own digital accessibility policy ignored.
showDate: true
date: 2024-12-08
dateFormat: 08 December 2024
customImage: true
customImageURL: "articles/MyWay+/mywayplus.png"
customImagePath: true
---
**A government digital accessibility policy should mean all digital services built are accessible. Unfortunately for Canberra’s new ticketing system MyWay+ it means people with disabilities are once again forgotten, and the Australian Capital Territory (ACT) Government's own digital accessibility policy ignored.**

<p>
<img src="https://www.canaxess.com.au/articles/MyWay+/banner.png" alt="">
</p>

MyWay+ is the new integrated ticketing system for Canberra. Covering the bus and light rail network spanning Gungahlin in the north to Tuggeranong in the south. 

It provides journey planning, live service updates and more ways to pay. Everything we’ve come to expect from a modern digital ticketing system. 

But in addition to a [well-publicised poor roll out](https://www.abc.net.au/news/2024-12-03/myway-plus-ticketing-issues-spark-inquiry-call-liberals/104676896), digital accessibility is another component of the system that's been poorly implemented. Assessing the [login page](https://www.mywayplus.transport.act.gov.au/login) against the web content against the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/) shows many bugs.

## Very low text colour contrast

The accessibility problems begin with several colour contrast bugs. If you’re thinking the buttons **Quick Top Up** and **Buy a QR ticket** are difficult to see you’d be correct. 

<p>

<figure>
<img class="image--border" src="https://www.canaxess.com.au/articles/MyWay+/color-contrast.png" alt="The colour contrast analyser tool showing the minimum contrast ratio of 1.5:1 of the white text set against the grey background. Half of the screen is from the colour contrast tool whilst the remaining half is from the page showing the buttons 'Quick Top Up' and 'Buy a QR Ticket'">
<figcaption>The colour contrast analyser tool showing the minimum contrast ratio of 1.5:1 of the white text set against the grey background.</figcaption>
</figure>

</p>


The text colour of the buttons against the grey background have a contrast ratio of `1.5:1` far below the minimum requirement of `4.5:1` set in WCAG. 

This is followed by equally poor colour contrast with the dark grey acknowledgement of country text against the colour ribbon. 

<p>

<figure>
<img class="image--border" src="https://www.canaxess.com.au/articles/MyWay+/color-contrast1.png" alt="The colour contrast analyser tool showing the welcome to country acknowledgement in dark grey against a coloured background. The ratio is 1.6:1 far below the WCAG minimmum">
<figcaption>The colour contrast analyser tool showing the 'Welcome to country' acknowledgement in dark grey against a coloured background. The ratio is 1.6:1 far below the WCAG minimmum.</figcaption>
</figure>

</p>

Even at the most optimistic, the ratio is still only `1.6:1`, again far below what's considered accessible. Smaller screens may reflow content onto the lighter background making it not as much of a problem, but it’s not a good start.

This design decision affects users with a colour vision impairment. When the contrast ratio is less than `4.5:1` people with reduced levels of vision have an increasingly difficult experience identifying content. This means fewer people can identify foreground text against the background.

## Unlabelled form controls

The accessibility problems continue with poor labelling of the form control **Username** and the **Remember Me** checkbox. 

The labelling for **Username** is from the `placeholder` attribute, and its use is [widely discouraged by the accessibility community](https://www.smashingmagazine.com/2018/06/placeholder-attribute/). 

<p>

<figure>
<img class="image--border" src="https://www.canaxess.com.au/articles/MyWay+/placeholder.png" alt="The accessibility tree of the username input control showing the placeholder attribute complete with the words 'Enter Username'. The remaining half of the screen shows the webpage with the Username input control.">
<figcaption>The accessibility tree of the Username input control showing the placeholder attribute complete with the words 'Enter Username'.</figcaption>
</figure>

</p>

It’s a technique for labelling controls that's unlikely to work consistently across browsers.

Whilst the **Remember Me** checkbox has no programmatic label. The label - even though visible and placed next to the control - remains unannounced by a screen reader as it isn’t programmatically linked.

It’s missing a key link that screen reader software rely on to make controls understandable. 

<p>

<figure>
<img class="image--border" src="https://www.canaxess.com.au/articles/MyWay+/unlabelled.png" alt="The accessibility tree of the Remember Me checkbox showing an unlabelled control. The other half of the screen shows the webpage with the Remember me checkbox">
<figcaption>The accessibility tree of the 'Remember Me' checkbox showing an unlabelled control with no labelling or programmatic name applied.</figcaption>
</figure>

</p>

The absence of a programmatic label for **Remember Me** and reliance on the `placeholder` attribute for **Username** reduces the ability for blind users to signup effectively. 

## Unreachable page links

This brings us to the showstopper of accessibility failings. The lack of keyboard navigation on prominent links. 

People with hand tremors or mobility weakness can find mouse navigation difficult and may instead prefer keyboard navigation. Yet the links **Sign up**, **Recover Account** and **Forgot Password** are all unreachable when using the keyboard due to a missing `href` attribute.

<p>

<figure>
<img class="image--border" src="https://www.canaxess.com.au/articles/MyWay+/signup.png" alt="The signup form showing the links 'Sign Up', 'Recover Account?' and 'Forgot Password?' highlighted by a box indicating they are not keyboard accessible">
<figcaption>The signup form showing the links 'Sign Up', 'Recover Account?' and 'Forgot Password?' all highlighted by a box indicating they are not keyboard accessible.</figcaption>
</figure>

</p>

This means the core functionality of the signup process is unreachable. If you’re a keyboard user, you’re effectively shut out of the entire signup process.

These three bugs though are barely scratching the surface of the accessibility of the digital platform. In isolation, a **Remember Me** checkbox missing a label or poor colour contrast probably won’t have a huge impact.

But this is just one screen. It points to a likely pattern of accessibility not undertaken across the entire digital platform.

If a government-created digital ticketing platform is intended to be used by the entire community. Then it must be usable by the community on all platforms and devices. Be it mobile, or desktop with and without assistive technology.

## A 20+ year “new thing”

Web accessibility isn’t a new thing. WCAG has existed since 1999. Within Australian government circles web accessibility is a standard requirement for any digital service built. 

The Australian Capital Territory (ACT) government has a [web accessibility policy](https://www.cmtedd.act.gov.au/__data/assets/pdf_file/0005/1134905/Web-Accessibility-Policy.pdf) requiring all digital services to be accessible for people with disabilities. And this is supported by the [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver) (currently being updated) which describes equal access as a right. Web accessibility isn’t an unknown concept.

It’s difficult to not criticise every design decision. The intention of making it easier for all Canberrans to use public transport is a great aim. 

But the MyWay+ project has by some estimates [cost the local Canberra community $70 million dollars](https://the-riotact.com/government-was-warned-new-myway-ticketing-system-wasnt-up-to-the-job/829296). There is a digital accessibility policy guiding all digital development for the ACT government, it should have been followed. 

Digital accessibility should have been a core part of the project.

## What could help in a situation like this?

But it’s not all negative, improvements can be made. First [audit the existing digital platform for conformance to WCAG](https://www.canaxess.com.au/services/testing). Understand where the existing accessibility bugs are and begin fixing them as part of the backlog. 

Combine this audit with a regular iterative cycle of auditing to check what is delivered by business analysts, designers and developers throughout the entire delivery process is accessible.

This ticketing system is for all Canberrans, but the accessibility bugs identified on the login page show that once again disabled people weren’t considered in the design stage and what’s built is another poorly accessible government digital service.

**If you want to learn more about our accessibility work and how our team can help your organisation avoid some of these challenges, please [get in touch](https://www.canaxess.com.au/contact/) with us at [hello@canaxess.com.au](mailto:hello@canaxess.com.au).**
