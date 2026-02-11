## Overview

In many rental markets — especially informal and emerging ones — lease agreements are verbal, rent payments are tracked through WhatsApp messages or notebooks, and disputes arise because neither party has a reliable record. Existing property management tools are either too complex or too expensive for this context.

FairStay was built to solve this. It's a web-based record management system that gives landlords and tenants a **shared, neutral source of truth** — a place where both sides can see the same lease terms, the same payment history, and the same dispute timeline. The goal isn't to automate property management. It's to bring **clarity and trust** to relationships that are often strained by miscommunication.

---

## The Problem Up Close

Imagine a tenant who has been paying rent on time for months, but the landlord has no consistent record and starts questioning missed payments. Or a landlord who verbally agrees to a lease termination, only for the tenant to deny it later. These aren't edge cases — they're everyday realities in markets where documentation is an afterthought.

FairStay targets exactly this gap: not the absence of tools, but the absence of a **trusted, shared record** that both parties can point to.

---

## How It Works

At its core, FairStay manages three things: **leases**, **payments**, and **disputes**.

**Leases** follow a structured lifecycle. A landlord creates a lease and sends it to a tenant. The tenant reviews and accepts it. Either party can request termination, and the other must acknowledge it. At every step, both sides see the same status — there's no ambiguity about whether a lease is pending, active, or closed.

**Payments** are logged against active leases. The system tracks what's due, what's been paid, and when. This isn't a payment gateway — it's a record. The value is that both landlord and tenant can see the same payment history without relying on memory or scattered messages.

**Disputes** follow a similar transparent workflow. Either party can raise a dispute, provide context, and the system tracks its resolution. The goal is to replace heated back-and-forth conversations with a structured, timestamped process.

---

## Design Philosophy

A few principles shaped every decision in this project:

**Neutrality first.** The system doesn't favour either party. Both the landlord and the tenant see the same data, the same statuses, and the same history. This is a deliberate design choice — the platform earns trust by being impartial.

**Actions should be deliberate.** Rather than allowing implicit state changes, every meaningful action — accepting a lease, logging a payment, raising a dispute — is an explicit step that the user initiates and the system records. This creates a clear audit trail and prevents accidental or ambiguous state changes.

**Keep the interface simple, keep the rules strict.** The frontend is designed to feel lightweight and intuitive. Behind the scenes, the backend enforces strict rules about who can do what and when. For example, only a tenant who is party to a lease can accept it, and only while the lease is in a pending state. The user never needs to think about these rules — the interface simply guides them through what's available.

---

## Under the Hood

For those interested in the technical architecture, here's how the system is structured.

### Frontend — Angular with Signal-Based State

The frontend is built with **Angular** using standalone component APIs. State management is handled through **NgRx SignalStore**, which provides a reactive, feature-scoped approach to managing application state without the boilerplate overhead of traditional Redux-style patterns.

Each feature area — leases, payments, authentication — has its own store that tracks not just the data, but also the status of specific workflows. Instead of a single "loading" flag, the system tracks granular states like "creating a lease" or "accepting a lease" independently. This means the UI can show precise feedback: a button disables only for its own action, not for unrelated operations happening elsewhere.

Components themselves are intentionally thin. They don't make API calls, run business logic, or check permissions. They simply read from the store and dispatch actions. This separation makes the codebase easier to test, refactor, and reason about as it grows.

### Backend — Spring Boot with Domain-Driven Rules

The backend is built with **Java and Spring Boot**, chosen for its strong conventions around domain modelling and its natural fit for enforcing business rules.

One key architectural decision: **permissions are derived, not stored.** Rather than maintaining a permissions table, the backend calculates what a user can do based on their role, their relationship to a lease, and the lease's current state. The frontend receives a permissions object with each response, so it always knows exactly which actions to show — without duplicating any business logic.

### Security — Token-Based Authentication

Authentication uses **JWT access tokens** paired with **refresh tokens stored in HTTP-only cookies.** This approach keeps the frontend stateless while ensuring that tokens can't be accessed by malicious scripts. An HTTP interceptor automatically attaches tokens to every request and transparently handles token refresh when sessions expire, so the user experience is seamless.

### API Design

The API follows RESTful conventions with one important addition: **workflow-specific endpoints.** Instead of a generic `PATCH /leases/:id` that accepts arbitrary updates, actions like accepting or terminating a lease have their own dedicated endpoints. This makes the API self-documenting and ensures that every state transition goes through proper validation.

---

## Deliberate Trade-Offs

Every project makes trade-offs, and FairStay is no exception. Here are the conscious ones:

**No real-time updates — yet.** WebSockets were intentionally excluded from the initial version. The core workflows needed to be validated first, and adding real-time synchronisation would have introduced significant complexity. The architecture is designed to accommodate this later without major restructuring.

**No offline mode.** Supporting offline usage introduces complex data synchronisation challenges — what happens when both parties make conflicting changes while offline? For an MVP focused on trust and correctness, this was deferred in favour of getting the online experience right.

**No payment processing.** FairStay records payments; it doesn't process them. Integrating payment gateways adds regulatory, security, and operational complexity that would have shifted focus away from the core value proposition: shared, trusted records.

---

## Current State & What's Next

The system currently supports full authentication flows, lease lifecycle management, role-based permissions, and a cleanly decoupled frontend and backend.

Looking ahead, the roadmap includes an **audit trail** for all lease actions (providing a timestamped history of every change), **notification support** via email and in-app alerts so neither party misses critical updates, **analytics** to surface patterns like dispute frequency and payment consistency, and **mobile-first optimisations** to better serve users who primarily access the platform on their phones.

---

## What This Project Represents

FairStay isn't a feature showcase — it's a demonstration of building software with **intentional architecture.** Every pattern, from the state machine–driven lease lifecycle to the derived permissions model, was chosen to solve a real problem in a way that remains maintainable as the system grows.

The project reflects a belief that good software isn't about having the most features. It's about making the right decisions early, being honest about trade-offs, and building a foundation that can evolve without being rewritten.
