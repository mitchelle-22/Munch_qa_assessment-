# Munch_qa_assessment-


## 🔧 Project Setup

This project was set up using Playwright’s official project initializer.

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Initial Setup
1. Initialize the Playwright project:
```bash
npm init playwright@latest

Select TypeScript when prompted.

Use the default Playwright configuration.

Install Playwright browsers when prompted.

This generates the Playwright configuration file, test folder structure, and required dependencies.

## Project Structure
munch-qa-assessment/
├── tests/
│   ├── login.spec.ts               # Task 1: Login validation
│   ├── productList_sorting.spec.ts # Task 2: Product sorting validation
│   ├── cart.spec.ts                # Task 3: Add & remove cart items
│   ├── checkout.spec.ts            # Task 4: Checkout workflow
│   └── negative.spec.ts            # Task 5: Negative & edge case tests
├── screenshots/                    # Screenshots captured during test execution
├── playwright.config.ts
├── package.json
└── README.md

