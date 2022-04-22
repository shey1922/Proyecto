import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../data/courses';
import Course from './Course';

const Container = styled.div`
  margin: 3rem 5rem;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export default function Courses() {

  return (
    <Container>
        <Box>
            {
              data.map(c => <Course key={c.id} {...c} />)
            }
        </Box>
    </Container>
  )
}
