import styled from 'styled-components';
import { Div } from '../Div';
import { Color } from 'styles';

export const PlanDescriptionContainer = styled(Div)`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: solid 1px ${Color.Line};
  border-radius: 0.9rem;
  overflow: hidden;
`;
