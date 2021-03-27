import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(150px, 1fr);
  gap: 10px;
`;
const Grid = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;
const Text = styled.h1``;
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
    <Container>
      {loading ? (
        <Text>loading...</Text>
      ) : (
        <>
          {data.movies.map((movie) => (
            <Grid key={movie.id}>
              <Image key={movie.id} imageUrl={movie.medium_cover_image} />
            </Grid>
          ))}
        </>
      )}
    </Container>
  );
};

export default Home;
