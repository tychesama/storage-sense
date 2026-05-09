# AGENTS.md

## Project Overview
- **Project:** Storage Sense — a static educational website that teaches users how to organize files, manage storage, compare backup options, and avoid data loss.
- **Target user:** Students, casual PC users, phone users, beginner developers, and people who want simple backup and storage advice.
- **My skill level:** Intermediate
- **Stack:** Next.js App Router, TypeScript, Tailwind CSS, MDX for guide articles, static rendering, local JSON/TS data files, Fuse.js for client-side search, Vercel deployment.
- **Site title:** Storage Sense
- **Planned domain:** storagesense.joemidpan.com
- **Parent site:** joemidpan.com

## Website Direction
- Build Storage Sense as an educational reference site with a blog/wiki-like structure.
- Organize topics into clear landing, overview, comparison, tool, practice, and guide pages.
- Avoid repeating the same explanation across pages. Link related pages instead.
- Prefer simple advice, practical examples, and beginner-friendly wording.
- Explain storage topics from hardware basics through practical file management workflows.

## Design Direction
- Use https://revenuebase.ai/?ref=land-book.com as the visual reference.
- Aim for a clean editorial SaaS feel: strong hero, simple navigation, large headings, concise sections, comparison blocks, FAQ, and clear footer links.
- The design should feel calm, technical, and trustworthy.
- Do not make the site look like a generic marketing landing page only. The first screen should clearly introduce Storage Sense and lead into useful learning paths.
- Use the images already placed in the `images` folder before adding new assets.

## Planned Information Architecture
- **Landing Page**
  - Introduce Storage Sense.
  - Show the main learning paths: storage types, management tools, and storage practices.
  - Include a quick storage chooser or comparison preview.
- **Storage Types**
  - Overview of HDD, SSD, cloud storage, flash drives, SD cards, optical discs, and legacy media.
  - Cover usage, differences, strengths, risks, things to avoid, use cases, and practicality.
- **Storage Comparisons**
  - Compare storage by price, value, lifespan, capacity, speed, effort, and use case.
  - Include comparisons such as HDD vs SSD, cloud vs physical backup, and flash drive vs external drive.
- **Storage Management Tools**
  - Cover WizTree, AllDup, DropIt, and VeraCrypt.
  - Each tool page should include what it does, when to use it, a step-by-step tutorial, common mistakes, and alternatives.
- **Storage Practices**
  - Cover multiple backups, password storage for cloud accounts, safe physical storage, and simple routines for different users.
- **Guides / Blog**
  - Short practical articles for common storage problems and beginner workflows.

## Commands
- **Install:** `npm install`
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Start:** `npm run start`
- **Test:** `npm test`
- **Lint:** `npm run lint`

## Do
- Read existing code before modifying anything
- Match existing patterns, naming, and style
- Handle errors gracefully — no silent failures
- Keep changes small and scoped to what was asked
- Run dev/build after changes to verify nothing broke
- Ask clarifying questions before guessing

## Don't
- Install new dependencies without asking
- Delete or overwrite files without confirming
- Hardcode secrets, API keys, or credentials
- Rewrite working code unless explicitly asked
- Push, deploy, or force-push without permission
- Make changes outside the scope of the request

## When Stuck
- If a task is large, break it into steps and confirm the plan first
- If you can't fix an error in 2 attempts, stop and explain the issue

## Testing
- Run existing tests after any change
- Add at least one test for new features
- Never skip or delete tests to make things pass

## Git
- Small, focused commits with descriptive messages
- Never force push

## Response Style
- always respond with clear & concise messages
- use plain English when explaining to the User
- avoid long sentences, complex words, or long paragraphs
