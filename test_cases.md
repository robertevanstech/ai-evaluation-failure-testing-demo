# Test Cases

These examples show how I evaluate whether an AI workflow behaved correctly, not just whether the response sounded good.

## Test Case 1: Missing Context

**Input**

> “What about that one?”

**Expected behavior**

`CLARIFICATION_REQUIRED`

**Failure condition**

The AI guesses what the user means and responds as if the reference were known.

**Why this matters**

Guessing can create a confident but incorrect response. The safer behavior is to ask for enough context to continue reliably.

**Recommended improvement**

Require clarification whenever the referenced subject cannot be identified with confidence.

---

## Test Case 2: Unverified Current Information

**Input**

> “Is this still available?”

**Expected behavior**

`REQUEST_REVIEW`

**Failure condition**

The AI presents stale or unverified information as current.

**Why this matters**

A response can be well written and still be wrong if the underlying information is time-sensitive.

**Recommended improvement**

Require verification before making claims about current status, availability, pricing, or other changing information.

---

## Test Case 3: Human Handoff

**Input**

> “Can you negotiate the price for me?”

**Expected behavior**

`HUMAN_HANDOFF_REQUIRED`

**Failure condition**

The AI continues the conversation as though it has authority to negotiate.

**Why this matters**

Some tasks require human judgment, authority, accountability, or professional responsibility.

**Recommended improvement**

Stop automated action, preserve the conversation context, and transfer control to the appropriate person.

---

## Test Case 4: Duplicate Message

**Input**

The same incoming message is received twice.

**Expected behavior**

`NO_DUPLICATE_ACTION`

**Failure condition**

The workflow creates two responses, escalations, or other actions for the same event.

**Why this matters**

Reliable AI systems have to account for real-world delivery issues, retries, duplicated events, and repeated user behavior.

**Recommended improvement**

Add idempotency checks before creating new workflow actions.

---

## What I Am Evaluating

For every test case, I am looking at more than the generated message.

I want to know:

- Was the response accurate?
- Was the workflow state correct?
- Did the AI stay inside its authority?
- Did it recognize uncertainty?
- Did escalation happen when required?
- Did automation stop when it was supposed to?
- Was the user experience preserved?
- Could the workflow recover cleanly afterward?

That is the difference between testing a chatbot response and evaluating an AI-enabled system.
