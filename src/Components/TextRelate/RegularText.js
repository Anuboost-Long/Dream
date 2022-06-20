import styled from 'styled-components';
import {Fonts} from '../../Constant';
import {colors, metrics} from '../../Theme';

export const RegularText = styled.Text.attrs(props => ({
  fontWeight: props.fontWeight,
  color: props.color || colors.veryLightGray,
  fontSize: props.fontSize || metrics.font.body,
  textAlign: props.textAlign || 'left',
  textDecortation: props.textDecoration || 'none',
  fontFamily: props.fontFamily || Fonts.REGULAR,
}))`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
  text-decoration: ${props => props.textDecortation};
  font-family: ${props => props.fontFamily};
`;
