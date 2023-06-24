//import statement
import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

//Deklarasi komponen
const Trending = () => {
  //state untuk menyimpan daftar film
  const [movies, setMovies] = useState([]);

  //mengambil daftar film ketika komponen dirander
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      });
  }, []);

  //rander tampilan komponen
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-light" id="trending">
          TRENDING MOVIES
        </h1>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="movieWrapper" key={index}>
                <Card className="movieImage">
                  <Image
                    src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                    alt="Movies"
                    className="Images"
                  />
                  <div className="text-content">
                    <div className="p-3 m-1 text-white">
                      <Card.Title className="text-center movieTitle">
                        {result.title}
                      </Card.Title>
                      <Card.Text className="text-center vote-average">
                        {result.vote_average}%
                      </Card.Text>
                      <Card.Text className="text-left overview">
                        {result.overview}
                      </Card.Text>
                      <Card.Text className="text-left release-date">
                        {result.release_date}
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
