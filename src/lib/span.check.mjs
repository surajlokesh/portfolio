// Run with: npm run check
import assert from 'node:assert/strict'
import { span, ym, AXIS_FROM, AXIS_TO } from './span.js'

const round = (n) => Math.round(n * 100) / 100
const at = (s) => ({ left: round(s.left), width: round(s.width) })

// --- months to decimal years ---------------------------------------------
assert.equal(ym(2026, 1), 2026)
assert.equal(ym(2026, 7), 2026.5)
assert.equal(round(ym(2024, 8)), 2024.58)

// --- placement on the axis (2017-2027, so one year is 10%) ---------------
assert.deepEqual(at(span(AXIS_FROM, AXIS_TO)), { left: 0, width: 100 })
assert.deepEqual(at(span(2017, 2021)), { left: 0, width: 40 })

// An open-ended role runs to the axis end.
assert.deepEqual(at(span(2025, null)), { left: 80, width: 20 })

// Months place a span inside the year rather than on its boundary.
assert.ok(span(ym(2025, 9), ym(2026, 3)).left > span(2025, 2026).left)

// --- the minimum-width floor ---------------------------------------------
// A zero-length span is widened to stay visible, and says so.
const instant = span(2021, 2021)
assert.equal(at(instant).width, 2.5)
assert.equal(at(instant).left, 40)
assert.equal(instant.clamped, true)

// A genuine seven-month role is longer than the floor, so it is to scale.
assert.equal(span(ym(2025, 9), ym(2026, 3)).clamped, false)
assert.equal(at(span(ym(2025, 9), ym(2026, 3))).width, 5)

assert.equal(span(2021, 2022).clamped, false)
assert.equal(span(ym(2026, 6), null).clamped, false)

// --- nothing ever leaves the track ---------------------------------------
for (const [from, to] of [
  [2017, 2027],
  [ym(2026, 6), null],
  [ym(2025, 9), ym(2026, 3)],
  [2026, 2026],
  [2030, 2040],
  [2010, 2012],
  [2024, 2019], // inverted
]) {
  const { left, width } = span(from, to)
  assert.ok(left >= 0, `left underflows for ${from}-${to}`)
  assert.ok(left + width <= 100.001, `overflows for ${from}-${to}`)
  assert.ok(width > 0, `zero width for ${from}-${to}`)
}

console.log('span: all checks passed')
