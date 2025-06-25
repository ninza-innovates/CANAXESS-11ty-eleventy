---
tags: ["posts"]
title: Stopping the bots with Javascript
subtitle: CAPTCHA is a convenient go to technique for stopping spam, but it's also inaccessible. Using Javascript and replacing submit buttons can be an effective alternative which maintains your sites accessibility.
showDate: true
date: 2020-09-14
dateFormat: 14 September 2020
---
## Quick Summary

_CAPTCHA is a convenient go to technique for stopping spam, but it's also inaccessible. Using Javascript to remove critical form attributes, loading form content dynamically and replacing submit buttons can be an effective alternative which maintains your sites accessibility._

<hr>

Previously I had used .NET MVC as the framework for the CANAXESS website. The [contact form](https://www.canaxess.com.au/contact/) had to be accessible and couldn’t rely on any plugin which would adversely affect a user's ability to contact us. The form had a CSS hidden form field using the honeypot technique and server side logic rejecting all submissions if the form field contained data. 

The theory being bots can't understand what's a legitimate field and what's not and so the bot identifies and completes all input fields and sends the form. If the field contains data, we assume that as a user hasn’t been able to navigate to the hidden form field, a user hasn’t submitted the form and discard the entire input.

Honeypot techniques are always identified as an effective way to stop spam emails and for me the technique worked ok to reduce the spam to a manageable level a day. Within my mail client I would select all the spam emails and delete them on mass, all pretty straight forward if time consuming.

<h2 id="moving-to-netlify">Moving to Netlify <a class="header-anchor" href="#moving-to-netlify">#</a></h2>

As part of changing infrastructure, the CANAXESS website was moved to Netlify which meant the existing spam filtering technique relied upon would have to be rethought as the previous site was built in .NET and hosted in a .NET environment. 

Initially I opted to go for no spam protection and just see how it went. As you'd expect the spam posts came thick and fast. 

<h2 id="using-honeypot">Using a honeypot <a class="header-anchor" href="#using-honeypot">#</a></h2>

Netlify provide a honeypot feature that follows the same technique of using a hidden input field and if this is prefilled all emails get sent to the spam folder. 

```html
<form name="contactSubmission" id="contactSubmission" data-netlify="true" 
netlify-honeypot="bot-field">
<input class="actual-hidden" name="bot-field" tabindex="-1">
```

The technique worked very effectively; no legitimate emails were ever reaching the regular email folder. 

But the spam folder told another story. There were pages of spam results, where previously I could select all emails on mass and delete, the Netlify approach meant only 10-20 emails were returned at a time with paging used to move to the next ten emails. There was no mass delete feature and I had to delete individual ones.

This was incredibly time consuming and tedious. I wrote a Javascript bookmarklet which I hoped would make it easier to check all checkbox controls on the page and delete all records. 

Unfortunately, the page logic wasn’t recognising my bookmarklet as having physically interacted with each control and wouldn’t allow selection of all emails on mass.

I also couldn’t be sure if any emails in the spam folder were false positives - incorrectly identified emails, which meant I had to trawl through all emails to confirm.

<h2 id="discounting-captcha">Discounting reCAPTCHA <a class="header-anchor" href="#discounting-captcha">#</a></h2>

Netlify provide Google reCAPTCHA and I initially did consider its use as the emails were increasing daily. 

However, the perception of a web accessibility company using a known inaccessible method for people to contact them wasn’t a good look. 

I've written previously about how terrible a technique [CAPTCHA is for undermining the accessibility of a website](../the-problem-with-captcha/) and thought if I couldn’t solve this problem what hope is there for others.

I decided to program my way out of it.

<h2 id="less-attractive-form">Make the form less attractive to bots <a class="header-anchor" href="#less-attractive-form">#</a></h2>

I needed to make the contact form look less like a contact form and less attractive to bots. I began removing the `method` attribute on the form element. If there is no `method` attribute, I figured the form couldn't be sent.

```html
<form name="contactSubmission" id="contactSubmission" data-netlify="true" 
netlify-honeypot="bot-field">
```

Unfortunately, even though the attribute was removed, Netlify applied the method attribute back onto the form as the site was deployed and this was something I couldn’t control. 

```html
<form name="contactSubmission" id="contactSubmission" method="post">
```

<h2 id="jquery-remove-attribute">Using jQuery to remove an attribute <a class="header-anchor" href="#jquery-remove-attribute">#</a></h2>

I decided to use Javascript (jQuery) to dynamically remove the `method` attribute _after_ the page had loaded. Using the jQuery ready event, the form element is selected, and the `method` attribute is removed.

```javascript
$(function(){
    $("#contactSubmission").removeAttr("method");
});
```

I then required a way to add the attribute back onto the form element before sending. I had to add it back in a sequence to make sure the attribute exists before the form is sent otherwise the form will error out and the user will encounter a broken contact form, hardly ideal!

<h2 id="replacing-submit-button">Replacing the submit button <a class="header-anchor" href="#replacing-submit-button">#</a></h2>

Additionally, I had decided to remove the `submit` button as well. Figuring if there was no `submit` button the form can't be submitted via a headless browser (if spammers used that technique) as it looks less like a contact form and more like a collection of input fields. 

Form submission would take place via a regular `button` element programmatically only.

```html
<input type="button" value="Contact CANAXESS" 
class="contactForm-button submit">
```

<h2 id="adding-the-method-attribute">Adding the method attribute on submit <a class="header-anchor" href="#adding-the-method-attribute">#</a></h2>

The regular button had a `click` event handler which added the method attribute and value back onto the form element. 

When the button is clicked the attribute is added, but there may be instances where the timing of script elements happens contrary to how I wanted it to. 

To overcome this, I added a timer interval. This repeatedly checks the form element for the `method` attribute every 100 milliseconds, if no `method` attribute exists the form isn't submitted.

```javascript
$("input.contactForm-button").click(function(){
        $("#contactSubmission").attr("method", "post");
    
        var checkExist = setInterval(function(){      
            var attr = $("#contactSubmission").attr("method");
            if (typeof attr !== typeof undefined && attr !== false)
            {
                $("#contactSubmission").submit();
                clearInterval(checkExist);
            }
        }, 100);
    });
```

Form submission only occurs when the `method` attribute exists, and this would occur programmatically. When the form had been submitted the interval timer would end. 

`clearInterval(checkExist);`

I thought this was a pretty effective way of over engineering a contact form to stop bots, but my confidence wasn’t to last. I came back a few hours later to find spam emails collecting again.

<h2 id="submission-by-http">Form submission is happening via HTTP <a class="header-anchor" href="#submission-by-http">#</a></h2>

And then it dawned on me, bots probably aren’t even visiting the page via the browser, they don’t care for all the jQuery script which runs on the clientside removing elements. 

The method attribute exists when the page is loaded, and from there it’s a simple scrape of the HTML and submission of the form via a HTTP post without ever interacting with the page.

And it was this realisation which then made me identify the technique that would not just slow down the spam emails but stop them. **Since applying this technique I've had no emails, none, zilch.**

<h2 id="separating-the-page">Separating the page from the form <a class="header-anchor" href="#separating-the-page">#</a></h2>

The technique is loading the form fragment via Javascript after the page has loaded. Realising spam bots probably aren’t using a headless browser to navigate the contact page and submit the form I instead made the form only appear when the page has been loaded from a browser. 

The contact page rendered in the browser is one page, but is in reality is composed of two parts. The main page with a placeholder for the form component and the form content itself.

```html
<div id="formContainer"></div>
```

<h2 id="on-page-load">Loading the form on page load <a class="header-anchor" href="#on-page-load">#</a></h2>

When the page is loaded, a jQuery ready event loads the additional form fragment into the form container `DIV` almost immediately. 

The form fragment page is never identified by a bot as the initial page the bot is seeing has no form element, this is only loaded after the page has loaded through Javascript.

```javascript
<script>

$(function(){
    $("#formContainer").load("formfragment.html");
});

</script>
```
<h2 id="summary">In summary <a class="header-anchor" href="#summary">#</a></h2>

The technique does require Javascript to operate. As Javascript has become an accepted part of web development I think it’s a realistic solution to stopping spam in certain specific situations. 

The other technique of using honeypot fields is always problematic as from my experience it wasn’t that effective. 

Spam would still find a way through and if I'm honest the honeypot technique can only be classed as a spam limiter, reducing the instances of spam getting through. 

Whilst using CAPTCHA would work and be a quick fix, its use is undermining making the web accessible for people with disabilities. 

By removing the contact form from being rendered as part of a regular HTTP get request, its visibility to bots appears to be significantly reduced and therefor reduces (and in my instance has stopped) bots from being able to submit spam through the contact form.

<h2 id="things-to-try">Things for you to try <a class="header-anchor" href="#things-to-try">#</a></h2>

Regardless of the framework your site is using, if your contact form is being compromised by spam try these approaches:
* Separate the page and the form
* Load the form after the page has loaded
* Only submit forms programmatically using `button` elements
* Remove the `method` attribute on forms and add them as part of the form submission
