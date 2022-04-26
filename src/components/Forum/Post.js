import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const PostAuthor = styled.div`
  display: inline-block;
`;

const PostAuthorAvatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const PostAuthorInfo = styled.div`
  margin: 0 1rem;
  float: right;
  display: flex;
  flex-direction: column;
`;

const PostTopic = styled.div`
  margin: auto 0;
`;

const PostTitle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PostAnswer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Post() {
  return (
    <Wrapper>
        <PostAuthor>
            <PostAuthorAvatar src="assets/images/teacher-1.png" alt="usuario" />
            <PostAuthorInfo>
                <strong>Usuario</strong>
                <p>Hace 1 día</p>
            </PostAuthorInfo>
        </PostAuthor>
        <PostTopic>
            <PostTitle to="/">
                Using Angular HttpClientModule instead of HttpModule
            </PostTitle>
        </PostTopic>
        <PostAnswer>
            <h3>3</h3>
            <p>Respuestas</p>
        </PostAnswer>
    </Wrapper>
  )
}

export default Post