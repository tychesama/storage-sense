export type NavItem = {
  label: string;
  href: string;
};

export type StorageType = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  image: string;
  bestFor: string[];
  avoid: string[];
  strengths: string[];
  weaknesses: string[];
  practicality: {
    price: string;
    value: string;
    lifespan: string;
    capacity: string;
    effort: string;
  };
  sections: {
    title: string;
    body: string;
  }[];
};

export type ToolGuide = {
  slug: string;
  name: string;
  purpose: string;
  image: string;
  logo: string;
  bestFor: string[];
  steps: string[];
  mistakes: string[];
  alternatives: string[];
};

export type Practice = {
  title: string;
  summary: string;
  steps: string[];
};

export const navItems: NavItem[] = [
  { label: "Types", href: "/#storage-types" },
  { label: "Comparisons", href: "/#comparisons" },
  { label: "Tools", href: "/#tools" },
  { label: "Practices", href: "/#practices" },
  { label: "Guides", href: "/#guides" }
];

export const storageTypes: StorageType[] = [
  {
    slug: "hdd",
    name: "Hard Disk Drives",
    shortName: "HDD",
    summary:
      "Large, affordable storage with spinning platters. Good for backups, archives, media libraries, and bulk files that do not need top speed.",
    image: "/images/HDD%20pick%20apart%20image%20aerial%20view.avif",
    bestFor: ["Large backups", "Desktop bulk storage", "Photos and video archives", "Low-cost external drives"],
    avoid: [
      "Do not shake, drop, or move the drive while it is running.",
      "Do not store the only copy of important files on one HDD.",
      "Do not leave bare drives exposed to dust, moisture, or static."
    ],
    strengths: ["Low cost per terabyte", "High capacities", "Good for offline backup", "Easy to recover from in some failures"],
    weaknesses: ["Needs power", "Mechanical parts wear out", "Slow random access", "Sensitive to impact"],
    practicality: {
      price: "Usually the best price per terabyte.",
      value: "Excellent for large files and backup sets.",
      lifespan: "Often 3 to 6 years in normal use, but failure can happen anytime.",
      capacity: "Commonly available in multi-terabyte sizes.",
      effort: "Needs safe handling and occasional health checks."
    },
    sections: [
      {
        title: "Types of HDD",
        body:
          "Common HDDs include 2.5-inch laptop drives, 3.5-inch desktop drives, external USB drives, NAS drives, and enterprise drives. Desktop and NAS drives usually offer better capacity and endurance. Laptop drives are smaller but slower and easier to damage."
      },
      {
        title: "How HDDs Are Used",
        body:
          "An HDD needs power because a motor spins the platters and a read/write head moves over the surface. Use HDDs for large files, backups, and files you do not open constantly. Avoid using them as the only home for irreplaceable files."
      }
    ]
  },
  {
    slug: "ssd",
    name: "Solid State Drives",
    shortName: "SSD",
    summary:
      "Fast storage with no moving parts. Best for operating systems, applications, active projects, games, and portable work drives.",
    image: "/images/ssd%20closeup%20image.avif",
    bestFor: ["Boot drives", "Games and apps", "Active projects", "Portable fast storage"],
    avoid: [
      "Do not fill an SSD completely for long periods.",
      "Do not use old SSDs as your only backup.",
      "Do not expose bare drives to static electricity."
    ],
    strengths: ["Very fast", "No moving parts", "Quiet", "Low power use", "Good laptop upgrade"],
    weaknesses: ["Higher cost per terabyte than HDD", "Limited write endurance", "Harder recovery after some failures"],
    practicality: {
      price: "More expensive than HDDs, but much cheaper than before.",
      value: "Best value when speed matters.",
      lifespan: "Often lasts many years when not written heavily every day.",
      capacity: "Common consumer sizes range from 500 GB to 4 TB.",
      effort: "Low maintenance, but leave free space and keep backups."
    },
    sections: [
      {
        title: "Types of SSD",
        body:
          "SATA SSDs are affordable and compatible with many older PCs. NVMe SSDs use PCIe and are much faster. External SSDs are useful for portable editing, backups, and moving large files quickly."
      },
      {
        title: "How SSDs Are Used",
        body:
          "Use an SSD where speed changes the experience: booting Windows, opening apps, loading games, and working on active files. For long-term archives, pair an SSD with another backup because flash storage can fail without much warning."
      }
    ]
  },
  {
    slug: "cloud-storage",
    name: "Cloud Storage",
    shortName: "Cloud",
    summary:
      "Storage on remote servers accessed through the internet. Useful for syncing, sharing, and off-site backup, but it depends on account security and connection quality.",
    image: "/images/datacenter%20image%20cloud.avif",
    bestFor: ["Phone photo backup", "Syncing files across devices", "Sharing folders", "Off-site backup"],
    avoid: [
      "Do not reuse weak passwords on cloud accounts.",
      "Do not assume sync is the same as backup.",
      "Do not ignore recovery codes and two-factor authentication."
    ],
    strengths: ["Available anywhere", "Good off-site protection", "Easy sharing", "Automatic sync"],
    weaknesses: ["Needs internet", "Monthly cost", "Account lockout risk", "Provider limits and policy changes"],
    practicality: {
      price: "Cheap at small sizes, recurring at larger sizes.",
      value: "Great when access and off-site protection matter.",
      lifespan: "Depends on payment, account access, and provider stability.",
      capacity: "Flexible, but large plans can get expensive.",
      effort: "Low day-to-day effort, but account security matters."
    },
    sections: [
      {
        title: "How Cloud Storage Is Used",
        body:
          "Cloud storage is best for files you want available on multiple devices and files that need an off-site copy. It is not magic. If a deleted file syncs everywhere, you still need version history or a separate backup."
      },
      {
        title: "Password and Account Safety",
        body:
          "Use a password manager, a unique password, two-factor authentication, and saved recovery codes. The biggest cloud storage failure for many people is losing account access."
      }
    ]
  },
  {
    slug: "flash-drives-sd-cards",
    name: "Flash Drives and SD Cards",
    shortName: "Flash",
    summary:
      "Small removable flash storage. Useful for moving files and device storage, but risky as a long-term backup by itself.",
    image: "/images/flashdrive,%20micro%20sd%20card,%20sd%20card.avif",
    bestFor: ["Moving files", "Camera cards", "Boot installers", "Short-term handoff storage"],
    avoid: [
      "Do not pull drives out while files are writing.",
      "Do not trust cheap no-name cards for important work.",
      "Do not use one flash drive as your only backup."
    ],
    strengths: ["Portable", "Cheap at small sizes", "Works across many devices", "No cable needed"],
    weaknesses: ["Easy to lose", "Variable quality", "Can fail suddenly", "Often slower than SSDs"],
    practicality: {
      price: "Cheap, but very cheap models can be unreliable.",
      value: "Good for transfer and temporary storage.",
      lifespan: "Varies widely by quality and use.",
      capacity: "Good for small to medium file sets.",
      effort: "Low effort, but label and verify copies."
    },
    sections: [
      {
        title: "Types of Flash Storage",
        body:
          "USB flash drives are for simple file transfer. SD and microSD cards are common in cameras, phones, drones, and handheld devices. High-endurance cards are better for dashcams and devices that write constantly."
      },
      {
        title: "How Flash Storage Is Used",
        body:
          "Use removable flash storage as a transport tool, not as your only archive. After copying important files, open a few files from the destination to confirm the copy worked."
      }
    ]
  },
  {
    slug: "optical-discs",
    name: "Optical Discs",
    shortName: "CD/DVD",
    summary:
      "Disc media read by lasers. Useful for old collections and occasional offline copies, but limited by capacity, drive availability, and disc condition.",
    image: "/images/CD%20cassette%20aerial%20view.avif",
    bestFor: ["Old media collections", "Offline copies", "Small archives", "Write-once records"],
    avoid: [
      "Do not scratch the readable surface.",
      "Do not store discs in heat, sunlight, or humidity.",
      "Do not assume old burned discs are still readable."
    ],
    strengths: ["Write-once options", "Offline by default", "Cheap for small data", "Useful for old content"],
    weaknesses: ["Low capacity", "Slow", "Disc drives are less common", "Discs can degrade"],
    practicality: {
      price: "Cheap per disc, poor value for large data.",
      value: "Useful for specific archives, weak for modern large backups.",
      lifespan: "Depends heavily on disc quality and storage conditions.",
      capacity: "CDs are small; DVDs and Blu-ray hold more but still trail hard drives.",
      effort: "Requires labeling, cases, and occasional readability checks."
    },
    sections: [
      {
        title: "Types of Optical Disc",
        body:
          "CD-R and DVD-R are write-once discs. CD-RW and DVD-RW can be rewritten, but they are less ideal for permanent records. Blu-ray offers more capacity, including archival-grade options."
      },
      {
        title: "How Optical Discs Are Used",
        body:
          "Optical discs can work as cold storage for small, rarely changed files. They are not practical as the main backup for modern photo, video, or project libraries."
      }
    ]
  },
  {
    slug: "legacy-storage",
    name: "Legacy Storage",
    shortName: "Legacy",
    summary:
      "Older media such as floppy disks and aging external formats. Treat them as recovery projects, not dependable storage.",
    image: "/images/floppy%20disk.avif",
    bestFor: ["Reading old files", "Preserving old projects", "Retro computing", "Migration work"],
    avoid: [
      "Do not keep rare files only on legacy media.",
      "Do not repeatedly read failing media without a recovery plan.",
      "Do not store old media loose in drawers."
    ],
    strengths: ["May contain old important files", "Useful for retro systems", "Historically interesting"],
    weaknesses: ["Low capacity", "Old hardware needed", "High failure risk", "Hard to replace"],
    practicality: {
      price: "Poor value unless you need old data.",
      value: "Important only when the data cannot be found elsewhere.",
      lifespan: "Many old media formats are already past reliable age.",
      capacity: "Very small by modern standards.",
      effort: "High effort because adapters, readers, and recovery checks may be needed."
    },
    sections: [
      {
        title: "How to Handle Legacy Media",
        body:
          "The goal is usually migration. Copy the data to modern storage, verify it, then make at least two backups. Keep the original media only as a historical fallback."
      },
      {
        title: "When to Stop",
        body:
          "If a drive clicks, scrapes, or repeatedly fails to read, stop trying normal reads. Continued attempts can make recovery harder."
      }
    ]
  }
];

