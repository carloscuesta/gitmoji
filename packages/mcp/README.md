# gitmoji-mcp

MCP (Model Context Protocol) server for gitmoji data.

## Installation

```bash
npm install gitmoji-mcp
```

## Usage

### As an MCP Server

Run directly with npx:

```bash
npx gitmoji-mcp
```

### MCP Client Configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "gitmoji": {
      "command": "npx",
      "args": ["gitmoji-mcp"]
    }
  }
}
```

## Tools

### search_gitmoji

Search gitmojis by name, description, or code.

**Parameters:**
- `query` (string): Search query

### list_gitmojis

List all gitmojis, optionally filtered by semver.

**Parameters:**
- `semver` (optional): Filter by semver type (`major`, `minor`, or `patch`)

## License

MIT
