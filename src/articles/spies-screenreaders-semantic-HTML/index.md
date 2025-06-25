---
tags: ["posts"]
title: Spies, Screen readers and Semantic HTML
subtitle: Our recorded presentation for SSW TV where we explained how Australia's spy agency Australian Signals Directorate (ASD) used semantic HTML to describe the features of a commemorate coin on an image without using text.
showDate: true
date: 2024-09-28
dateFormat: 28 September 2024
customImage: false
---

<div class="videoWrapper">	
<iframe src="https://www.youtube.com/embed/6LwZH4-62Fo?si=t-gdD5eVdMkcws5F" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Embedded youtube video"></iframe>
</div>

<details>
  <summary><h2>Video transcript</h2></summary>
  <p>
  
  The Australian signals directorate is Australia’s intelligence gathering organisation, think of it as the NSA in the US or GCHQ in the UK. They’re the ones breaking codes, listening to and collecting intelligence protecting the country from threats far and wide.

They’ve been around for 75 years and two years ago in recognition of their founding all those years ago they produced a commemorative 50c coin. For a code-breaking organisation you’d expect it wasn’t some boring logo on a coin, instead the coin had several codes embedded on both sides. 

On the reverse side featured letters on the outer and inner ring – some embossed to make them stand out, whilst in the middle were 3 sections with the lower featuring letters and numbers. Whilst on the front of the coin braille lettering is beneath several letters of the words Elizabeth and Australia.

The coin has an accompanying webpage which describes the image, but it’s incredibly challenging to describe if you can’t see the image.

For people who are blind describing images on the web comes down to using and relying on other mechanisms to understand the image. 

These users use a screen reader which is a piece of assistive technology that describes the image in an audible way. But the way the image is marked up in HTML can mean it's very easy to understand or very hard. 

Navigating with a screen reader, means how the content is displayed becomes less relevant. When the ability to see content on the web is reduced or removed, the screen reader attempts to make use of other mechanisms. It may use the ALT attribute on the image, an aria label attribute or the content surrounding the image such as paragraph text or figure element. Think of this as meta data of the image.

For example, on the NVDA screen reader pressing the character G will cycle through all images on the page and assuming they’re correctly marked up will audibly announce the ALT text.

But what are some ways to describe this incredibly image? we could use ALT text, as that provides an alternative text for the image. 

Perhaps `Alt="commemorative coin"`. When the screen reader encounters the image, it would then announce the text "commemorative coin". Whilst this `ALT` text is accurate, it is an image of a commemorative coin, it’s not exactly helpful and a rich description of what the image conveys and isn’t providing an equal experience for users who can’t see the image.

If you were describing the coin to someone you would use a rich description. You wouldn’t say "commemorative coin", you’d describe its embossing, perhaps the inner and outer circles. And that’s what we’re wanting to convey. It’s a coin, but what’s so special about it?

When providing ALT text for images we need to provide just enough detail as if you were describing it to a someone. I could therefor use `ALT="letters rotating around the edge of the coin, VKG are emphasised, the reverse of the coin is segmented into 3, with the letters E3B8287D4290F7233814D7A47A291DC0F71B2806D1A53B311CC4B97A0E1CC2B9…"` but this quickly descends into a nightmarish approach of attempting to provide so much information that ALT text is no longer a viable method to describe the complexity in the image. I pity the person trying to understand the ALT text of such depth.

We could use adjacent paragraph text, but again we’re using text to describe the visual changes of the text. The description which is understood visually is becoming diluted with necessary text taking away the meaning of the image.

A way to describe the meaning of differences in text and placement without using text and overloading the user is required.

And that way is semantic HTML. 

Semantic HTML is the backbone of an accessible web. What this means is when HTML elements are used to describe the meaning of content, that content can then be interpreted in ways not necessarily text based. Semantic HTML provides a solid skeleton which describe the meaning of content.

Semantic HTML may introduce a different sound in the screen reader, be consumed in non-visual ways or otherwise alert the user that this bit of semantic HTML content is different, and so describe it differently.

