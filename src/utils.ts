export const convertTZ = (date: Date, tzString: string) => {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  )
}

export const createDateAsUTC = (date: Date) => {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    )
  )
}

export function range(size: number, startAt = 0, step = 1): number[] {
  return size > 0 ? [...Array(size).keys()].map((i) => i * step + startAt) : []
}
