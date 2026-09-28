# Agent maintenance setup

The repository's normal path is: public Issue or PR → agent proposal/review → verified directory content → merge. Agents must follow `AGENTS.md`, `CONTRIBUTING.md`, and `MAINTAINING.md`. A missing or conflicting source results in a specific request for evidence; it is not silently published.

## Activate the Issue worker

1. Merge the configuration PR into `main`. GitHub loads the scheduled workflow from the default branch.
2. In **Settings → Secrets and variables → Actions**, add a repository secret named `OPENAI_API_KEY` from an OpenAI API project. A ChatGPT subscription or GitHub connector permission does not supply this API key to GitHub Actions.
3. In **Settings → Actions → General → Workflow permissions**, enable **Allow GitHub Actions to create and approve pull requests** so the publishing job can create a draft PR with `GITHUB_TOKEN`. Keep the workflow's explicit per-job token permissions.
4. Ensure GitHub Actions are enabled. `workflow_dispatch` can pick a queued Issue immediately; otherwise the schedule picks the oldest queued Issue about every five minutes (GitHub may delay scheduled runs).

New or edited public Issues are queued without exposing the API key to the submitter's event. The scheduled job processes one queued Issue at a time using a trusted default-branch workflow. It runs Codex with workspace-only access and no network, collects only bounded Markdown changes, and publishes them in a draft PR from a separate job. Other Issue types can receive a concrete request for missing evidence. Author withdrawal and source claims still require independent verification in PR review.

## PR review and merge

The ChatGPT Work GitHub PR event automation for this repository reads each PR and its latest diff, checks the directory rules and public evidence, fixes supported errors on a same-repository branch where possible, and merges only after validation. It leaves specific requests on contributor forks or when evidence is missing. It handles both contributor PRs and Issue worker draft PRs. A draft PR is marked ready before merging.

The Issue worker's proposal cannot independently certify author identity, package metadata, link validity, game compatibility, or actual gameplay. Those claims remain unverified until the PR review agent checks the relevant original pages. A public contributor may update the Issue or PR with evidence; agents re-evaluate the changed material.

## Operations

- The `agent:queued`, `agent:needs-info`, and `agent:proposed` labels are created automatically by the Issue intake job.
- The scheduled job handles a maximum of one queued Issue per run. The `workflow_dispatch` input can select a queued Issue when needed.
- On an unsuccessful run, inspect **Actions → Agent handle issues**. The Issue stays queued for retry. If a branch `agent/issue-N` exists without a PR because creation failed, the next run resumes it as a draft PR without overwriting the branch.
- Remove the API secret or disable the workflow to stop Issue processing. Pause or delete the ChatGPT Work automation to stop PR processing.
- Keep API usage limits on the OpenAI API project. Public submissions can generate a queue, but cannot directly trigger the API-key job.
