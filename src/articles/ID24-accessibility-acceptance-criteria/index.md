---
tags: ["posts"]
title: Mastering Accessibility Acceptance Criteria for better user stories
subtitle: Our recorded presentation for ID24 where we explained how the challenge of including accessibility guidance in user story developement can be helped with Accessibility Acceptance Criteria.
showDate: true
date: 2024-09-29
dateFormat: 29 September 2024
customImage: false
---

<div class="videoWrapper">	
<iframe src="https://www.youtube.com/embed/2p8-DKsRx4A?si=ra28DRUkq_267w9n" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Embedded youtube video"></iframe>
</div>

<details>
  <summary><h2>Video transcript</h2></summary>
  <p>
  
Documenting accessibility requirements for user stories is hard. 

When trying to describe which accessibility behaviour to build into the early requirements, it either becomes meticulously documenting all the relevant WCAG criteria for the feature or mentioning "refer to WCAG" and hope the accessibility gods look favourably on the developer crafting the feature.

Onscreen is a slide showing several people all shrugging their shoulders demonstrating uncertainty.

The people creating the user stories are Business Analysts who are confident translating business requirements into work tasks but understandably have limited knowledge of WCAG. They know it’s important but translating that importance into actionable detailed criteria which a new feature must demonstrate is unfair, it’s unfair to put so much emphasis on BAs to ensure the right accessibility criteria are highlighted when they're not experts in WCAG.

The people with this expert knowledge are accessibility specialists, but these specialists are also so few in large organisations that its impractical for every user story to have an accessibility specialists’ oversight and tick of approval of what criteria to include.

The accessibility specialists tend to be a small team supporting many other teams all doing a range of features with numerous user stories simultaneously. This model of operating works well with 2 teams as its usually quite manageable to provide constant focused accessibility advice, but with three teams it becomes challenging and adding a 4th and 5th team to the mix well it's not a great outcome, teams are trying to create numerous bits of functionality with increasingly limited resources and the delivery of new features isn’t going to slow down whilst they wait for this detailed advice to be provided.

The accessibility team's ability to provide timely and knowledgeable advice is impacted. As teams grow ever larger it becomes increasingly difficult to detail good accessibility practice.

Our collective best accessibility documentation efforts begin to break down into copy and paste from previous user stories, and a lot of holding our heads in our hands when a feature is inevitably created with less than stellar accessibility. 

What if there was another way, that balanced the needs to document accessibility but not be so onerous for the BAs creating the user stories. Well, there is!

Over several months we co-created accessibility acceptance criteria with a supermarket. And they've been used incredibly effectively for all user story development. These accessibility acceptance criteria are applied when user stories are created. 

And we flipped the perspective on how to provide detailed accessibility advice. 

Instead of being developer-focused describing in intricate detail which WCAG guidelines to include, they’re BA-focused 

and describe key behaviours the finished feature needs to display 

but the criteria don’t specify how to do it

They describe an outcome which the feature must demonstrate

They define the boundaries of a user story and what to focus on for the developer and are used to confirm when a story is complete and ready to be developed. They're written in simple language and because of this they're more easily understood by all members of a team who have different expertise and varying levels of fluency in each other’s role.

The intention was accessibility criteria for a developer could be created by a BA.

In theory this all sounded great, a new way to document accessibility without having to wade through WCAG! but there are still 50 WCAG success criteria to document in some capacity. How to condense all of that? 

We didn’t want to just replicate WCAG in another format, so our starting point was to identify and group common accessibility failings, those issues which crop up again and again from our testing and internal accessibility reports.

We added broad criteria like keyboard inaccessible content, unclear focus effects and form control labelling. This gave us 20 acceptance criteria, which is still quite a lot, and this was whittled down further to 10. 

We settled on 10, because if there's less than 10 criteria we're probably missing out key accessibility requirements whereas greater than 10 it becomes a burden to apply. 10 seemed to be that sweet spot.

These 10 issues were common failing, high impact criteria identified from the prior internal work of the team which align to one or more WCAG success criteria. 

They are:
1.	Keyboard Accessibility
2.	Content on hover
3.	Page title
4.	Visible focus
5.	Semantic markup used appropriately
6.	Form control labelling and inline errors
7.	Screen reader
8.	Zoom & resize
9.	Alt text
10.	Orientation & reflow

