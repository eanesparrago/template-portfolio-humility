import { css } from "styled-components";

const textCrop = (
  lineHeight = 1.3,
  topAdjustment = 0,
  bottomAdjustment = 0
) => {
  const topCrop = 8;
  const bottomCrop = 8;
  const cropFontSize = 36;
  const cropLineHeight = 1.2;

  const dynamicTopCrop =
    (topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2)) /
    cropFontSize;

  const dynamicBottomCrop =
    (bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2)) /
    cropFontSize;

  const marginBottom = `-${dynamicTopCrop + topAdjustment}em`;

  const marginTop = `-${dynamicBottomCrop + bottomAdjustment}em`;

  return css`
    line-height: ${lineHeight};
    &::before,
    &::after {
      content: "";
      display: block;
      height: 0;
      width: 0;
    }
    &::before {
      margin-bottom: ${marginBottom};
    }
    &::after {
      margin-top: ${marginTop};
    }
  `;
};

export default textCrop;