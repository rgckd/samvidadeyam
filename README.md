# Samvidadeyam

Website project for Samvidadeyam.

## Pages

- Home
- About
- Activities
- Events
- Contribute
- Contact

## Run Locally

Open `index.html` in a browser.

## Secret Scanning (Pre-commit)

This repo includes a pre-commit hook powered by `gitleaks` to block committing secrets.

### One-time setup

1. Install `gitleaks`:
	- Windows (winget): `winget install Gitleaks.Gitleaks`
2. Enable repo hooks path:
	- `git config core.hooksPath .githooks`

After setup, every commit scans staged changes automatically.