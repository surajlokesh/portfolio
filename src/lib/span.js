// Every stint bar is measured against one shared axis, so a role in 2021 and a
// degree in 2021 line up vertically down the page. That shared frame is the
// whole point: it is what turns a list of dates into something you can read at
// a glance.

export const AXIS_FROM = 2017
export const AXIS_TO = 2027

/**
 * A year-and-month as a decimal year, so a role that ran June 2026 to March
 * 2027 sits where it actually sat rather than being rounded to whole years.
 */
export const ym = (year, month) => year + (month - 1) / 12

/**
 * Place a year range on the axis as percentages.
 * `to === null` means the span is still running and extends to the axis end.
 * A span shorter than three months would render as a hairline, so every bar
 * keeps that floor and reports when it had to be applied.
 */
export function span(from, to, axisFrom = AXIS_FROM, axisTo = AXIS_TO) {
  const total = axisTo - axisFrom
  const start = Math.min(Math.max(from, axisFrom), axisTo)
  const end = Math.min(Math.max(to ?? axisTo, start), axisTo)

  // Three months: wide enough to see, short enough that a real seven-month
  // role is drawn to scale rather than flagged as an approximation.
  const minWidth = (0.25 / total) * 100
  const exact = ((end - start) / total) * 100
  const width = Math.max(exact, minWidth)
  const left = Math.min(((start - axisFrom) / total) * 100, 100 - width)

  // `clamped` means the bar was widened to stay visible and is therefore no
  // longer to scale. The bar renders hollow in that case, so a single-summer
  // internship never masquerades as a year of work.
  return { left, width, clamped: exact < minWidth }
}

export const AXIS_TICKS = [2017, 2019, 2021, 2023, 2025, 2027]
