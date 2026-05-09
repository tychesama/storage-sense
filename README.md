# Storage Sense

Storage Sense is a static educational website about storage management. It teaches users how to organize files, understand storage devices, compare backup options, clean up disk space, encrypt important data, and avoid data loss.

The site is planned for `storagesense.joemidpan.com` and will connect back to `joemidpan.com`.

## Audience

Storage Sense is written for:

- Students
- Casual PC users
- Phone users
- Beginner developers
- People who want simple backup and storage advice

The writing should stay clear, practical, and beginner-friendly.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX for guide articles
- Static rendering
- Local JSON or TypeScript data files
- Fuse.js for client-side search
- Vercel deployment

## Design Direction

The visual reference is:

https://revenuebase.ai/?ref=land-book.com

Storage Sense should use a clean editorial SaaS style:

- Strong hero section
- Simple navigation
- Large clear headings
- Short useful sections
- Comparison blocks
- FAQ sections
- Clear footer links
- Calm, technical, trustworthy visual tone

Use existing assets from the `images` folder before adding new images.

## Planned Pages

### Implemented Routes

- `/`
- `/storage-types`
- `/storage-types/hdd`
- `/storage-types/ssd`
- `/storage-types/cloud-storage`
- `/storage-types/flash-drives-sd-cards`
- `/storage-types/optical-discs`
- `/storage-types/legacy-storage`
- `/comparisons`
- `/tools`
- `/tools/wiztree`
- `/tools/alldup`
- `/tools/dropit`
- `/tools/veracrypt`
- `/practices`
- `/guides`

### Landing Page

The landing page should introduce Storage Sense and guide users into the main learning paths:

- Storage types
- Storage management tools
- Storage practices
- Practical guides

It should also include a quick comparison or chooser to help users decide where to start.

### Storage Types

This section explains common storage media:

- HDD
- SSD
- Cloud storage
- Flash drives
- SD cards and microSD cards
- CDs, DVDs, and other optical discs
- Legacy media such as floppy disks

Each topic should cover:

- What it is
- How it is used
- Strengths
- Weaknesses
- Things to avoid
- Common use cases
- Practical value based on price, capacity, lifespan, speed, and effort

### Storage Comparisons

This section helps users choose the right storage option.

Possible comparisons:

- HDD vs SSD
- SSD vs cloud storage
- Cloud backup vs physical backup
- Flash drive vs external drive
- SD card vs USB flash drive
- Optical discs vs modern backup options

Comparisons should focus on:

- Price
- Value
- Speed
- Capacity
- Lifespan
- Reliability
- Maintenance effort
- Best use case

### Storage Management Tools

This section teaches users how to clean, organize, and protect files.

Planned tool pages:

- WizTree for finding large files
- AllDup for removing duplicate files
- DropIt for manual file organization
- VeraCrypt for encrypting sensitive data

Each tool page should include:

- What the tool does
- When to use it
- Step-by-step tutorial
- Mistakes to avoid
- Alternatives

### Storage Practices

This section covers habits that prevent data loss.

Topics:

- Multiple backups
- Password storage for cloud accounts
- Safe physical storage for drives and discs
- Simple backup routines
- File naming and folder organization
- When to replace old storage devices

### Guides / Blog

Guide articles should solve common problems in a direct way.

Example guide ideas:

- How to clean a full Windows drive
- What files are safe to delete?
- How to organize school files
- How to back up phone photos
- How long do hard drives last?
- Best backup setup for beginners
- How to prepare an old drive before selling or throwing it away

## Content Rules

- Avoid duplicate explanations across pages.
- Use internal links when topics overlap.
- Explain terms before using them heavily.
- Prefer practical examples over abstract advice.
- Include warnings when a user could lose data.
- Do not recommend deleting files unless the risk is clear.
- Keep tutorials step by step.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Run tests:

```bash
npm test
```

Run linting:

```bash
npm run lint
```
