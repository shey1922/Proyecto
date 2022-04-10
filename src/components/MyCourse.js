import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  margin: 0 4rem;
`;

const ProgressBar = styled.div`
  width: 40%;
  border: 1px solid lightgray;
  margin: 0 auto;
`;

const Progress = styled.div`
  width: 20%;
  background-color: 1px solid lightgray;
`;

export default function MyCourse(props) {

  

  return (
    <Container>
      <h2>{ props.name }</h2>
      <hr />
      <ProgressBar>
        <Progress />
      </ProgressBar>
      <h3>Contenido</h3>
      <h3>Calificaciones</h3>
      <h3>Lecturas</h3>
      <h3>Tests</h3>
    </Container>
  )
}
