---
permalink: "infocard/chatbots/index.html"
layout: guides.liquid
title: Accessible chatbot design
PDF-link: "../../download/AccessibleChatbots.pdf"
PDF-size: "72 kb"
PDF-image: "_assets/images/3l.png"
subtitle: These principles when followed will make the web-based user interface of a bot accessible up to Web Content Accessibility Guidelines 2.1 (WCAG2) AA.
changefreq: monthly
priority: 0.9
---
## Principles of accessible bots ##
To make a bot accessible:

<h3 id="platform">1. Choose a customisable platform <a class="header-anchor" href="#platform">#</a></h3>

Creating an accessible interface means getting as close as possible to building in HTML and CSS.

Products which don’t allow much control of the HTML will affect the overall accessibility of the bot. It can also be difficult to make an accurate decision when buying a bot and understanding accessibility support, and especially important don’t accept the vendors words alone without independent testing.

When trialling bots request a test account to be created which will allow you to conduct proper evaluation with a range of accessibility testing tools. **Use CANAXESS as your external web accessibility provider to independently test any content being displayed.**

<h3 id="navigated">2. Conversation history can be navigated <a class="header-anchor" href="#navigated">#</a></h3>

All conversation history must be findable when navigating from the keyboard.

The entire conversation must be navigable via the keyboard with and without assistive technology running.

Add the `tabindex` attribute to the conversation container to make it keyboard focusable and scrollable using the arrow keys.

```html
<section id="conversation-text-body" 
aria-live="polite" tabindex="0" 
aria-label="Chatbot conversation">
</section>
```

<h3 id="identified">3. Provide conversation identification <a class="header-anchor" href="#identified">#</a></h3>

Screen reader users may not have access to visual clues and rely on text cues instead.

Screen reader users may use the chatbot in a non-visual way and each conversation block must be identifiable, is each message spoken by the bot or the user.

The `aria-label` attribute is used on each section element to provide a unique label of where the message originated, added to this is the time to allow a user to understand the sequence of the messages.

```html
<section aria-label="The bot said 2:41 PM">
What can I help you with?
</section>

<section aria-label="You said 2:42 PM">
I'd like more information on my home loan
</section>
```

<h3 id="dynamic-content">4. Add support for dynamic content <a class="header-anchor" href="#dynamic-content">#</a></h3>

Content which updates regularly must have accessibility attributes added.

Each conversation block must be enclosed within a single parent container, which has the aria-live attribute and the value polite. As each question and reply is appended to the container, the aria-live attribute announces the change to the assistive technology.

This method of announcing onscreen changes means only the most recent message is announced, not the full conversation history.

```html
<section aria-live="polite">

<section aria-label="You said 2:42 PM">
What can I help you with?
</section>

</section>
```

**Note. Only announce the updated content when the user is idle**. If updates are announced too frequently they can become a a distraction, hence use of the `polite` value. Polite causes the screen reader to pause announcing the text until other audible notifications have ended.

<h3 id="responses">5. Understand the range of bot responses <a class="header-anchor" href="#responses">#</a></h3>

Some bot frameworks can send a variety of message formats and these must also be accessible.

The Microsoft Bot framework allows rich media cards to be sent as replies. These cards mix text, buttons and images. The principles of accessible design should be followed and applied to these elements to ensure accessibility is maintained over every response from the bot.

Refer to our Accessible Forms information card for making HTML form elements accessible.

<h3 id="skiplink">6. Provide a skip link <a class="header-anchor" href="#skiplink">#</a></h3>

Provide a way to bypass all page links easily and navigate direct to the chatbot.

Bots are generally located in the lower right of the screen and this can be difficult for keyboard users. When the bot is further down in the page markup, there may be several links to tab through before focus reaches the chatbot. If the page has many links this repeated tabbing can become frustrating.

A skip link is an in-page anchor which is displayed as the first page link, when the link is activated it takes user focus to the chatbot bypassing other page links. The `href` value of the link uses the `ID` of the HTML element containing the bot.

```html
<a href="#chatbot">Skip to Chatbot</a>
```

<h3 id="other-factors">7. Consider other factors <a class="header-anchor" href="#other-factors">#</a></h3>

Follow accessibility principles for other aspects of bot design to ensure what is being created has the best accessibility support.

* Choose a relative font size which allows the text size to shrink and grow
* Use an accessible colour contrast
* Ensure the bot is displayed using responsive techniques
* Use language that is appropriate for your audience