export const tools: ToolGuide[] = [
  {
    slug: "wiztree",
    name: "WizTree",
    purpose: "Find large files and folders quickly so you can understand what is using disk space.",
    image: "/images/wiztree%20image.avif",
    logo: "/images/wiztree%20logo.png",
    bestFor: ["Full Windows drives", "Large file hunting", "Before uninstalling or deleting files"],
    steps: [
      "Open WizTree as administrator so it can scan the full drive.",
      "Select the drive you want to inspect.",
      "Start the scan and wait for the largest folders to appear.",
      "Sort by size and inspect the largest folders first.",
      "Open folders carefully and confirm what the files are.",
      "Delete only files you understand, or move personal files to a backup drive."
    ],
    mistakes: [
      "Deleting Windows, Program Files, or app data folders without knowing what they do.",
      "Cleaning only tiny files while ignoring the largest folders.",
      "Forgetting to empty the recycle bin after deleting large files."
    ],
    alternatives: ["TreeSize Free", "WinDirStat", "Windows Storage settings"]
  },
  {
    slug: "alldup",
    name: "AllDup",
    purpose: "Find duplicate files so you can remove repeated copies safely.",
    image: "/images/alldup.png",
    logo: "/images/alldup-logo.avif",
    bestFor: ["Duplicate photos", "Repeated downloads", "Messy backup folders"],
    steps: [
      "Choose one folder or drive to scan first.",
      "Select search rules such as file name, size, and content.",
      "Run the scan and review duplicate groups.",
      "Preview duplicates before selecting anything.",
      "Keep the best organized copy.",
      "Move duplicates to a temporary folder before permanent deletion."
    ],
    mistakes: [
      "Deleting duplicates automatically without previewing them.",
      "Scanning system folders together with personal folders.",
      "Assuming same file names always mean same content."
    ],
    alternatives: ["dupeGuru", "Duplicate Cleaner Free", "Czkawka"]
  },
  {
    slug: "dropit",
    name: "DropIt",
    purpose: "Create rules that move, copy, rename, or organize files manually.",
    image: "/images/dropit.jpg",
    logo: "/images/dropit%20logo.jpg",
    bestFor: ["Sorting downloads", "Organizing school files", "Repeat file cleanup routines"],
    steps: [
      "Create a profile for one workflow, such as downloads cleanup.",
      "Add associations for file types or name patterns.",
      "Choose the action, such as move or copy.",
      "Set the destination folder.",
      "Test the rule on a small sample folder.",
      "Run the profile manually when you are ready to organize."
    ],
    mistakes: [
      "Running broad rules on important folders without testing.",
      "Moving files when copy would be safer.",
      "Creating too many rules before you understand the workflow."
    ],
    alternatives: ["File Juggler", "Hazel on macOS", "Power Automate", "Manual folder templates"]
  },
  {
    slug: "veracrypt",
    name: "VeraCrypt",
    purpose: "Encrypt sensitive files or drives so private data is protected if storage is lost or stolen.",
    image: "/images/veracrypt.png",
    logo: "/images/veracrypt%20logo.png",
    bestFor: ["Private documents", "Portable encrypted containers", "Sensitive backup drives"],
    steps: [
      "Create a standard encrypted file container.",
      "Choose a size that leaves room for future files.",
      "Pick a strong unique password and store it in a password manager.",
      "Format the container with a filesystem your devices can read.",
      "Mount the container only when you need the files.",
      "Dismount it before unplugging the drive or shutting down."
    ],
    mistakes: [
      "Forgetting the password. VeraCrypt cannot recover it for you.",
      "Leaving the container mounted on a shared computer.",
      "Keeping only one copy of an encrypted container."
    ],
    alternatives: ["BitLocker", "FileVault", "Cryptomator", "7-Zip encrypted archives"]
  }
];

