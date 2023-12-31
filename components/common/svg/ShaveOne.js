import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function ShaveOne(color) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={57} cy={57} r={55.5} stroke={color} strokeWidth={3} />
      <G clipPath="url(#clip0_0_1)" fill={color}>
        <Path d="M103 62.903c-1.292 1.348-2.353 3.308-3.937 3.89-1.907.703-4.56.93-6.363.163-10.085-4.284-20.011-8.926-29.99-13.452-2.746-1.245-4.382-3.347-4.318-6.347.034-1.666-.642-2.263-2.105-2.7-3.016-.9-5.942-2.104-8.979-2.907-2.439-.646-3.34-1.887-2.79-4.308.238-1.051.22-2.158.35-3.575 1.953.536 3.685.983 5.401 1.483 17.357 5.047 33.943 11.817 49.178 21.554 1.326.846 2.378 2.112 3.557 3.18v3.019H103z" />
        <Path d="M30.79 50.716c.572-7.008 1.056-14.025 1.749-21.021.386-3.922 2.846-6.033 6.096-5.65 3.066.362 4.767 2.78 4.554 6.72-.67 12.384-.582 24.751 1.705 36.976 1.272 6.802 3.064 13.511 4.716 20.24 1.296 5.284-1.895 9.238-7.4 9.01-3.166-.13-5.08-1.694-5.948-5.062-3.474-13.513-5.178-27.245-5.474-41.21l.002-.003zm6.185-12.847c.458-.014.919-.028 1.377-.044.733-1.219 2.104-2.49 2.005-3.642-.082-.974-1.894-2.545-2.883-2.502-1.023.044-2.739 1.694-2.76 2.672-.024 1.156 1.441 2.342 2.261 3.514v.002zm6.288 47.604h-1.328c-.752 1.203-2.143 2.45-2.06 3.593.071.996 1.699 2.464 2.835 2.67 1.857.337 3.166-1.147 2.8-2.98-.238-1.194-1.465-2.196-2.247-3.283zM30.23 34.312c-1.817-1.243-3.387-1.945-4.375-3.121-.689-.816-1.112-2.553-.68-3.385.44-.846 2.276-1.707 3.137-1.436 1.044.33 2.164 1.738 2.419 2.861.31 1.373-.243 2.937-.502 5.083v-.002z" />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path fill="#fff" transform="translate(25 24)" d="M0 0H78V73H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ShaveOne