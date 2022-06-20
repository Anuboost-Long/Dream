import {View} from 'react-native';
import styled from 'styled-components/native';
import {metrics} from '../../Theme';

const SizedBox = styled(View).attrs(props => ({
  height: props.height ? props.height : metrics.bigGap,
  width: props.width ? props.width : metrics.bigGap,
  backgroundColor: props.backgroundColor || 'transparent',
}))`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background-color: ${props => props.backgroundColor};
`;

export default SizedBox;
