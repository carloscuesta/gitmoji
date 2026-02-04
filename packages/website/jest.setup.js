import '@testing-library/jest-dom'
import React from 'react'

// Mock next/dynamic to load components synchronously in tests
jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (...args) => {
    const dynamicModule = jest.requireActual('next/dynamic')
    const dynamicActualComp = dynamicModule.default
    const RequiredComponent = dynamicActualComp(args[0])
    RequiredComponent.preload ? RequiredComponent.preload() : RequiredComponent.render.preload()
    return RequiredComponent
  },
}))

// Mock matchMedia for components that use it
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Silence known React/JSDOM warnings in tests that don't affect functionality
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    // Suppress SVG element warnings - these are JSDOM limitations, not actual errors
    // The SVG elements work fine in real browsers
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('The tag <') && args[0].includes('is unrecognized in this browser'))
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})

// Mock SVG namespace attributes for JSDOM
// JSDOM doesn't fully support SVG namespaced attributes like xlink:href
const originalCreateElement = document.createElement.bind(document)
const originalCreateElementNS = document.createElementNS.bind(document)

document.createElement = function (tagName, options) {
  const element = originalCreateElement(tagName, options)
  if (tagName.toLowerCase() === 'svg') {
    element.setAttribute = function (name, value) {
      if (name === 'xlinkHref') {
        this.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value)
      } else {
        Element.prototype.setAttribute.call(this, name, value)
      }
    }
  }
  return element
}

document.createElementNS = function (namespaceURI, qualifiedName) {
  const element = originalCreateElementNS(namespaceURI, qualifiedName)
  if (namespaceURI === 'http://www.w3.org/2000/svg') {
    element.setAttribute = function (name, value) {
      if (name === 'xlinkHref') {
        this.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value)
      } else {
        Element.prototype.setAttribute.call(this, name, value)
      }
    }
  }
  return element
}
