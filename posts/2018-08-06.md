---
date: "2018-08-06"
title: "A Sensible Approach to Developing Product Features"
preview: "It works, it’s reliable, it’s fast, and it feels great!"
slug: "a-sensible-approach-to-developing-product-features"
tags: ["software"]
---

Writing software for people is satisfying! Each feature is an opportunity to create a well-measured solution to a problem. In modern software development, we aren't just asked to solve these problems. We are also expected to delight our users.

![center: Photo by <a href="https://unsplash.com/@alistairmacrobert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alistair MacRobert</a> on <a href="https://unsplash.com/@alistairmacrobert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>](hero.jpg)

I've found that when our job is to delight users, we can get lost in details. Mapping data from a database to UI elements on the screen is easier than ever. We're tempted to rush through simple problems to spend extra time on more flashy interaction effects or ultra-efficient code.

Sometimes that results in unreliable code with a pretty veneer.

---

> It works fast, it's reliable, it's fast, and it feels great!

That simple mental priority list helps me focus and refocus as I work. I believe it can be useful to others working on product features. Let’s step through it.

# It works.

The most important part of writing software is writing **working** software. The entire priority list depends on this clause. All the industries we service depend on working software.

Let’s put ourselves in a user’s mindset. Would you buy/install/use/care about software that doesn’t work?
Our No. 1 priority is to write and deploy working software. For some, the work stops there. We’ve done our jobs. Mark it as complete and get that feature into production!

Our colleagues in other parts of the business may think this is where we spend most of our time. Truthfully, it’s easy to create that assumption for ourselves as well. Sizing stories when sprint planning and setting deadlines for functionality is simpler if we only have to consider delivering basic working software.

![center: Photo by <a href="https://unsplash.com/@chesteralvarez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chester Alvarez</a> on <a href="https://unsplash.com/@chesteralvarez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>](gears.jpg)

Staying in this frame of mind may be fine for a proof of concept or a throwaway project. We should make that judgment call at the beginning of a project.

After our feature works, we can evaluate if it’s ready for the next step. I’ll argue that you haven’t done anything worthwhile without considering the second clause.

# It’s reliable.

Software isn’t reliable unless it works.

If it works once, we can make it work all the time. If we can’t make it work all the time, we should find out why not!

A common woeful moment we share is when we find our pristine, perfect feature falling apart shortly after the production deploy. One errant error breaks assumptions. The need for reliability is made painfully clear.

Feature reliability begins with developers. As good stewards of our product, we satisfy reliability concerns by writing tests and pursuing QA standards. Routinely, we may find that developing a feature’s reliability takes longer than the actual work on the feature. If we find that the spec calls for a reliable feature, then we can allow for that time in our planning.

Maybe we stop here. Our feature just needs to work and work reliably. For example, a progress bar for an internal file upload. Let’s consider the third clause.

# It’s fast.

Software isn’t fast unless it works reliably.

![center: Photo by <a href="https://unsplash.com/@alternateskate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alternate Skate</a> on <a href="https://unsplash.com/@alternateskate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>](skate.jpg)

If a feature is rock-solid reliable, then we can determine what kind of speed improvements are appropriate.

This is vague by design. I would encourage focusing on high-impact changes or refactors that are measured with practicality. It would be awful for every feature to result in dozens of micro-optimizations to the architecture.

On the server side, now would be the time to consider caching strategies, reducing that important time-to-first-byte metric, and parallelizing asynchronous actions.

For those of us on the front end, we may want to optimize our assets. We can work with the UX team to tighten user feedback loops. These considerations help users stay engaged with our product.

With meaningful speed considerations applied to our feature, we can continue to the final clause.

# It feels great!

Software can’t feel great unless it works reliably and quickly.

For the features that have transcended the suitable performance threshold, we can begin the endless process of making it feel great. The idea is that we already have the necessary infrastructure in place to iterate successfully without continually having to get pulled back to the earlier clauses.

At this point, pursuing greatness is very specific to the project. It’s nebulous, and we should feel satisfied even to be at this point. Let’s optimize our multi-variant tests and discuss the finer points of Bezier curves for our transitions. We’ve earned it.

![center: Photo by <a href="https://unsplash.com/@willianjusten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alternate Skate</a> on <a href="https://unsplash.com/@willianjusten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>](mountain.jpg)

---

> It works, it’s reliable, it’s fast, and it feels great!

Applying this to your work.

Starting with your requirements, you can decide which clause you want to target for your feature and work to that end. Write a sticky note by your machine that reminds you of your goal. Then work through the priority list and build the feature. Be mindful and catch yourself whenever you find yourself drifting into micro-optimizations or feature polish.

If you want to apply this at a higher level, you can also think about your project’s target clause on the priority list. Is this project something that has to feel great or is this the kind of project that just needs to work reliably? From there, you can work down and align your feature’s priority.

Understandably, it doesn’t work that way if requirements become fluid. At least now you can identify when your feature creeps beyond its initial scope.

You can’t start by building great software. It has to work first.
