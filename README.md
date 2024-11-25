## Abstract

With more and more people relying on open-source software, keeping dependencies secure and up to date has become a concern, as any weak spots can be risky. This project introduces a UNIX-based system (for macOS and Linux) that automatically checks project dependencies for vulnerabilities. It stores all the results in a common database for ease of access of specific details such as the types of vulnerabilities, their definitions, references, and remediation actions. Being designed for expansion, the architecture supports monitoring both onsite and offsite, and helps administrators not only efficiently control vulnerabilities but also enhance security management.

## Introduction

The increased reliance on open-source software (OSS) has accelerated software development but also introduced significant security challenges, especially with unpatched flaws in third-party dependencies, which risk software instability and data breaches. Managing these dependencies is complex due to varying library quality and the limitations of existing platform-specific tools.

The proposed system offers a platform-agnostic solution for automated vulnerability detection and monitoring. It scans third-party dependencies to identify security issues, provides critical CVE IDs with fixes, and stores vulnerability data in a centralized database for proactive risk management. Features include a scalable master-slave architecture, robust authentication, and real-time replication to ensure system integrity and facilitate vulnerability resolution.

Backend --> <a href="https://github.com/rv602/software-inventory-api">Repository</a>

## Installation Guide

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.