import styled from 'styled-components';
import { Color, Radius, Shadow } from 'styles';
import { Div } from '../Div';

export const PlanCardContainer = styled(Div)`
  width: 19rem;
  border-radius: ${Radius.l2};

  display: flex;
  flex-direction: column;

  background-color: ${Color.BackgroundSecondary};

  transition: 0.25s;

  &:hover {
    box-shadow: ${Shadow.primary};
  }
`;
