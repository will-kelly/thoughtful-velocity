---
sidebar_position: 3
title: The formula
---

# The formula

<div className="formula">Thoughtful Velocity = Speed × Clarity × Trust × Reusability</div>

Each factor describes one condition knowledge has to meet before it creates value:

| Factor | The question it answers |
| --- | --- |
| [Speed](./factors/speed.md) | How fast does the right knowledge reach the person who needs it? |
| [Clarity](./factors/clarity.md) | Can that person understand it and act on it without a follow-up conversation? |
| [Trust](./factors/trust.md) | Do they believe it enough to act without checking with someone first? |
| [Reusability](./factors/reusability.md) | Can the next person, team, or system use it again without rebuilding it? |

## Why the factors multiply

Most maturity models add things up. A strong score in one area offsets a weak score in another, and the average looks respectable.

Knowledge doesn't work that way. Consider a few common cases:

- **Fast, clear, reusable, untrusted.** The runbook is easy to find, well written, and modular. Engineers still ping the on-call lead before they run it, because the last version was wrong. Value: close to zero.
- **Trusted, clear, reusable, slow.** The answer exists and it's right, but it takes 40 minutes and two access requests to reach it. People ask a colleague instead. Value: close to zero.
- **Fast, trusted, reusable, unclear.** The architecture decision record exists, it's current, and it's linked everywhere. Nobody outside the original team can follow it. Value: close to zero for everyone else.

Multiplication captures what averaging hides. A weak factor doesn't just lower the score. It caps everything above it.

## What this means in practice

The formula tells you where to spend. Improving your strongest factor barely moves the result. Improving your weakest factor moves it the most.

That's the opposite of what most teams do. Documentation teams polish clarity because writing is what they control. Platform teams chase speed because search is a tooling problem they know how to buy. Trust and reusability get left alone because they're ownership and governance problems, and those are harder.

So the usual result is clear, fast content that nobody trusts and nobody can reuse.

## A lens, not a lab instrument

The formula is a diagnostic model. It isn't a precise measurement, and it shouldn't be dressed up as one. You can't put a number on Trust the way you put a number on page load time.

What you can do is score each factor against observable behavior, the same way any maturity assessment works. The [self-assessment](./diagnose/self-assessment.mdx) does that with a 0 to 4 scale per factor and diagnostic questions tied to things you can check. The point of the number is to find the constraint and argue about it with evidence, not to report it to two decimal places.
