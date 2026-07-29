/**
 *  2022 Sergi S. - https://github.com/sergiss
 */

import React, { useEffect, useState } from 'react'
import { Number } from './Number'
import { Word } from './Word'
import { Link } from 'react-router-dom'
const endTime = new Date(2024, 0, 15, 16, 0, 0, 0)
const timeInSeconds = endTime - Date.now()
export const Countdown = ({ tgt = timeInSeconds }) => {
  const [millis, setMillis] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const [time, setTime] = useState(tgt)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        if (time <= 0) {
          clearInterval(interval)
          setMillis(0)
          setSeconds(0)
          setMinutes(0)
          setHours(0)
          //   event()
          return 0
        } else {
          setMillis(time % 99)
          setSeconds(Math.floor((time / 1000) % 60))
          setMinutes(Math.floor((time / 1000 / 60) % 60))
          setHours(Math.floor((time / 1000 / 60 / 60) % 24))
          return time - 60
        }
      })
    }, 60)

    return (e) => clearInterval(interval)
  }, [])

  const addTime = () => {
    setTime(time + 10000)
  }

  return (
    <div className="clock">
      <Link to="seasons/2024/season-20/the-nine-colored-deer">
        <h1>Countdown</h1>
        <h1>Season of the Dear Van Gogh</h1>
      </Link>
      <div className="countdown">
        <Number value={hours} />
        <Word value={':'} />
        <Number value={minutes} />
        <Word value={':'} />
        <Number value={seconds} />
        {/* <Word value={':'} />
        <Number value={millis} /> */}
      </div>

      {/* <button onClick={e=>addTime()}>Press to save the world</button> */}
    </div>
  )
}
