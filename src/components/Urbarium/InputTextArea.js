/* eslint-disable no-nested-ternary */
// FIXME: Check nested ternary operation in line 12.
import React from 'react';
import styled from 'styled-components';
import fonts from '../../fonts';
import { InputFieldStyle } from './urbarium-styles';

const TextArea = styled.textarea`
  ${InputFieldStyle}
  ${props => props.font}
  width: ${props => (props.fill ? ' 100%' : '360px')};
  height: ${props => (props.height ? `${props.height}px` : props.fill ? '100%;' : '108px')};
  padding-top: 10px;
  margin: 0px;
  resize: none;
`;

const InputTextArea = ({
  placeholder = '', data = undefined, fill = false, font = fonts.defaultInput, height = 0,
}) => (
  <TextArea
    placeholder={placeholder}
    defaultValue={data}
    fill={fill}
    font={font}
    height={height}
  />
);

export default InputTextArea;
