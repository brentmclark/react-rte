/* @flow */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  /* This ensures the popover will show on top of the editor. */
  z-index: 10;
`;

type Props = {
  className?: string;
};

export default function ButtonWrap(props: Props) {
  const {className} = props;
  return <Wrapper {...props} className={className} />;
}
