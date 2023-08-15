import type React from "react"
import Countdown from "react-countdown"
import type { CountdownRendererFn } from "react-countdown"
import { useTranslations } from "@/i18n/utils"

export const CustomCountDown: React.FC<{
  date: string | number | Date
  lang?: "vi" | "ja"
}> = ({ date, lang = "vi" }) => {
  return <Countdown date={date} renderer={renderer(lang)} />
}

const renderer =
  (lang: "vi" | "ja"): CountdownRendererFn =>
  ({ days, hours, minutes, seconds, completed }) => {
    const t = useTranslations(lang)

    if (completed) {
      // Render a completed state
      return <Completion />
    } else {
      // Render a countdown
      return (
        <strong className="flex-center mt-4 gap-x-[2rem] text-[3.2rem] font-medium tracking-wider text-black-light pc:text-[4rem]">
          <span className="flex-center flex-col">
            <span>{days}</span>
            <span className="text-[1.2rem] text-green pc:text-[12px]">
              {t("days")}
            </span>
          </span>
          <span className="flex-center flex-col">
            <span>{hours}</span>
            <span className="text-[1.2rem] text-green pc:text-[12px]">
              {t("hours")}
            </span>
          </span>
          <span className="flex-center flex-col">
            <span>{minutes}</span>
            <span className="text-[1.2rem] text-green pc:text-[12px]">
              {t("minutes")}
            </span>
          </span>
          <span className="flex-center flex-col">
            <span>{seconds}</span>
            <span className="text-[1.2rem] text-green pc:text-[12px]">
              {t("seconds")}
            </span>
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
