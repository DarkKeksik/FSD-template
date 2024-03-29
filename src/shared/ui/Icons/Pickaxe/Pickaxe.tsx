import type { FC } from "react"

type TIconPickaxe = {
  size?: string | number
  color?: string
}

export const IconPickaxe: FC<TIconPickaxe> = ({
  size = 30,
  color = "#000000",
}) => {
  return (
    <svg
      width={size}
      height={size}
      version="1.0"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      ``
      <g transform="translate(0 84) scale(.1 -.1)">
        <path d="m337 793c-13-12-7-21 29-42 42-25 50-26 58-6 4 10-7 21-34 35-44 22-44 23-53 13z" />
        <path d="m62 767c15-12 59-39 97-60l70-37 23 41c13 23 22 44 21 48-4 14-84 29-158 30h-80l27-22z" />
        <path d="m271 716c-17-29-31-58-31-63s24-23 54-40c50-29 56-30 69-15 17 21 57 91 57 100 0 4-27 22-59 40l-59 32-31-54z" />
        <path d="m401 634c-12-19-21-39-21-44 0-9 166-110 181-110 18 0 8 29-32 89-38 56-81 101-99 101-5 0-17-16-29-36z" />
        <path d="m673 647c-16-20-23-46-13-52 5-3 16 8 25 24 15 30 6 52-12 28z" />
        <path d="m144 462c-54-91-100-170-102-176-3-12 84-64 92-55 3 2 35 58 71 124 37 66 80 143 96 172l29 51-43 25-44 24-99-165z" />
        <path d="m620 534c-21-50-25-74-11-74 9 0 51 90 51 109 0 26-21 7-40-35z" />
        <path d="m332 498c5-15 58-24 58-10 0 11-24 22-47 22-8 0-13-6-11-12z" />
        <path d="m405 480c-7-11 19-23 73-35 21-4 32-3 32 4 0 20-95 47-105 31z" />
        <path d="m515 421c-140-65-155-255-26-346 37-26 51-30 111-30s74 4 111 30c93 65 116 187 53 278-55 79-161 109-249 68zm75-56c0-8 5-15 10-15 6 0 10 7 10 15s7 15 15 15 15-7 15-16 10-24 23-34c27-22 17-36-14-19-59 31-129-6-129-68 0-65 75-105 130-71 10 7 22 9 26 5 9-9-15-37-31-37-7 0-15-9-18-20-6-23-27-27-27-5 0 8-4 15-10 15-5 0-10-7-10-15s-4-15-10-15c-5 0-10 7-10 16s-13 28-29 43c-55 51-53 113 5 167 19 18 34 37 34 43s5 11 10 11c6 0 10-7 10-15z" />
        <path d="m357 424c-13-14 6-24 43-24 44 0 70 8 70 21 0 10-103 12-113 3z" />
        <path d="m295 410c-4-6 5-10 19-10s26 5 26 10c0 6-9 10-19 10-11 0-23-4-26-10z" />
      </g>
    </svg>
  )
}
