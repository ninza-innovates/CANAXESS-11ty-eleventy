---
permalink: "infocard/essentialsix/index.html"
layout: guides.liquid
title: Essential six accessibility
PDF-link: "../../download/EssentialSix.pdf"
PDF-size: "305 kb"
PDF-image: "_assets/images/4l.png"
subtitle: These principles when followed address the six most common accessibility failures identified in Web Content Accessibility Guidelines 2.1 (WCAG2) AA.
changefreq: monthly
priority: 0.9
---
## Principles of accessible content ##
To make content accessible:

<h3 id="low-contrast-text">1. Low contrast text <a class="header-anchor" href="#low-contrast-text">#</a></h3>

The colour contrast of text set against a background colour must be at a minimum 5.4:1.

People with low vision face challenges in reading text lacking contrast with the background, especially when combined with colour vision deficiencies. 

To enhance readability, ensure a minimum contrast ratio between the text and background exists, this helps users with limited colour perception and individuals who are completely colourblind.

Use colour <a href="https://www.tpgi.com/color-contrast-checker/">contrast checker tools</a> to verify the accessibility of colours in use.

<h3 id="missing-alt-text">2. Missing alternative text for images <a class="header-anchor" href="#missing-alt-text">#</a></h3>

Screen reader and other assistive technology users use the alternative text to understand descriptive images non-visually.

`ALT` text helps individuals with visual perception challenges by providing alternative descriptions of visual content. Assistive technology can audibly read the text, visually present it, or convert it to braille. 

For instance, synthesized speech can read the text alternative for a person unable to see an image. 

When describing an image with ALT text, provide concise contextual information instead of literal descriptions. Focus on the image's relevance and what it depicts.

<h3 id="empty-links">3. Empty links <a class="header-anchor" href="#empty-links">#</a></h3>

Avoid empty and unclear link text. Ensure link text can be understood when read on its own.

Assist users in understanding the destination of each link. Where possible, use link text that clearly indicates the purpose of the link without needing additional context. 

Assistive technology allows users to access a list of links present on a webpage. By using meaningful link text, it can better help users select links from this list. 

The link's text should ideally describe the purpose of the link. In cases where the link leads to a document or web application, the name of the document or web application alone is sufficient to convey the link's purpose.

<h3 id="missing-form-labels">4. Missing form input labels <a class="header-anchor" href="#missing-form-labels">#</a></h3>

Input controls without a label are difficult to navigate with assistive technology. Labels can be created using the `FOR` and `ID` attributes, or the `aria-label` or `aria-labelledby` attributes on the input control.

A label and a form control should be associated with each other. Web browsers provide the label as a larger clickable area, for example, to select or activate a control. 

It also ensures that assistive technology can refer to the correct label when presenting a form control.

Whenever possible, use the `<label>` element to associate text with form elements explicitly. The `FOR` attribute of the label must exactly match the `ID` of the form control.

```html
<label for="dob">First name:</label>
<input type="text" name="dob" id="dob">
```

The `aria-label` attribute can be used to identify form controls where it is impractical to provide a visible label. 

```html
<input type="text" name="dob" aria-label="date of birth">
```

The `aria-labelledby` attribute can also be used to identify form controls where it is impractical to provide a visible label. 

The `ID` of the element containing the text is used as the value of the `aria-labelledby` attribute.

```html
<input type="text" name="dob" aria-labelledby="dob">
<span id="dob" type="submit">Search</span>
```

<h3 id="empty-buttons">5. Empty buttons <a class="header-anchor" href="#empty-buttons">#</a></h3>

Ensure graphic and icon buttons have a text alternative in the button element or via the `aria-label` or `aria-labelledby` attributes.

Whenever possible, use text within the `<button>` element to provide a label. The text must be contained within the opening and closing tags.

```html
<button>Press me</button> 
```

The `aria-label` attribute can be used to identify buttons where it is impractical to provide a visible label.

```html
<button aria-label="Press me"></button>
```

The `aria-labelledby` attribute can also be used to identify buttons where it is impractical to provide a visible label. 

The `ID` of the element containing the button text is used as the value of the `aria-labelledby` attribute.

```html
<button aria-labelledby="btn-label"></button>
<span id="btn-label">Press me</span>
```

<h3 id="missing-document-language">6. Missing document language <a class="header-anchor" href="#missing-document-language">#</a></h3>

The `lang` attribute helps assistive technology load correct language settings. Ensure the `lang` attribute value is the same as the language of the web content.

Assistive technologies and web browsers can improve the accuracy of text content by identifying the language of the web page. 

```html
<html lang="en">
```

Speech synthesizers can adjust to the specific pronunciation and syntax of the language used, resulting in appropriate accent and correct pronunciation when reading the text aloud.

In addition, the language of a web page can also have long-term benefits for future technology development. 

Users unable to translate between languages themselves can rely on machines to translate unfamiliar languages, thanks to the language identification feature.


