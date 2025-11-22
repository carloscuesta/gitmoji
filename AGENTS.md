# Gitmoji Guide for AI Assistants

## Purpose

This guide helps AI assistants understand and use gitmoji convention when creating commits. Using emojis on commit messages provides an easy way of identifying the purpose or intention of a commit with only looking at the emojis used. Gitmoji use emojis to make commit messages more expressive and easier to understand at a glance.

## Official Specification

A gitmoji commit message is composed using the following pieces:

- **intention**: The intention you want to express with the commit, using an emoji from the gitmoji list. Either in the `:shortcode:` or unicode format.
- **scope**: An optional string that adds contextual information for the scope of the change.
- **message**: A brief explanation of the change.

### Format

```
<intention> [scope?][:?] <message>

[optional body]
```

## Gitmoji reference

Fetch all available gitmojis from: https://gitmoji.dev/api/gitmojis.

## Usage Guidelines for AI

### Selecting the correct emoji

1. **Identify the primary purpose** of the commit
2. **Choose the most specific emoji** that matches the change
3. **Use only one emoji** per commit for clarity
4. **Prioritize by impact**: Breaking changes (💥) > Features (✨) > Fixes (🐛) > Refactoring (♻️)

### Examples

```
✨ feat: Add user authentication system

Implement JWT-based authentication with login and registration endpoints.
Closes #123
```

```
🐛 Resolve null pointer exception in user service

Added null check before accessing user properties to prevent crashes.
```

```
📝 docs: Update installation instructions

Added step-by-step guide for setting up the development environment.
```

```
⚡️ Optimize user query with indexing

Reduced query time from 500ms to 50ms by adding composite index.
```

```
💥 Update API response format to REST specification

All API endpoints now return data in a standardized envelope format.
Clients must update their response parsing logic.
```

## Best Practices

1. **Be atomic**: One emoji, one purpose, one commit
2. **Write clear subjects**: Keep under 60 characters, imperative mood
3. **Use the body**: Explain "why" not "what" for complex changes
4. **Reference issues**: Include issue numbers when applicable
5. **Indicate breaking changes**: Use 💥 `:boom:`.

## Resources

- Gitmojis list: https://gitmoji.dev/api/gitmojis
- Gitmoji website: https://gitmoji.dev/
- Gitmoji specification: https://gitmoji.dev/specification
