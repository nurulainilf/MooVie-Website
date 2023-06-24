import { Card, Container, Row, Col, Image} from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpeg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.webp"
import spidermanImage from "../assets/images/superhero/spiderman.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white" id="superhero">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="Antman Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Ant-Man</Card.Title>
                                    <Card.Text className="text-left">
                                        A thief with the ability to shrink in size and control ants becomes a superhero, using his newfound powers to protect the world.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={avengerImage} alt="Avenger Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Avengers: Endgame</Card.Title>
                                    <Card.Text className="text-left">
                                    A team of superheroes, each with their unique powers, come together to defend the world against threats that jeopardize global security.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={batmanImage} alt="Batman Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Batman</Card.Title>
                                    <Card.Text className="text-left">
                                        A vigilante who utilizes his exceptional physical prowess and intellect to fight crime and uphold justice in Gotham City.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={robinhoodImage} alt="Robin Hood Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Robin Hood</Card.Title>
                                    <Card.Text className="text-left">
                                    A heroic outlaw who fights against injustice and corruption, using his expert archery skills and robbing from the rich to help the poor.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Spider-Man Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Spider-Man</Card.Title>
                                    <Card.Text className="text-left">
                                    A teenager gains spider-like abilities after being bitten by a radioactive spider and uses his powers to protect New York City from criminal threats.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={supermanImage} alt="Superman Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Superman</Card.Title>
                                    <Card.Text className="text-left">
                                    A superpowered alien known for his extraordinary abilities, who fights crime and protects humanity on Earth.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero