import styled from 'styled-components';

export const FeedbackStatus = styled.p`
  color: ${props => {
    switch (props.$variant) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'grey';
      case 'bad':
        return 'red';
      case 'total':
        return 'blue';
      default:
        return 'black';
    }
  }};
`;