export const practices: Practice[] = [
  {
    title: "Use Multiple Backups",
    summary: "A useful backup plan has more than one copy and more than one location.",
    steps: [
      "Keep the working copy on your computer or phone.",
      "Keep one local backup on an external drive.",
      "Keep one off-site backup in cloud storage or another safe location.",
      "Test restores by opening copied files, not just by checking folder names."
    ]
  },
  {
    title: "Protect Cloud Accounts",
    summary: "Cloud storage is only as safe as the account that controls it.",
    steps: [
      "Use a unique password stored in a password manager.",
      "Turn on two-factor authentication.",
      "Save recovery codes in a separate secure place.",
      "Review connected devices and sharing links every few months."
    ]
  },
  {
    title: "Store Physical Drives Safely",
    summary: "Physical storage lasts longer when it is protected from impact, heat, moisture, and static.",
    steps: [
      "Store drives in cases or padded drawers.",
      "Keep them away from direct sunlight and damp areas.",
      "Label each drive with date, purpose, and contents.",
      "Plug backup drives in occasionally to verify that files still open."
    ]
  }
];

export const comparisons = [
  {
    title: "Best for a laptop upgrade",
    winner: "SSD",
    reason: "It gives the biggest speed improvement for booting, app loading, and daily work."
  },
  {
    title: "Best for large cheap backups",
    winner: "HDD",
    reason: "It gives the most capacity for the money and works well for external backup drives."
  },
  {
    title: "Best for off-site protection",
    winner: "Cloud storage",
    reason: "It protects against theft, fire, and local device failure when the account is secure."
  },
  {
    title: "Best for moving files quickly",
    winner: "Flash drive or external SSD",
    reason: "A small flash drive works for simple handoffs. An external SSD is better for large files."
  },
  {
    title: "Best for private portable files",
    winner: "Encrypted SSD or encrypted container",
    reason: "Encryption matters when the drive may be lost, borrowed, or stolen."
  }
];

export const guideIdeas = [
  "Clean a full Windows drive without deleting important files",
  "Build a simple 3-2-1 backup plan",
  "Organize school files by semester and subject",
  "Move phone photos to a computer and cloud backup",
  "Check whether an old hard drive is still safe to use",
  "Prepare an old drive before selling, donating, or recycling it"
];
