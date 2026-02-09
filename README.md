# Munch_qa_assessment-


# QA Automation Assessment – Playwright

This repository contains a QA automation assessment implemented using Playwright with TypeScript.  
The objective of this project is to demonstrate foundational QA automation skills, including UI interaction, assertions, end-to-end testing, and negative test coverage.

---

## Tech Stack
- Playwright
- TypeScript
- Node.js
- npm

---

## Project Setup

This project was set up using Playwright’s official project initializer.

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Initial Setup
1. Initialize the Playwright project:
   npm init playwright@latest

2. Select TypeScript when prompted.
3. Use the default Playwright configuration.
4. Install Playwright browsers when prompted.

This generates the Playwright configuration file, test folder structure, and required dependencies.

---

## Project Structure

munch-qa-assessment/
- tests/
  - login.spec.ts               (Task 1: Login validation)
  - productList_sorting.spec.ts (Task 2: Product sorting validation)
  - cart.spec.ts                (Task 3: Add & remove cart items)
  - checkout.spec.ts            (Task 4: Checkout workflow)
  - negative.spec.ts            (Task 5: Negative & edge case tests)
- screenshots/                  (Screenshots captured during test execution)
- playwright.config.ts
- package.json
- README.md

---

## Test Coverage Overview

### Task 1: Login Functionality
- Login using valid credentials
- Assert product page loads successfully
- Screenshot captured after login

### Task 2: Product List & Sorting
- Sort products by Price (low to high)
- Verify product order reflects correct sorting
- Validate title and price pairing
- Uses Playwright’s allTextContents() utility
- Screenshot captured after sorting

### Task 3: Add & Remove Cart Items
- Add 3 items to the cart
- Validate cart count indicator
- Remove 1 item from the cart
- Assert remaining cart contents
- Screenshot captured after removal

### Task 4: Checkout Workflow
- Add item to cart
- Navigate to cart and checkout
- Fill in required user details
- Verify tax and total amounts are displayed
- Complete checkout
- Assert success message
- Screenshot captured after successful checkout

### Task 5: Negative / Edge Case Tests
- Login with invalid credentials and assert error message
- Attempt checkout with empty required fields and assert validation errors
- Screenshots captured for error states

---

## How to Run the Tests

### Install dependencies
npm install

### Run all tests
npx playwright test

### Run a specific test file
npx playwright test tests/login.spec.ts

### View HTML report
npx playwright show-report

---

## Notes
- Each test is independent and includes its own setup where required.
- Assertions focus on visible UI behaviour and user-impacting functionality.
- Screenshots are included as test evidence and to assist with debugging.
- The project prioritises clarity, maintainability, and alignment with the assessment requirements.

---

## Author
Michelle
