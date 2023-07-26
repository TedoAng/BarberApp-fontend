import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function BeardHair(color) {
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
        <Path d="M64.713 92.723c-.025-.44-.038-.648-.062-1.125-3.686 6.886-9.808 8.5-16.932 8.39l.247-.82c-7.532-.587-14.545-2.066-17.835-10.2-.148.319-.31.661-.47 1.016-.062-.037-.16-.061-.173-.122-1.15-4.403-1.002-8.561 2.548-11.961 1.051-1.003 2.263-1.945 3.982-1.186.112-.16.248-.306.31-.465.73-1.981.952-2.153 3.153-1.994 1.72.123 3.439.404 5.17.49 1.806.085 3.624.024 5.554.024.024.514.037 1.04.099 1.553.148 1.358.84 1.749 1.99 1.003.94-.611 1.794-1.37 2.784-2.152-2.647-1.798-5.195-3.523-7.99-5.43.086.672.123 1.002.185 1.492-2.659-.759-5.306-1.26-6.852-4.073-1.867 1.137-3.71 2.263-5.578 3.4V69.56c-.136-.049-.284-.098-.42-.147l-2.325 4.709c-2.313-2.47-1.942-7.925.766-10.567 2.239-2.177 6.222-2.348 8.46-.318 1.46-1.553 3.34-1.785 5.319-1.553 3.252.391 6.184 1.59 8.991 3.755-.52.097-.828.146-1.336.232 2.004 2.14 3.921 4.17 5.813 6.225.805.868 1.72.978 2.635.342.829-.587 1.657-1.247 2.251-2.054.928-1.26 1.608-2.69 2.449-4.012 1.88-2.947 4.304-5.307 7.396-6.922-.853 3.535-1.83 6.996-2.486 10.518-.643 3.498-.965 7.056-1.46 10.897-.395-.526-.568-.759-.717-.942-.532 2.263-.915 4.598-1.632 6.837-.73 2.262-1.893 4.353-3.822 6.163h-.012zM64.255 20.506c-1.682-3.02-4.255-4.672-7.235-6.274 7.408-1.37 11.217 3.706 15.769 7.705-.94-3.13-3.043-5.222-5.393-7.216 7.05.184 15.374 7.204 15.127 12.768-4.737-2.09-9.722-2.91-14.83-3.265-8.385-.587-16.326.905-23.809 4.758-2.374 1.223-4.774 2.335-7.556 2.36-7.05.061-11.948-6.347-9.833-13.013.148-.464.643-.82.99-1.223.383.355.914.648 1.112 1.089 1.447 3.265 3.909 5.16 7.508 5.601-2.523-1.651-5.059-3.265-5.85-6.457 3.784-.612 10.117.562 19.653 3.314-1.633-.856-3.216-1.859-4.923-2.532-1.707-.684-3.537-1.051-5.726-1.663 4.168-.636 7.94-1.65 11.7-1.639 2.523 0 5.12 1.297 7.557 2.324 1.93.82 3.649 2.116 5.727 3.375l.012-.012z" />
        <Path d="M84.922 50.58c-.903-1.762-1.521-3.217-1.237-5.15.297-2.078-.061-4.268-.173-6.408-.012-.342-.235-.685-.408-1.15-.31 2.813-.594 5.455-.878 8.17-1.67-.514-2.127-1.406-2.028-2.886.173-2.532-.075-5.039-1.423-7.362v8.035c-1.484-.11-2.028-.734-2.065-2.043-.087-2.385-.52-4.708-1.88-7.056.235 2.702.445 5.1.668 7.741-.57-.171-.94-.232-1.262-.38-3.488-1.614-6.976-3.216-10.451-4.867-4.428-2.103-5.145-4.867-4.415-10.2.037-.317.704-.72 1.125-.782 5.12-.673 10.154-.122 15.139 1.052 1.917.452 3.784 1.113 5.714 1.516 3.562.746 5.034 3.131 5.466 6.433.668 5.21-.531 10.175-1.88 15.336h-.012z" />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path fill="#fff" transform="translate(26 14)" d="M0 0H61V86H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BeardHair