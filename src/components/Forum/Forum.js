import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import theme from '../../theme';
import Post from './Post';

const Container = styled.div`
  margin: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
  width: 50vw;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 1rem;
  overflow: hidden;
`;

const WrapperHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const WrapperFooter = styled.div`
  padding: 1rem 0;
  text-align: center;
`;

const SearchForm = styled.form`
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 1.5rem;
  overflow: hidden;
`;

const SearchButton = styled.button`
  background-color: transparent;
`;

const Button = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  background-color: ${theme.primary};
  color: white;
  border-radius: 3rem;

  &:hover {
    background-color: ${theme.secondary};
    color: white
  }
`;

export default function Forum() {
  return (
    <Container>
      <Wrapper>
      <WrapperHeader>
        <SearchForm>
          <input type="text" placeholder="Buscar..." />
          <SearchButton>
            <i class="fas fa-search"></i>
          </SearchButton>
        </SearchForm>
        <Button to="/">Crear Publicación</Button>
      </WrapperHeader>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      <WrapperFooter>
        <Link to="/">Ver más publicaciones</Link>
      </WrapperFooter>
      </Wrapper>
    </Container>
  )
}
