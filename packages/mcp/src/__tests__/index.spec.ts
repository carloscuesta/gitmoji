import { describe, it, expect } from 'vitest'
import { searchGitmoji, listGitmojis } from '../index'

describe('searchGitmoji', () => {
  it('should find gitmoji by name', () => {
    const results = searchGitmoji('bug')
    expect(results.some(({ name }) => name === 'bug')).toBe(true)
  })

  it('should find gitmoji by description', () => {
    const results = searchGitmoji('performance')
    expect(results.some(({ code }) => code === ':zap:')).toBe(true)
  })

  it('should find gitmoji by code', () => {
    const results = searchGitmoji(':fire:')
    expect(results.some(({ name }) => name === 'fire')).toBe(true)
  })

  it('should return empty array for no matches', () => {
    const results = searchGitmoji('xyznonexistent')
    expect(results).toEqual([])
  })
})

describe('listGitmojis', () => {
  it('should return all gitmojis when no filter', () => {
    const results = listGitmojis()
    expect(results.length).toBeGreaterThan(0)
  })

  it('should return all gitmojis when filter is null', () => {
    const results = listGitmojis(null)
    expect(results.length).toBeGreaterThan(0)
  })

  it('should filter by semver major', () => {
    const results = listGitmojis('major')
    expect(results.every(({ semver }) => semver === 'major')).toBe(true)
  })

  it('should filter by semver minor', () => {
    const results = listGitmojis('minor')
    expect(results.every(({ semver }) => semver === 'minor')).toBe(true)
  })

  it('should filter by semver patch', () => {
    const results = listGitmojis('patch')
    expect(results.every(({ semver }) => semver === 'patch')).toBe(true)
  })
})
