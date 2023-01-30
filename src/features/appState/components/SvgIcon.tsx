import React from 'react';
import { SvgXml, SvgUri } from 'react-native-svg';

const SvgIcon = ({
  src,
  style = {},
  uri = false,
  fill = '#FFFFFF',
  ...props
}: SvgIconProps) => {
  let srcObj = src;

  if (typeof props.onload === typeof (() => {})) {
    props.onload();
  } // might not need this code. will have to come back to it

  if (!uri) {
    srcObj = src
      .toString()
      .replace(/(#[Ff]{3,6})/g, 'fill_replacement')
      .replace(new RegExp('fill_replacement', 'g'), fill);
  }

  return uri && typeof uri === 'string' ? (
    <SvgUri {...props} uri={uri} style={style} />
  ) : (
    <SvgXml xml={srcObj} {...props} style={{ ...style }} />
  );
};

type SvgIconProps = {
  src: string;
  style?: { [key: string]: any };
  uri?: boolean | string;
  fill?: string;
};

export default SvgIcon;
