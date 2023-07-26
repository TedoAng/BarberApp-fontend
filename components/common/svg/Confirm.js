import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function Confirm() {
  return (
    <Svg
      width={114}
      height={114}
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx={57}
        cy={57}
        r={55.5}
        fill="#5A9D5D"
        stroke="#fff"
        strokeWidth={3}
      />
      <G clipPath="url(#clip0_0_1)">
        <Path
          d="M67.652 75.291a56.521 56.521 0 01-8.573 11.256c-4.18 4.162-8.159 4.7-12.41.845-8.43-7.645-16.431-15.84-24.119-24.223-3.093-3.34-1.278-8.354 3.122-11.292 3.051-2.042 5.487-1.046 8.688 2.752 4.38 5.172 9.066 10.087 13.61 15.117 2.322 2.572 4.65 2.15 6.637-.244a47.814 47.814 0 004.644-6.742c6.723-11.785 13.338-23.643 20.04-35.436 1.135-1.999 2.5-3.926 5.33-3.152 3.15.867 7.408 5.266 7.386 8.189-.393.767-.979 2.049-1.672 3.267"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path fill="#fff" transform="translate(21 24)" d="M0 0H71V66H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Confirm