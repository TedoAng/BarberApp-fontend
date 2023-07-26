import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function Face(color) {
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
          d="M67.457 39.602V34.92c0-.568-.474-1.003-1.015-1.003h-3.08v-3.043c0-.568-.474-1.003-1.015-1.003H59.47v-4.915h6.024v-1.671h2.267c1.93 0 3.52 1.17 3.52 2.54v3.946h2.843v-3.945c0-2.943-2.877-5.35-6.362-5.35H65.46C65.36 18.538 63.734 17 61.772 17H52.16c-2.03 0-3.723 1.638-3.723 3.644v4.28h6.024v4.915h-2.877c-.575 0-1.015.468-1.015 1.003v3.043h-3.08c-.575 0-1.015.468-1.015 1.003v4.68c-5.55 2.274-9.509 7.657-9.509 13.976v40.423H77V53.544c0-6.286-3.96-11.702-9.51-13.976l-.033.034z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path fill="#fff" transform="translate(37 17)" d="M0 0H40V77H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Face