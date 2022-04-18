import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Card = styled.div`
  background-color: #f5f5f5;
  margin: 1rem auto;
  width: 24rem;
  padding: .5rem 1rem;
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
`;

const CardButton = styled.button`
  background-color: ${theme.primary};
  width: 120px;
  color: white;
  padding: .5rem 1rem;
  border-radius: 1rem;
  align-self: center;
  cursor: pointer;

  &:hover {
    background-color: ${theme.secondary};
  }
`;

function Course(props) {
  return (
    <Card>
      <img src="assets/images/placeholder-image.png" alt="placeholder" />
      <CardButton>{ props.topic }</CardButton>
    </Card>
  )
}

export default Course