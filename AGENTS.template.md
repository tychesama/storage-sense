# AGENTS.md

## Project Overview
- **Project:** [Project name] - [short description]
- **Product type:** CRM
- **Target user:** [primary users and roles]
- **My skill level:** [beginner / intermediate / advanced]
- **Tech stack:** [frameworks, language, database, styling, hosting, tools]
- **Project status:** [idea / prototype / active build / production]
- **Planned domain:** [domain]
- **Parent site/company:** [company or parent site]

## Product Direction
- Build this as a practical CRM product focused on clear workflows and reliable data entry.
- Prioritize common CRM tasks such as contacts, companies, leads, deals, tasks, notes, reminders, and activity history.
- Keep pages focused. Avoid repeating the same explanation or workflow in multiple places.
- Prefer simple language, clear labels, and predictable actions.
- Design workflows around real user tasks, not feature lists.
- Avoid pushy marketing language unless writing a dedicated marketing page.
- Explain errors and empty states clearly, with useful next steps.

## Design Direction
- **Visual reference:** [design reference link or notes]
- Aim for a clean, calm, work-focused interface.
- Prefer dense but readable layouts for tables, lists, records, and dashboards.
- Use clear navigation, strong hierarchy, consistent spacing, and obvious actions.
- Avoid decorative layouts that make repeated CRM work slower.
- Use existing assets before adding new ones.

## Collaboration Note
- The project owner may edit the code while work is happening.
- Always check `git status --short` before editing.
- Do not overwrite or revert changes made outside the current task.

## Planned Information Architecture
- **Dashboard**
  - [overview widgets, upcoming tasks, recent activity, pipeline summary]
- **Contacts**
  - [contact list, contact details, notes, activity history]
- **Companies**
  - [company list, company details, related contacts, deals]
- **Leads / Deals**
  - [pipeline, deal stages, lead details, status changes]
- **Tasks / Follow-ups**
  - [task list, reminders, due dates, assignments]
- **Reports**
  - [sales summary, activity reports, conversion metrics]
- **Settings**
  - [users, roles, fields, integrations, preferences]

## Commands
- **Install:** `[install command]`
- **Dev:** `[dev command]`
- **Build:** `[build command]`
- **Start:** `[start command]`
- **Test:** `[test command]`
- **Lint:** `[lint command]`

## Do
- Read existing code before modifying anything.
- Match existing patterns, naming, and style.
- Handle errors clearly. Do not hide failures.
- Keep changes small and scoped to what was asked.
- Run the relevant checks after changes.
- Ask clarifying questions before guessing when the risk is high.
- Preserve user data and treat CRM records as important.
- Prefer accessible, keyboard-friendly UI for common workflows.

## Don't
- Install new dependencies without asking.
- Delete or overwrite files without confirming.
- Hardcode secrets, API keys, credentials, or customer data.
- Rewrite working code unless explicitly asked.
- Push, deploy, or force-push without permission.
- Make changes outside the scope of the request.
- Log sensitive CRM data unless it is required and safe.

## When Stuck
- If a task is large, break it into steps and confirm the plan first.
- If you cannot fix an error in 2 attempts, stop and explain the issue.
- Include what you tried, what failed, and what you recommend next.

## Testing
- Run existing tests after any change.
- Add at least one test for new features when practical.
- Never skip or delete tests to make things pass.
- For CRM workflows, test create, read, update, delete, validation, empty states, and permission-sensitive paths.

## Git
- Keep commits small and focused.
- Use descriptive commit messages.
- Never force push.
- Do not revert unrelated user changes.

## Response Style
- Always respond with clear and concise messages.
- Use plain English when explaining to the user.
- Avoid long sentences, complex words, or long paragraphs.
- Mention changed files and checks run.
