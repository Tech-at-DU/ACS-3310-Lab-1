import { describe, it, expect } from 'vitest'
import {
  clamp,
  isBetween,
  first,
  pluckNames,
  repeat,
} from '../src/challenges'

describe('clamp', () => {
  it('returns the value when it is already in range', () => {
    expect(clamp(3, 1, 5)).toBe(3)
  })

  it('returns min when the value is too small', () => {
    expect(clamp(-2, 0, 5)).toBe(0)
  })

  it('returns max when the value is too large', () => {
    expect(clamp(10, 0, 5)).toBe(5)
  })
})

describe('isBetween', () => {
  it('returns true when the value is inside the range', () => {
    expect(isBetween(3, 1, 5)).toBe(true)
  })

  it('returns true when the value is equal to min', () => {
    expect(isBetween(1, 1, 5)).toBe(true)
  })

  it('returns true when the value is equal to max', () => {
    expect(isBetween(5, 1, 5)).toBe(true)
  })

  it('returns false when the value is below the range', () => {
    expect(isBetween(0, 1, 5)).toBe(false)
  })

  it('returns false when the value is above the range', () => {
    expect(isBetween(6, 1, 5)).toBe(false)
  })
})

describe('first', () => {
  it('returns the first number in an array', () => {
    expect(first([1, 2, 3])).toBe(1)
  })

  it('returns the first string in an array', () => {
    expect(first(['a', 'b', 'c'])).toBe('a')
  })

  it('returns undefined for an empty array', () => {
    expect(first([])).toBeUndefined()
  })
})

describe('pluckNames', () => {
  it('returns the names from an array of objects', () => {
    expect(
      pluckNames([
        { name: 'Ana' },
        { name: 'Ben' },
        { name: 'Cara' },
      ])
    ).toEqual(['Ana', 'Ben', 'Cara'])
  })

  it('returns an empty array when given an empty array', () => {
    expect(pluckNames([])).toEqual([])
  })
})

describe('repeat', () => {
  it('repeats a string the given number of times', () => {
    expect(repeat('ha', 3)).toBe('hahaha')
  })

  it('returns an empty string when count is 0', () => {
    expect(repeat('ha', 0)).toBe('')
  })

  it('returns the original string when count is 1', () => {
    expect(repeat('ha', 1)).toBe('ha')
  })
})
