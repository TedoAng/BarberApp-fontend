import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function Moustache(color) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={57} cy={57} r={55.5} stroke={color} strokeWidth={3} />
      <G clipPath="url(#clip0_0_1)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.87 48.394c-1.213-1.813-2.295-4.04-4.229-5.026C40.04 37.45 33.484 52.242 31.255 58.19c-4.359 9.479-18.42 15.046-20.19 3.721C8.969 82.62 51.74 72.347 56.23 56.92c.786 4.803 4.031 9.67 11.143 13.264 12.193 6.234 36.61 5.694 35.627-8.239-2.294 10.211-16.125 6.49-20.714-3.34-3.835-6.012-10.16-19.308-21.271-14.918-2 .795-3.802 2.672-5.146 4.676v.032z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path
            fill="#fff"
            transform="matrix(-1 0 0 1 103 42)"
            d="M0 0H92V32H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Moustache