---
tags: ["posts"]
title: "Google I/O 2024 conference"
subtitle: Our pick of the accessibility highlights from Google's I/O 2024 conference. The Android 15 update includes better control of assistive technology, image descriptions get a boost with Gemini, new APIs to better describe collections and updated developer guidance focusing on semantics.
showDate: true
date: 2024-05-26
dateFormat: 26 May 2024
customImage: true
customImagePath: true
customImageURL: "articles/google-io-conference/googleio.png"
---

<div class="videoWrapper">	
<iframe src="https://www.youtube.com/embed/qLCK0HO_tNQ?si=11JESGxHRUf_R5a9" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Embedded youtube video"></iframe>
</div>

## Google I/O 2024

**This year's Google I/O conference had several important accessibility updates for the Android operating system and it's screen reader TalkBack.**

Our pick of the highlights were:

### Android 15 updates
Version 15 includes the ability to pair and control audio hearing aids with support for hands-free calling, changing presets and a new quick settings tile. 

### Labelling images with AI
Unlabelled images become accessible with an update coming to TalkBack later this year. Which gives vision impaired users the ability to have photos described with clearer descriptions of what's happening. 

This uses Google's AI "Gemini" with an on-device model called "Nano" working even when there is no data connection. Especially valuable in regions with low or no connectivity.

### TalkBack 15 update
* Improved support for refreshable Braille displays.
* Improved container navigation. 

Feedback from users describe it's challenging to navigate lists, grids, and other collections when they contain a lot of items. The feature will allow users to traverse the content more quickly.

### New APIs
Conveying additional information about the size of collections is covered with new APIs. <code>itemCount</code> and <code>importantForAccessibilityItemCount</code> fields on the <code>CollectionInfo</code> class, provide a list's truer size outside of headings, dividers and other decorative content that can be picked up whilst navigating. 

Using this feature means TalkBack adjusts the feedback to represent more prominently item counts when describing collections.

### Updated developer guidance
Interestingly Google noticed developers favouring TalkBack over compatibility with other accessibility services. To counter this the guidance has been updated to discourage the use of <code>TYPE_ANNOUNCEMENT</code> and <code>announceForAccessibility()</code>. 

Instead, guidance now recommends developers use more semantic and less disruptive alternatives. So overtime expect less reliance on audible feedback for common UI elements and instead rely on element semantics more. 

Some examples include descriptive labels to communicate actions avoiding the need to provide confirmation announcements for user actions. And using window and panel titles to convey a high-level description. Where UI elements require attention expose these as polite or assertive depending on time sensitivity.

Check out Google's Head of Accessibility and Disability Inclusion [Christopher Patnoe's LinkedIn post](https://www.linkedin.com/posts/patnoe_updates-to-android-accessibility-features-activity-7198418995727716352-B66u?utm_source=share&utm_medium=member_desktop) where he outlines several more features, and watch the full list of Android accessibility updates in the videos below.

### Resources

- [Updates to Android accessibility features and API (YouTube)](https://www.youtube.com/watch?v=qLCK0HO_tNQ)
- [Android Google I/O 2024 Keynote Recap (YouTube)](https://youtu.be/4LOEU1MiwQQ?t=515)
- <a href="https://developer.android.com/reference/android/view/View#announceForAccessibility(java.lang.CharSequence)">Alternatives to Accessibility Announcements</a>
- [Custom Collection Size APIs](https://developer.android.com/reference/kotlin/android/view/accessibility/AccessibilityNodeInfo.CollectionInfo)
- [Compose Traversal Groups and Ordering APIs](https://developer.android.com/develop/ui/compose/accessibility/traversal)