When semantic HTML elements such as headings, lists and form elements are used they provide extra features for the screen reader for free. When navigating with a screen reader headings , pressing the H and shift H key cycles forwards and backwards through heading levels announcing the heading text and level.

By pressing the letter I on the keyboard lists announce the number of items in the list as well as individual items.

Form controls provide extra meta data to be described such as the type of input required in this instance it's an edit control and its blank, controls may also make additional sounds to indicate when on a form control. And all this metadata richness is what we're wanting to tap into.

At the 2023 Microsoft ability summit conference blind Microsoft developer Roberto Perez described in his presentation intentional audio cues in visual studio allow him to understand information faster than just relying on screen reader speech. If we can rely on non-text ways to describe content using sounds or other metadata without having to describe it this sounds like a pretty good outcome.

Intentional audio cues that what we're trying to accomplish.

Additional non-text cues to content means that content can be understood in different ways. It may be tactile, audible or ways in which we haven’t yet identified. It’s allowing content to be consumed in multiple ways. 

Traditionally a UI was one mode, it was visual. What we saw is what we got. But building a user interface today and embracing semantic HTML means thinking of it as a multi modal experience and not just visual. By building content to describe meaning and giving users the ability to consume content is any number of ways it opens up the opportunity of supporting more users who access it in ways which are convenient for them.

What ASD did to overcome the challenge of describing a complex image was very clever. Instead of only providing a lengthy description in ALT text or in separate text they used semantic HTML to enhance meaning to those elements that are visually distinct. What I mean by this is they used HTML to provide meaning to the content rather than changing how it looks.

On the Queen’s head side of the coin content with the letters B, TH of the word Elizabeth and A S A of the word Australia were contained in the HTML element strong. As this corresponds to the locations where braille is applied. 

Whilst on the reverse the emphasised letters alternate from being contained in the strong element to not. The outer ring has the letter D R FHRM contained in the HTML element strong, and this is the same with the inner ring. Wherever there is a visual emphasis that emphasis is described with the HTML strong element. Visual emphasis using the strong element and then back to regular text.

The HTML specification describes the HTML strong element as representing important, seriousness or urgency in its content. And this is a great demonstration of importance in those bits of content. 

When text is visually different to convey the importance the strong element is appropriate to use in this situation. Strong is providing meaning.

All this is good to describe the emphasis of the text and word elements but what about the actual ALT text on the image. How did ASD connect the ALT text which is the traditional way to describe images to this content? they used "See the accessible text version below for a detailed description of Side A (Non Queens head) of the coin". 

Now this is clunky, asking the user to see the text below, "see" as not everyone can see the text and "see below" is referencing a direction which is in violation of the Web Content Accessibility Guidelines version 2.2 success criterion 1.3.3 sensory characteristics at level A. 

At this point I was thinking that’s a good innovative implementation of using semantic HTML to describe complex visuals in a different and unique way, it’s not perfect and has some flaws but we're not letting perfect be the enemy of good, overall it’s pretty good. Providing the meaning of emphasised text all without relying on the fall-back method of just providing text. How well is it supported in the screen readers JAWS and NVDA, and this is where it gets interesting.

All screen readers don’t support text level HTML elements, what this means is the strong element is not announced in the screen reader JAWS, NVDA, Windows narrator, VoiceOver on Mac OS and VoiceOver iOS. No screen readers convey the strong element to users. 

The screen reader NVDA did support a similar semantic element em for emphasis, but then found the element was often overused on websites it led to a jarring experience for NVDA screen reader users. And they promptly disabled NVDA from interpreting it. 

NVDA said, having the emphasis element reported by default has been extremely unpopular with users and resulted in a lot of complaints about NVDA. The unfortunate reality is that emphasis is very much over-used in the wild.

And this applied to the strong element as well.

But let's jump back to explain a little more how screen readers understand content on the web. Screen readers and other assistive technologies understand the web through reading the accessibility tree. This is a representation of the physical page. It gathers information from the DOM tree and rearranges it in a format that can be understood by assistive technologies (AT) such as screen readers, eye-tracking systems, and speech input software.  By using semantic HTML this allows the visual content to provide meaning to be consumed in any number of alternative ways (assuming it's created in the correct way).

