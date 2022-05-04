import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  margin: 5rem;
`;

const Title = styled.div`
  font-size: 4em;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1.5em;
  margin: 1rem 0;
`;

const Button = styled.button`
  margin-top: 3rem;
  background-color: ${theme.primary};
  color: white;
  font-size: 1.5em;
  padding: 1rem 3rem;
  border-radius: 2rem;
  transition: 0.5s;

  &:hover {
    background-color: ${theme.secondary};
  }
`;

const AboutTitle = styled.h3`
  margin-top: 3rem;
`;

const AboutText = styled.p`
  margin-top: 3rem;
  font-size: 1.5em;
`;

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 70%;
`;

const Info = styled.p`
  padding: 2rem 0;
  font-size: 1.5rem;
`;

const Units = styled.div`
  display: flex;
  flex-direction: column;
`;

const UnitButton = styled.button`
  margin: 3rem 15rem;
  background-color: ${theme.primary};
  color: white;
  font-size: 2.5em;
  padding: 1rem 5rem;
  text-align: center;
  border-radius: 3rem;
  transition: 0.5s;

  &:hover {
    background-color: ${theme.secondary};
  }
`;

export default function CourseDetail() {
  return (
    <Container>
      <Title>Qué hacer en casos de maltrato</Title>
      <Text>1500 calificaciones | 96% positivas</Text>
      <Button>Inscribirse</Button>
      <Text>150 personas inscritas</Text>
      <hr />
      <Flex>
        <Content>
          <AboutTitle>Acerca de este curso</AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            beatae aliquid, incidunt officia ducimus quisquam aut ullam.
            Quisquam repellendus atque distinctio ipsam fugiat cumque corrupti
            minima inventore eum autem, expedita, enim tempora aperiam sint ad
            laboriosam fugit! Delectus incidunt dolorem, ea vitae explicabo
            ullam quam accusamus, corporis sit facilis sunt maxime mollitia
            perferendis fugiat, dolores cumque aliquid. Quae ab quia quos,
            voluptatem pariatur quisquam tenetur nostrum, iusto dicta
            repellendus in beatae fugit magni dolor asperiores harum? Neque
            magni enim unde delectus iusto sed minus quaerat odio commodi, porro
            perferendis maxime ea quas obcaecati inventore ipsa dolore qui
            molestias quo molestiae?
          </AboutText>
        </Content>
        <Content style={{ width: "30%", marginLeft: "12rem" }}>
          <Info>20 Horas para completar</Info>
          <Info>Fecha limite de inscripción</Info>
          <Info>Certificado al completar el curso</Info>
          <Info>100% en línea</Info>
        </Content>
      </Flex>
      <hr />
      <Units>
        <UnitButton>Unidad 1</UnitButton>
        <UnitButton>Unidad 2</UnitButton>
        <UnitButton>Unidad 3</UnitButton>
        <UnitButton>Unidad 4</UnitButton>
        <UnitButton>Unidad 5</UnitButton>
      </Units>
    </Container>
  );
}
