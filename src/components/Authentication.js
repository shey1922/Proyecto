import React from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

const Container = styled.div`
  width: 64rem;
  height: 32rem;
  //background-color: #f5f5fc;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  flex: 1;
  padding: 10px 20px;
`;

const Gradient = styled.div`
  background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
`;

function Authentication() {
  return (
    <Center>
      <Gradient>
        <Container>
          <Wrapper>
            <Login />
          </Wrapper>
          <Wrapper>
            <Register />
          </Wrapper>
        </Container>
      </Gradient>
    </Center>
  )
}

export default Authentication;