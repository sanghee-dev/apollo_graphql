import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Loading = styled.h1`
  font-size: 20px;
`;
const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(150px, 1fr);
  gap: 10px;
`;
const Movie = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 100px;
  height: 150px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center center;
`;

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);

  return (
    <Container
      style={{
        display: loading ? "flex" : "block",
        justifyContent: loading ? "center" : "",
        alignItems: loading ? "center" : "",
      }}
    >
      {loading ? (
        <Loading>loading...</Loading>
      ) : (
        <MovieContainer>
          {data.movies.map((movie) => (
            <Movie key={movie.id}>
              <Image key={movie.id} imageUrl={movie.medium_cover_image} />
            </Movie>
          ))}
        </MovieContainer>
      )}
    </Container>
  );
};

export default Home;