Although browsers expose the strong element in the accessibility tree and in theory make the strong element available to assistive technology, the element is in no way supported in all the screen readers tested.

Simply put the strong element is not accessibility supported using current technology. If you’re testing your own apps and website for conformance to the Web Content Accessibility Guidelines, whether content has been created using these HTML elements shouldn’t be a factor in determining a pass or fail against criterion 1.3.1 info and relationships. The browser identifies the strong element in the accessibility tree, yet the screen readers refuse to acknowledge it.

Unless if a visual style accompanies the strong element in some situations this is announced by the screen reader with a few caveats. If the strong element is combined with say being bold and if that feature is turned on within the screen reader they are announced. 

Visual CSS style changes of bold and italic are well supported across all screen readers on desktop and will be announced to users. But the setting within the screen reader needs to be turned on. If you’re relying on the user having a setting toggled within their screen reading software for your content to be better understood, it’s probably not a very good outcome for them.

Bold text for formatting purposes can be interpreted by the screen reader to make content audibly announce those elements in a different way. But as the web is awash with bold content, that too probably won’t be effective to describe the meaning of emphasised content.

So, with all that in mind what are some other ways that can be used to describe differences in text without having to describe those changes in text. 

Emerging developments on the web is the CSS speech module which provides the ability to add emphasis to different content. 

The big problem with screen readers is when they audibly announce content, there is no nuance with the synthesised text. The synthesised voice may vary slightly with volume, but content which is prominent or important is output the same way as other content. Monotone!

With CSS speech it would be possible to subtly alter the way the emphasised parts of the text are announced by the screen reader. Giving the content an aural texture. For example:

```css
strong {
voice-volume: x-loud;
voice-rate: fast;
voice-pitch: high;
}
```

Notice the increased in pitch and tempo on the word important?

Making the strong element have an aural emphasis signals to the user the text is different and provides an enhanced announced output for those elements marked up in that way.

This is really promising, but as the CSS 3 speech module is yet to be ratified and is still subject to change its support is extremely limited across browsers or screen readers. This is purely hypothetical.

Current technology just doesn’t provide a consistent out of the box method to aurally identify visual changes in text content. ALT text is insufficient, the strong element isn’t accessibility supported, semantic HTML in many instances is ignored and the CSS 3 speech module is still a release candidate. 

What then can be achieved with the current limitations. How can visual changes in HTML be conveyed to a screen reader user?

Semantic HTML, and using those elements which provide meaning such as the strong and emphasis.

Semantic HTML is the way to describe visual changes even though its support for conveying the text in other ways is currently limited. Semantic HTML allows us to adopt progressive enhancements for when technology catches up we don’t need to do extra to make the content accessible as we’re already provided the skeleton. 

If screen readers begin honouring the semantics of the strong element, then its supported and we don’t need to do further work. If the CSS speech module is moved to recommendation by the W3C then a simple switch of the style sheet means vocal texture is applied. 

Applying semantic HTML to describe differences in text makes progressive enhancement real and tangible and it makes the content become consumable in any other format. Just because it isn’t currently supported it doesn’t mean it won’t ever be supported. 

Semantic HTML is the skeleton from where we add extra features when the technology supports it.

So how could a complex image like ASD’s be described in further detail without relying on just text alone and improving what's already there with the strong element. There’s always difficulty trying to use linear hierarchies and widgets to describe a complex image but let's give it a try, we'll use semantic HTML elements that are supported. 

We first want to separate the front and reverse of the coin. And we'll use heading elements. Use a h2 element for the front of the coin and one for the rear. By using headings, the information on both sides of the coin is separated allowing a screen reader user to understand each group.

```html
<h2>front of coin</h2>
```

On the rear of the coin are two rings, to describe the number of rings without marking it in text use the unordered list element. The unordered list element provides additional meta data without us having to do anything. When the element is navigated with a screen reader it should announce a list of two items and individually announce each list item. But it doesn’t. We've done everything right to enhance the list but the screen reader isn’t honouring it.

Let's apply this same technique with the inner segments. Each segment being a separate list item which describes when navigated with a screen reader a list item x of 3. But now we’re going down the slippery slope of adding a lot of techniques to try and describe an image without text.

