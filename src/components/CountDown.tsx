import type React from "react"
import Countdown from "react-countdown"
import type { CountdownRendererFn } from "react-countdown"

export const CustomCountDown: React.FC<{ date: string | number | Date }> = ({
  date,
}) => {
  return <Countdown date={date} renderer={renderer} />
}

const renderer: CountdownRendererFn = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    // Render a completed state
    return <Completion />
  } else {
    // Render a countdown
    return (
      <strong className="flex-center mt-4 gap-x-[2rem] text-[4rem] font-medium tracking-wider text-black-light">
        <span className="flex-center flex-col">
          <span>{days}</span>
          <span className="text-[1.2rem] text-green">days</span>
        </span>
        <span className="flex-center flex-col">
          <span>{hours}</span>
          <span className="text-[1.2rem] text-green">hours</span>
        </span>
        <span className="flex-center flex-col">
          <span>{minutes}</span>
          <span className="text-[1.2rem] text-green">minutes</span>
        </span>
        <span className="flex-center flex-col">
          <span>{seconds}</span>
          <span className="text-[1.2rem] text-green">seconds</span>
        </span>
      </strong>
    )
  }
}

const Completion = () => (
  <p className="mt-4 text-center text-[4rem] tracking-wider text-black-light">
    Party time !
  </p>
)
