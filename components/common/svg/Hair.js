import * as React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"

function Hair(color) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 113 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M111.5 57c0 30.664-24.637 55.5-55 55.5S1.5 87.664 1.5 57s24.637-55.5 55-55.5 55 24.836 55 55.5z"
        stroke={color}
        strokeWidth={3}
      />
      <G clipPath="url(#clip0_0_1)">
        <Path
          d="M55 21l8.915 24.305 26.085.9-20.596 15.917L76.627 87 55 72.515 33.373 87l7.181-24.878L20 46.205l26.085-.9L55 21z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path fill="#fff" transform="translate(20 21)" d="M0 0H70V66H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Hair