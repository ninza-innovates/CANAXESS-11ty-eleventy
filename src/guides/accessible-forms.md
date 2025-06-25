---
permalink: "infocard/forms/index.html"
layout: guides.liquid
title: Accessible form design
PDF-link: "../../download/AccessibleForms.pdf"
PDF-size: "57 kb"
PDF-image: "_assets/images/2l.png"
subtitle: These principles when followed together will make an HTML form accessible up to Web Content Accessibility Guidelines 2.1 (WCAG2) AA.
changefreq: monthly
priority: 0.9
---
## Principles of accessible forms ##
To make an accessible form:

<h3 id="associate-labels">1. Associate labels to form controls <a class="header-anchor" href="#associate-labels">#</a></h3>

A programmatically identifiable relationship helps people navigating with a screen reader.

Labels provide a visual and programmatic link to understand the type of information required. When a label is programmatically associated to a control using the `FOR` and `ID` attributes, the screen reader will announce the type of form control and the label text. 

Not providing this relationship information will render the form very difficult to use for screen reader users.

```html
<label for="username">Username</label>
<input type="text" id="username">
```

<h3 id="group-controls">2. Group related controls together <a class="header-anchor" href="#group-controls">#</a></h3>

The `legend` and `fieldset` elements can be used to provide meaning to related controls.

They provide a convenient way to group related information and allow relationships between controls to be identified in a non-visual way. When a form control inside a fieldset receives focus from a screen reader, the legend element is announced followed by the control label, and lastly the control type.

```html
<fieldset>
<legend>Mailing Location</legend>
<label for="street_address">Street Address</label>
<input id="street_address" type="text">
```

In this example, the screen reader JAWS will announce "Mailing Location, Street Address, Input type and text"

<h3 id="hide-label-css">3. Use CSS to hide a label if necessary <a class="header-anchor" href="#hide-label-css">#</a></h3>

Sometimes you may not be able to provide a visible label for form controls.

An offscreen CSS technique allows a label to be associated to a form control and to remain invisible by rendering it offscreen. 

Do not use the `display:none` or `visibility:hidden` styles as this will stop the text from being displayed in the screen reader, instead use an off-screen CSS technique.

```css
.sr-hidden
{
position:absolute;
left:-10000px;
top:auto;
width:1px;
height:1px;
overflow:hidden;
}
```

```html
<label class="sr-hidden" for="search">Search by first name</label>

<input id="search" type="text">
```

<h3 id="identify-required-controls">4. Clearly identify required controls <a class="header-anchor" href="#identify-required-controls">#</a></h3>

People may not know what form controls to complete, help them out with what to fill in.

It may not be obvious which controls are mandatory and which are optional. Providing this information in the label will help people. Avoid using the asterisk character to identify mandatory controls, screen readers will announce "star" and if it uses the same font size as the label text can be difficult to identify.

Additionally, provide a description how to identify required form controls before a user begins filling out the form, i.e. Required fields are identified by the word "required".

```html
<label for="surname">Surname (this is required)</label>
```

<h3 id="dont-trigger-on-focus">5. Don't trigger extra content on focus <a class="header-anchor" href="#dont-trigger-on-focus">#</a></h3>

Loading new content when a control has focus is very disorientating if people can't identify the change.

A control which triggers the display of extra content when receiving focus is very disorientating, especially if this action isn’t explained prior to focusing on the control. Always provide a clear way for a user to trigger an update using link and HTML elements only. Consider using a button with clear text to trigger the change.

```html
<button name="button">Update content</button>
```

<h3 id="provide-data-formats">6. Provide data formats in the label <a class="header-anchor" href="#provide-data-formats">#</a></h3>

It may not be obvious what data format or data type is required.

Input restrictions such as the maximum length of characters or entering numbers only, may not be immediately obvious when filling out a form field. Providing these instructions upfront within the label element will reduce errors.

```html
<label for="dob">Date of birth (dd/mm/yyyy)</label>

<label for="note">Extra Notes (maximum length 50 characters)</label>
```

<h3 id="disabled-attribute">7. Do not use the disabled attribute <a class="header-anchor" href="#disabled-attribute">#</a></h3>

The `disabled` attribute affects the screen readers ability to focus and announce form content.

The `disabled` attribute will stop the control from receiving focus and will make it difficult for a screen reader user to understand any prefilled readonly information. The `readonly` attribute allows screen reader focus whilst preserving the original value.

```html
<input id="searchCriteria" readonly value="search" type="text">
```