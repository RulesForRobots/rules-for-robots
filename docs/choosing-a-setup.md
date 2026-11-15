# Choosing a setup

Rules for Robots is one way of working. A small project uses less of it, not a different version of it.

## Rules only

For a script, a prototype, or work where you sit with the agent.

1. Install `rfr-core` and the plugin for your domain, for example `rfr-web` for a website.
2. Run `/rfr-core:setup`. It writes the rules of every installed rfr plugin into `.claude/rules/rfr/` and a marked block in `AGENTS.md`, so they reach every session, and the next time you run it, it updates them.

You get the rules, the guards that refuse what must never happen, the reviewers, and your domain's skills. Nothing changes in how you merge or approve.

## Full process

For a product with users and features, and agents that run without you watching.

1. Everything in "Rules only".
2. Install `rfr-process` and run `/rfr-process:setup`.
3. Install the `rfr-agent` GitHub App on the repository, and protect its default branch as setup describes.

You approve a brief, then each feature as a packet (its story, design, and the documentation its users will read) and each delivery, as reviews in GitHub. Agents deliver what you approved without asking, and a tutorial you follow is how you validate the result.

## Moving up

Install `rfr-process` and run its setup. Nothing installed for "Rules only" changes.

## Which domain plugin

| Your project | Install |
|---|---|
| Any software | `rfr-engineering` |
| A website or web app | `rfr-engineering` and `rfr-web` |
| An Unreal Engine plugin | `rfr-engineering` and `rfr-unreal` |
| An Android app | `rfr-engineering` and `rfr-android` |
| Pictures, video, or games | `rfr-creation`, when it is released |

A plugin declares the plugins it depends on, and Claude Code installs them with it.
