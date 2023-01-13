declare module 'gitmojis' {
  type Gitmoji = {
    /**
     * Gitmoji unicode character
     * @example '🎨', '⚡️', '🔥', '🐛'
     */
    readonly emoji: string
    /**
     * Gitmoji hexadecimal entity.
     * @example '&#x1f3a8;', '&#x26a1;', '&#x1f525;', '&#x1f41b;'
     */
    readonly entity: `&#${string};`
    /**
     * Gitmoji use-case description.
     */
    readonly description: string
    /**
     * Gitmoji name.
     * @example 'art', 'zap', 'fire', 'bug'
     */
    readonly name: string
    /**
     * Gitmoji semver range. Can be `null` if not specified.
     */
    readonly semver: 'patch' | 'minor' | 'major' | null
    /**
     * Gitmoji character formatted as a shortcode.
     * @example ':art:', ':zap:', ':fire:', ':bug:'
     */
    readonly code: `:${string}:`
  }

  export const gitmojis: readonly Gitmoji[]

  export const schema: readonly any
}
