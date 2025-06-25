---
tags: ["posts"]
title: How to create a session timeout using ARIA, CSS and JQuery
subtitle: A session timeout message is a common UI design pattern in web applications. A robust accessible timeout message pattern which conforms to WCAG 2.1 can be created using two WCAG 2.1 success criteria.
showDate: true
date: 2021-05-24
dateFormat: 24 May 2021
customImage: true
customImageURL: "sessiontimeout.png"
---
A session timeout message is a common UI design pattern in web applications where authenticated users are logged out after a period of inactivity. 

WCAG 2.1 provides two relevant success criteria for this pattern. Success criteria [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html) ensure users with disabilities are given adequate time to interact with web content whenever possible, and success criteria [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html) make users aware of important changes in content that is not given focus. 

A robust accessible timeout message pattern which conforms to WCAG 2.1 can be created when these two success criteria are combined.

**Check out the [full example on Glitch.](https://glitch.com/edit/#!/session-timeout-aria-html-css?path=script.js%3A34%3A46)**

## The term "status message"

Status message as a term is defined in WCAG and can only be applied to [clearly defined examples](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html#status-examples). Things like search results loading into the same page, or validation messages being shown, basically actions which add text to the screen without a full-page refresh and without focus are status messages.

[Non-status messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html#excepted-examples) however could be triggering the screen to reload, or displaying a message in a dialog box. These are not status messages since in these two instances the dialog has taken focus or a change of context has occurred - a screen reloading for example, causing the screen reader to be refreshed.

## The markup

Two live regions are created on the page using `DIV` elements with `role=alert` for the alert indicating the page is 20 seconds from timing out and the session ending and `role=status` for a status message indicating the completion of the timeout.

```html
<div id="timeoutWarning" role="alert">
	<div class="hidden">
		<h2>Do you wish to continue?</h2>
		<p>Your session is 20 seconds away from ending, please press the spacebar to continue.</p>
	</div>
</div>

<div id="timeoutEnd" role="status">
	<div class="hidden">
		<h2>Your session has ended</h2>
		<p>You did not indicate you wished to continue and your session has ended.</p>
	</div>
</div>
```

20 seconds as a minimum for extending the timeout was based on clinical experience for [Success Criterion 2.2.1: Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html#intent).

> 20 seconds to hit 'any switch' is sufficient for almost all users including those with spasticity. Some would fail, but some would fail all lengths of time. A reasonable period for requesting more time is required since an arbitrarily long time can provide security risks to all users, including those with disabilities, for some applications.

## Don't hide the entire live region

An approach initially taken was hiding both parent `div` containers using the CSS property `display:none` and toggling each style showing each message when appropriate. 

However showing an entire hidden live region container triggered inconsistent output in screen readers. The `role=alert` message would always be announced but `role=status` wouldn't. 

This could be overcome by adding a fallback `aria-live="assertive"` attribute but this begins moving away from the spirit of accessibility into the territory of making it work using whatever live region works.

This Irregular screen reader behaviour could have just been on one screen reader, but testing it on both JAWS and NVDA and in the browsers Chrome and Firefox showed (or in this case not) the same result, and this is [confirmed against the guidance](https://www.w3.org/TR/WCAG20-TECHS/ARIA19.html#ARIA19-ex1) that a live region container must always exist on the page on startup to work correctly.

## Hidden from the accessibility DOM

Whilst the live region existed on the page, using the `display:none` CSS property effectively removed it from the Accessibility DOM and for the screen reader to identify and communicate its changed state.

```css
.hidden
{
    display:none;
}
```

Toggling the `display:none` CSS property will make the live region visible but won't consistently trigger the output to the screen reader. 

This was overcome by only toggling the visibility of the content within the live region container and showing it when necessary, since it is the content that is changing not the container for the content.

## A little JQuery for interaction

Using JQuery to show the warning message at 20 seconds enables an event handler to become active only when the warning is shown since we don't want to trap for the spacebar all the time.

```javascript
if(timeLimit==20)
{
	
	$("#timeoutWarning").addClass("alert alert-warning");
	$("#timeoutWarning>div").removeClass("hidden");

	$("body").keypress(function(e){
		if(e.keyCode == 32){
			clearInterval(timerObject);
			$("body").off("keypress");

			$("#timeoutWarning").removeClass("alert alert-primary");

			$("#timeoutWarning>div").addClass("hidden");
			$("#timeoutEnd>div").addClass("hidden");
			$("#start_countDown").addClass("hidden");
		}
	});
}
```

If the spacebar (key code 32) is pressed the timer event ends removing any countdown messages from display. 

If however the spacebar isn't caught, and the timeout ends the warning message is hidden by toggling the CSS class (just the message not the entire container) and replaced with a status message indicating the progress of the timeout is complete. 

The user can then be logged out or redirected or whatever the action you want the user to follow up with.

The spacebar was trapped only to ensure any hotkeys for the screen reader aren't affected, the keyboard commands for JAWS and NVDA identify the spacebar alone as not being a hotkey and less likely to override screen reader keys.

## Why two different aria live region roles?

The first message is a warning of an approaching timeout within 20 seconds whereas the next message describes the users session has timed out and is part of a complete process and so `role=status` is used. 

We're free to user any aria roles of `log`, `status` or `alert` in whichever combination but by going against the WCAG 2.1 guidance means we're at risk of introducing unexpected behaviour in the screen reader and assistive technology.

## Key takeaways

Status messages are a clearly defined term in WCAG 2.1. Use the appropriate aria roles for warning of an approaching timeout `alert` and the completion of a timeout `status`. 

Using `display:none` allows us to work with the behaviour of the screen reader to ignore text until we want it to be outputted, but crucially only hide the text of the timeout message not the entire container to prevent inconsistent screen reader behaviour from occurring. 

**Check out the [full example on Glitch.](https://glitch.com/edit/#!/session-timeout-aria-html-css?path=script.js%3A34%3A46)**

## Screen reader results

<div class="table-responsive">
    <table class="override-width" summary="Screen reader compatibility">
    <tr><th>&nbsp;</th><th>NVDA 2019</th><th>JAWS 2021</th><th>VoiceOver</th><th>TalkBack 9.1</th><th>Voice Assistant</th></tr>
    <tr><td>Chrome 90</td><td><span class="p">pass</span></td><td><span class="p">pass</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td></tr>
    <tr><td>Firefox 88</td><td><span class="pt">partial</span></td><td><span class="pt">partial</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td></tr>
    <tr><td>Edge (Chromium) 90</td><td><span class="p">pass</span></td><td><span class="p">pass</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td></tr>
    <tr><td>Internet Explorer 11</td><td><span class="f">fail</span></td><td><span class="f">fail</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td></tr>
    <tr><td>Safari iOS 14.3</td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td><td><span class="p">pass</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td></tr>
    <tr><td>Chrome Android 10</td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td><td><span class="na">n/a</span></td><td><span class="p">pass</span></td><td><span class="pt">partial</span></td></tr>
    </table>
</div>

* Voice Assistant in Chrome Android 10 does not announce `<h2>` within live region container
* NVDA and Firefox does not announce `<h2>` within live region container for `role="alert"`
* JAWS and Firefox does not announce the live region container with `role="status"`
* Internet Explorer 11 does not announce any of the live region containers