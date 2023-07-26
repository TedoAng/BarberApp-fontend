import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Shave(color) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 115 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M113.5 57c0 30.64-25.06 55.5-56 55.5S1.5 87.64 1.5 57s25.06-55.5 56-55.5 56 24.86 56 55.5z"
        stroke={color}
        strokeWidth={3}
      />
      <Path
        d="M91.498 81.975c-3.011-1.39-4.17-1.754-9.001-6.62l-35.94-35.943-4.898 4.898 35.94 35.944c4.832 4.832 5.229 6.024 6.619 9.003 1.39 2.978 3.54 1.125 3.54 1.125l4.899-4.898s1.853-2.152-1.126-3.542l-.033.033zM53.05 21.258l4.202 4.204L26.21 56.507l-4.203-4.203 31.042-31.046zm0-3.045l-34.088 34.09 7.248 7.25 34.087-34.091-7.248-7.249z"
        fill={color}
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M60.763 25.886l-34.087 34.09-2.68-2.68 34.086-34.09 2.681 2.68z"
        fill={color}
        stroke={color}
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export default Shave