So far the screen reader output isn’t great. We've improved the grouping of the items yet we would need to add better support for announcing individual letters and not entire words. And the screen reader isn’t honouring the extra labelling.

Ultimately the HTML elements we have at our disposal are limited, fixing the grouping and arranging of the text highlights further problems now of how the content is announced. There is really no efficient way to mark up differences in the text beyond using the text and poorly supported semantic elements. 

If we built ever more complex relationships with HTML elements, it becomes a lesson in futility as the effort to build the HTML far outweighs the benefits of just using heading elements and strong elements to describe the image. 

The most robust technique is the easiest to build and easiest to not get wrong. There's now a lot of moving parts to the description, every attempt to use ever more complex elements in complex relationships will mean a friction point with a developer where extra care and focus must be taken to build the image in just the right way and the likelihood of things breaking or not being created in the right way increases. The best option is the easiest, and that’s what ASD has chosen.

As developers its often tempting to build in complexity and try and answer problems with layering more code on top, and sure given enough time a better solution could be identified. 

But deadlines mean we simply don’t have time to craft a solution like that, more so asking a developer to build the technique correctly with no errors is challenging in itself.

If you find yourself having to describe the level of complexity similar to the commemorative coin. Follow the principles with what ASD did to describe complex images. 
1.	Avoid unnecessary ALT text. Provide just enough detail which explains the image, if the image is complex reference a separate location where the description can be found. 
2.	Use heading elements to provide a hierarchy and segment a complex description into regions. For grouping of items, use list elements to describe number of items. 
3.	And apply semantic HTML elements such as strong, italic and em to describe changes in text. Whilst they’re not currently supported in screen readers, they do future proof the content and progressively it for when technology catches up.

What ASD did was clever, they used semantic HTML to describe visual differences in text content in a way other than text and layer the content in texture. But as we’ve seen the technology hasn’t yet caught up. But other things they have done are to provide a description in the ALT text of the image guiding the user to find more (although the wording is clunky), they used a collapse and expand widget to provide the text shown on the coin. This is accessibility in depth. Using a range of techniques to enhance access and understanding to the largest number of users. Just because the strong and other semantic elements aren’t supported now it doesn’t mean it won’t be.

But that isn’t to say ASD’s example cannot be improved, their use of ALT text is clunky, no heading elements are used to segment the two sides of the coin and there’s a significant accessibility defect where the collapse and expand content has unfortunately been coded incorrectly rending all the content hidden to screen readers. 

ASD's motto is "reveal their secrets protect our own" and it's this line which unfortunately has been taken a little too literally. Up to this point what ASD did was a pretty good attempt to make a complex image more accessible, however it all comes down to the execution. 

The contents are contained in an accordion control. It's been built with several aria attributes that convey the visual behaviour to a screen reader. When it's expanded the screen reader announces "expanded" collapsed for "collapsed" all pretty standard stuff and follows established patterns for screen reader usage. 

Except when it comes to this little attribute aria-hidden"true". Every time a panel is toggled this too should be toggled to allow a screen reader to find the content. And this the problem, this remains set to true meaning all content now matter what is shown to the user is hidden from the screen reader rendering the shown content invisible to a screen reader. This is unfortunate but it demonstrates that accessibility is hard, time pressures and unfamiliarity with accessibility means that mistakes like this can and do creep in. The fix however is easy and that’s ensuring the value is toggled in line with the showing and hiding of the content.

For the nation’s top breakers, progressively enhancing a complex image using semantic HTML points to a technique you can take away for your digital projects. 

The power in the web is its adaptability. Content created with semantic HTML means content doesn’t just need to look good, but it needs meaning and that is what semantic HTML provides. Don't just make your content look good visually, make your content have meaning. Semantic HTML for the win!

Thanks for listening, I'm Ross I'm director of CANAXESS a digital accessibility company based in Australia but working globally. 
We work with lots of interesting teams around the globe and if you're interested in working together, reach out to us at hello@canaxess.com.au that's "C A N A X E S S".


  </p>
</details>