Each criteria uses the behaviour driven development format describing how the desired behaviour is described. The BDD format puts the user at the centre of the story development, describing a type of user, something they’re doing and the expected output. And it helps reduce the documenting of requirements to build gap between the business analyst and other technical users like developers.

This format usually has two sections:

The Narrative – This is where the purpose and the value of the feature are explained.

User Acceptance Criteria – This is where the scenarios of a feature are explained.

Given I am a: Type of user
When I encounter: The type of content being created
Then I can: The expected outcome

The main advantage of using the BDD approach for user story writing is that it improves team collaboration. The user story explains the requirement in non-technical language when delivering the feature. 

Because it uses simple language, the developer can understand it as well as the BA, tester and product owner. The development team can refer to it to understand the requirements in an easy-to-understand way helping to reduce assumptions and the often back-and-forth communication between them and an overstretched accessibility team.
Applying this format to accessibility acceptance criterion number 1 keyboard accessibility gives:

“Given I am a keyboard user when I encounter interactive content then I can control it solely from the keyboard.”

This identifies a keyboard user and the type of content which the user interacts with. Things like buttons and links and the outcome for those is that they must be controllable from a keyboard.

This maps directly to WCAG success criterion 2.1.1 keyboard and is easier to digest and understand, make interactive content usable from the keyboard is a lot easier to understand than simply providing the link to the success criterion. 

A lot of the detail in this success criterion including specific timings for individual keystrokes and exceptions has been left out as we wanted something that was simple to understand and apply. If more detail is added it potentially slows down the delivery timeframe with teams having to understand and unpick the detail. We didn’t want to try and boil the ocean and document every possible situation for keyboard use, its balancing to providing broad guidance with just enough detail.

If we attempted to document all the detail in 2.1.1 then really, we've not improved things we would have duplicated WCAG. We didn't want to place the burden of having to decoding WCAG on the shoulders of the BA’s or developers when they don't really know it. This approach we found is easy to understand, digest and apply.

The accessibility acceptance criteria combine detail both global accessibility issues and localised accessibility issues. AAC 3, AAC 4 and AAC 5 describe an outcome which probably wouldn’t be relevant for many user stories. Accessibility acceptance criteria number 3 page title ensures a page is titled appropriately and is understandable. Accessibility acceptance criteria number 4 visible focus ensures a user's keyboard focus is always visible wherever they are on the page. And Accessibility acceptance criteria number 5 Semantic markup is used appropriately ensures lists of items, headings and tables all use the correct semantic HTML elements to describe meaning. It's unlikely these Accessibility acceptance criteria would be applied for every use story as the features they're describing are more global in nature.

I mentioned earlier that 10 accessibility acceptance criteria were created, but taking it account the global nature of 2 possibly 3 criteria, and how they probably won't be referenced regularly, means its 7 issues to be applied. This is quite a reasonable expectation for business analysts to understand and apply. 

If we look at Accessibility acceptance criterion 6 form control labelling and inline errors it describes the requirement for labelling form controls and inline errors appropriately. Instead of multiple acceptance criteria for different parts of the form this combines several success criteria into one statement. 

“Given I use a screen reader when I focus on form controls then I can understand what type of data is required.”

This maps to success criteria 1.3.1 Info and Relationships for accessible form labelling and 3.3.1 Error Identification.

This is centred on a screen reader user. So, if a form feature is being created and the screen reader can output form labels and error messages, there is a greater likelihood it's built correctly for other assistive technologies to understand. We assume that providing a screen reader specific user story will also mean we’ve supported other assistive technologies.

There is an expectation that as our development teams were building out a feature, they’re performing rudimentary screen reader testing. It doesn’t stop them from coding in incorrect behaviour but if they’re able to achieve the output determined by the accessibility acceptance criteria then we know we're developing form labelling and error messages correctly.

Accessibility acceptance criteria number 7 screen reader describes the requirement that any client-side screen updates are output by the screen reader. The technology the organisations web app was being created in was a single page application, we knew previously these sorts of applications had problematic issues when content is updated on the client side without a hard refresh. 

So, we wanted to create a requirement that captures everything which updates once the page has loaded since these are often pain points where the change is only provided visually. Trying to capture all the complexity and nuance resulted in this requirement to be announced by the screen reader.

Using the same format for this criterion gives:

"Given I use a screen reader when a visual change occurs on the page then I can understand the change audibly. E.g. search results displaying while searching, errors displaying after activating submit button".

This identifies a screen reader user, the situation being encountered which is when something changes visually. And the outcome from that change should be output by the screen reader.

This maps to 4.1.2 name, role value. It’s a shorthand way for trying to distil all the technical detail in the WCAG criterion into something easy to understand.

Accessibility acceptance criteria number 9 ALT text describes the requirement that any descriptive images be understood non-visually. 

Using the familiar format for this criterion gives:

"Given I use a screen reader when I encounter a descriptive image then I can understand the non-visually. 
This describes a screen reader user, the situation which is encountered a descriptive image. And the outcome should be descriptive images can be understood because a text alternative is provided.

This criterion maps to 1.1.1 non-text content. It's prefaced with ALT text as the technique to apply but really there is scope for any text alternative for descriptive images. We found most of the time it's just by providing ALT text but equally other methods which can do the same thing are included (although they're not mentioned).

Whilst we were pleased with these outcomes, I stilled struggled with this list of 10 items. There was a sense of they seem basic is there more to it, should there be more to it?

I've read lots of articles where people have baked in accessibility requirements early and everything becomes a well-oiled machine. But what the articles often leave out is the development teams are small, and the accessibility team is tightly integrated into the delivery process, and it makes it far easier to collaborate. 

When there are several teams, each creating features simultaneously, this utopian model of documenting and building in accessibility and close collaboration becomes increasingly difficult. 

We’re always looking for a “silver bullet” that addresses all the accessibility challenges to building an accessible web. Every approach has at least one downside when put into action. And perhaps the biggest challenge that comes with this technique is the absence of WCAG criteria in detail. 

Onscreen shows two developers approaching the coding of acceptance criteria 6 form control labelling and inline errors differently.  One developer codes the feature with a label element programmatically connecting it to the form control named "Name", whilst the other developer uses the aria-label attribute with a value of "Name".

The acceptance criteria do not discuss how the feature needs to be built they’re only focused on the outcome. A developer developing a user story may not fully understand how to proceed with the implementation without having the technical details in place. Or two developers approach the accessibility requirements in widely different ways. As long as the end result is met is this a problem if two developers approach it differently? This technical information still needs to be given to the developers via a different mechanism.

But we found accessibility acceptance criteria are a way to triage the documenting of accessibility information and keep it in focus and make it tangible to help teams document what accessibility behaviour is required. Rather than a hand wavy approach of “make it accessible”.

The accessibility acceptance criteria aren’t perfect, there are gaps, and they don’t replace the accessibility support provided by a dedicated team, but they do complement the training we were already providing to the BAs and developers. 

Taking lessons from the computer security industry this is defence in depth, it’s ensuring the often-quoted advice of bake in accessibility or shift left means every member of a team is doing a little bit with accessibility. Even though accessibility is reliant on good accessible code it’s no longer a developer centric task only.

The criteria encourage progress over perfection, we needed some mechanism to capture early requirements at the user story stage which would take the pressure off the small team and empower development teams to self-serve themselves more effectively. In essence less accessibility hand holding and more self-serving.

But let's trial it out with a hypothetical new feature to be developed, a dialog. The business analyst understand that dialogs need to built in the correct way, be navigable from the keyboard and have a visible focus. So, the AACs applied reflect this. 

AAC1 keyboard access – ensuring the dialog is keyboard focusable, because the dialog needs to have the ability to be closed from the keyboard.

AAC4 visible focus – any keyboard focus effect within the dialog is visible

AAC7 screen reader – the dialog is announced by the screen reader and uses the correct aria authoring patterns 

All these cover the basic behaviour this new feature requires. 

Using the AAC’s means they don’t reduce the accessibility analysts support but they make the support targeted and is a way of identifying earlier enough where the developers' efforts with accessibility should be focused. Once a feature is built, there was still the expectation for teams to reach out and for us to perform spot audit checks of the feature prior to release to production. None of that goes away, it all continues. 

But I like absolute outcomes, I personally like the familiar way of documenting requirements for new features in such a detailed way that when the story is handed over to a developer there is no ambiguity, they build from a complete blueprint. It gives me a sense of security knowing that I've done all I need to do.

But this approach doesn’t encourage teams to self-serve, and it doesn’t encourage teams to learn and understand accessibility, it encourages a copy and paste approach. If they’re copying and pasting technical requirements, the developers aren’t understanding the how or the nuances.

This approach ultimately becomes less effective. In large organisations with many teams all working simultaneously you can't realistically provide that level of support. You must accept levels of overlapping support are what's needed, combine these AAC's with developer training, checklists, resources, and the ongoing support of accessibility analysts. Sometimes the perfect accessibility outcome, is imperfect and that’s ok.

Accessibility teams tend to be small. But this small footprint allows for innovative and nimble practices and scale up support in ways which are pragmatic. And this is what accessibility acceptance criteria are, they’re pragmatic. 

They bridge the gap with providing just enough guidance where user stories can be created without becoming bogged down in what perfect accessibility looks like.

But they're not for everyone. You may be in a small team, working well with BAs and Developers and in that case keep doing what you're doing. But if you begin finding the documenting of requirements is slowing down and impacting the delivery of features, then accessibility acceptance criteria may be another approach.

We found that overtime as teams became familiar with the AACs testers began having difficulty understanding what is actually being tested. There was a sense of inaccurate understanding developing with what each accessibility acceptance criteria meant. 

So, we created a companion document 'testing with the AACs' as a guide to give testers a consistent approach to interpreting and understanding if the AAC’s have been applied correctly. Using language testers are familiar with. 

And this in turn then led us to thinking about other companion documents, including developing with the AAC. Being BA centred meant us looking at things other than code, yet recognising there was still a need for testers and developers to have the own documentation.

But how did it turn out for us?

Overall, the accessibility acceptance criteria worked well, they enabled teams to self-serve their accessibility requirements on their own without our support. Which on the face of it sounds pretty good.

Over time however we noticed a few unusual trends between the teams. Some business analysts were very confident applying the AAC’s and would tag us in messages to confirm everything had been identified. And that showed they were thinking about the feature and how requirements could be applied to that.

Yet other teams adopted a cut and paste approach of pasting all criteria into each user story and asking us to confirm its correct, but really wanting us to trim the story down to include only those criteria relevant.

Looking at it pragmatically has it made a difference? that’s difficult to determine. Sure, with spot audits, the incidence of low hanging accessibility errors reduced, but was this due to the AACs? 

Ultimately, it’s the developers producing the code that is either accessible or not. Being passed a user story with accessibility acceptance criteria called out is helpful, but if you’re using a design system with a regular suite of components over time the accessibility will become better. 

Issues identified are fixed, pushed out and all teams then consume. Really this is helping with the approach of building awareness of accessibility. But it’s difficult to determine if shifting less and including more criteria at earlier stages in the build process is helping or just performative.

When you’re so focused on the correct code you only see code-based solutions and blueprinting accessibility requirements comprehensively and intimately becomes the go to for every occasion.

I’m not saying that isn’t needed and there certainly is a place for documenting that level of detail somewhere and that place is often in smaller more agile teams, but I also don’t believe the effort should rest on the shoulders of BA’s alone. Anything that significantly affects the delivery means accessibility becomes the blocker and is reduced in scope or ignored.

Accessibility acceptance criteria aren’t for everyone, but they may help you document core accessibility behaviour earlier enough that helps teams further up the production pipeline to be aware of outcomes which need to be demonstrated.

There is a GitHub repository which has the accessibility acceptance criteria along with a testing document. That's found at github.com/canaxess/accessibility hyphen acceptance hyphen criteria. 

Thanks for listening, I'm Ross I'm director of CANAXESS a digital accessibility company based in Australia but working globally. 

We work with lots of interesting teams around the globe and if you're interested in working together, reach out to us at hello@canaxess.com.au that's "C A N A X E S S".

</p>
</details>

<hr>

The AACs developed by the Coles Accessibility Team were inspired by the UK Government's Government Digital Service (GDS) work detailed in the blog post [Improving accessibility with accessibility acceptance criteria](https://insidegovuk.blog.gov.uk/2018/01/24/improving-accessibility-with-accessibility-acceptance-criteria/).

The Accessibility Acceptance Criteria are kindly shared by [Mel O'Brien](https://www.linkedin.com/in/melaniejobrien/) publicly through her [GitHub repository](https://github.com/meljobrien3/accessibility-acceptance-criteria), the original IP belongs to [Coles](https://www.coles.com.au/).
