#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { gitmojis } from 'gitmojis'
import { z } from 'zod'

type Gitmoji = (typeof gitmojis)[number]

export const searchGitmoji = (query: string): readonly Gitmoji[] => {
  const lowerQuery = query.toLowerCase()
  return gitmojis.filter(
    ({ name, description, code }) =>
      name.toLowerCase().includes(lowerQuery) ||
      description.toLowerCase().includes(lowerQuery) ||
      code.toLowerCase().includes(lowerQuery),
  )
}

export const listGitmojis = (
  semver?: 'major' | 'minor' | 'patch' | null,
): readonly Gitmoji[] => {
  if (!semver) return gitmojis
  return gitmojis.filter((g) => g.semver === semver)
}

const server = new McpServer({ name: 'gitmoji-mcp', version: '1.0.0' })

server.tool(
  'search_gitmoji',
  'Search gitmojis by name, description, or code',
  { query: z.string().describe('Search query') },
  ({ query }) => ({
    content: [{ type: 'text', text: JSON.stringify(searchGitmoji(query)) }],
  }),
)

server.tool(
  'list_gitmojis',
  'List all gitmojis, optionally filtered by semver',
  {
    semver: z
      .enum(['major', 'minor', 'patch'])
      .optional()
      .describe('Filter by semver type'),
  },
  ({ semver }) => ({
    content: [{ type: 'text', text: JSON.stringify(listGitmojis(semver)) }],
  }),
)

const transport = new StdioServerTransport()
await server.connect(transport)
