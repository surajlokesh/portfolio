import { span, AXIS_FROM, AXIS_TO, AXIS_TICKS } from '../lib/span'

// One table serves both work history and education: same shape of record,
// same axis, so the two read against each other down the page.
const Records = ({ id, heading, rows }) => {
  if (!rows.length) return null

  return (
    <section id={id} className='section'>
      <div className='section__inner'>
        <h2 className='section__title'>{heading}</h2>

        <div className='table'>
          <div className='table__head'>
            <span />
            <span>Period</span>
            <span>{id === 'work' ? 'Role' : 'Qualification'}</span>
            <span className='axis'>
              {AXIS_TICKS.map((year) => (
                <span
                  key={year}
                  className='axis__tick'
                  style={{
                    left: `${((year - AXIS_FROM) / (AXIS_TO - AXIS_FROM)) * 100}%`,
                  }}
                  data-edge={
                    year === AXIS_FROM
                      ? 'start'
                      : year === AXIS_TO
                        ? 'end'
                        : undefined
                  }
                >
                  {year}
                </span>
              ))}
            </span>
          </div>

          {rows.map((row, i) => {
            const bar = span(row.from, row.to)
            const live = row.to === null

            return (
              <article
                key={row.id}
                className={`rec${live ? ' is-live' : ''}`}
                style={{ '--i': i }}
              >
                <span className='rec__idx'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='rec__period'>{row.period}</span>

                <div className='rec__what'>
                  <h3 className='rec__title'>{row.title}</h3>
                  <p className='rec__where'>
                    {row.company}
                    {row.place && <span className='rec__meta'>{row.place}</span>}
                    {row.gpa && <span className='rec__meta'>GPA {row.gpa}</span>}
                  </p>
                  <ul className='tags tags--lead'>
                    {row.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <ul className='tags'>
                    {row.detail.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <div className='rec__track'>
                  <span
                    className={`rec__bar${bar.clamped ? ' is-point' : ''}`}
                    style={{ left: `${bar.left}%`, width: `${bar.width}%` }}
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Records
