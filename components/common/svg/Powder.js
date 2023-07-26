import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function Powder(color) {
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
        <Path d="M80.063 64.358c-.954-.975-1.94-1.916-2.874-2.908-.216-.231-.389-.615-.387-.924.041-6.196-1.763-11.807-5.347-16.834-.847-1.185-4.911-5.272-6.295-6.76-.101-.108-.186-.2-.256-.28-.043-.038-.084-.08-.127-.119h-.005c-5.953-5.6-12.066-11.013-18.5-16.056-1.505-1.182-3.019-2.318-5.021-2.475h-.155c-1.45.192-2.82.576-3.893 1.65-6.2 6.2-12.41 12.39-18.584 18.62-1.438 1.452-1.977 3.308-1.376 5.266.352 1.143 1.026 2.242 1.765 3.201 6.015 7.814 12.568 15.165 19.452 22.22 5.755 5.896 12.74 8.947 21.014 8.96.293 0 .651.148.864.35.988.936 1.93 1.922 2.9 2.88 1.563 1.54 3.586 1.56 5.147.047.818-.792 5.169-5.157 6.077-6.08l.041-.042.031-.031c1.848-1.842 3.7-3.68 5.529-5.54 1.534-1.56 1.526-3.585 0-5.145zm-1.834 3.709c-1.777 1.786-3.563 3.564-5.34 5.35-.825.813-5.29 5.314-6.123 6.118-.589.572-1.215.615-1.771.083-.98-.939-1.926-1.916-2.837-2.826 4.514-4.523 8.994-9.014 13.552-13.585.806.825 1.663 1.708 2.524 2.587.883.9.887 1.376-.004 2.273z" />
        <Path d="M64.904 36.653l-.127-.12c.028.017.07.056.127.12zM65.16 36.931c-.101-.107-.186-.2-.256-.278.1.093.184.185.256.278zM96 80.998c-.379 1.421-.867 2.782-1.889 3.898-.103.112-.05.431.017.625 1.046 2.973.576 5.673-1.652 7.9-2.23 2.228-4.926 2.688-7.896 1.65-.227-.078-.605-.016-.789.132-2.305 1.87-4.867 2.304-7.582 1.195-2.697-1.104-4.171-3.233-4.505-6.133-.037-.323-.035-.676.056-.986.164-.565.605-.814 1.186-.76.55.05.894.373.997.913.062.328.062.666.12.994.362 2.036 1.536 3.412 3.501 4.002 1.932.577 3.659.103 5.078-1.353.997-1.025 1.056-1.046 2.36-.37 1.93 1 4.297.642 5.84-.884a5.03 5.03 0 00.919-5.904c-.657-1.264-.626-1.322.395-2.368 1.483-1.518 1.943-3.325 1.197-5.32-.741-1.981-2.237-3.075-4.363-3.262-.103-.009-.206-.004-.307-.019-.735-.095-1.18-.553-1.161-1.196.018-.675.52-1.102 1.305-1.108 3.267-.027 6.27 2.444 7.008 5.761.044.198.11.39.167.586v2.007H96z" />
        <Path d="M82.967 82.675c-.28.35-.478.831-.805.947-.363.127-.954.064-1.249-.168-.722-.565-1.332-1.272-1.985-1.926-.78-.78-1.566-1.557-2.336-2.345-.614-.63-.661-1.333-.148-1.824.508-.484 1.147-.437 1.765.174a325.98 325.98 0 014.126 4.148c.237.243.377.583.632.994zM78.205 86.895c-.233.27-.46.757-.81.873-.356.12-1.017.022-1.227-.236a119.706 119.706 0 01-3.951-5.21c-.369-.514-.237-1.103.296-1.497.499-.368 1.084-.365 1.459.113 1.361 1.735 2.671 3.51 3.992 5.278.1.135.12.33.24.681v-.002zM80.598 72.844c.429.217.746.328 1.004.518a431.049 431.049 0 014.682 3.502c.667.508.81 1.174.405 1.727-.401.55-1.108.62-1.765.136-1.609-1.19-3.203-2.397-4.806-3.595-.465-.349-.683-.84-.44-1.345.177-.365.589-.617.92-.943z" />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path fill="#fff" transform="translate(17 18)" d="M0 0H79V79H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Powder