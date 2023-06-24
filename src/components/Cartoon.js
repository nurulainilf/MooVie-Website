import { Card, Container, Row, Col, Image} from "react-bootstrap"
import dragonImage from "../assets/images/cartoon/dragon.jpg"
import homeImage from "../assets/images/cartoon/home.jpg"
import luckImage from "../assets/images/cartoon/luck.jpg"
import monsterPartyImage from "../assets/images/cartoon/monsterParty.jpg"
import rayaImage from "../assets/images/cartoon/raya.jpg"
import seaBeastImage from "../assets/images/cartoon/seaBeast.jpg"

const Cartoon = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-light" id="cartoon">CARTOON MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={dragonImage} alt="Dragon Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dragon</Card.Title>
                                    <Card.Text className="text-left">
                                        A human child befriends a dragon and embarks on adventures together.
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
                            <Image src={homeImage} alt="Home Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Home</Card.Title>
                                    <Card.Text className="text-left">
                                        A cute alien named Oh, along with a human girl named Tip, tries to reunite Oh's separated family.
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
                            <Image src={luckImage} alt="Luck Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Luck</Card.Title>
                                    <Card.Text className="text-left">
                                        A group of mythical creatures called "Luck" who possess magical powers on their adventurous.
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
                            <Image src={monsterPartyImage} alt="Mad Monster Party Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Mad Monster Party</Card.Title>
                                    <Card.Text className="text-left">
                                       A party attended by various monster characters from horror films, led by Dr. Frankenstein.
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
                            <Image src={rayaImage} alt="Raya Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Raya</Card.Title>
                                    <Card.Text className="text-left">
                                    Raya, a young warrior, strives to restore harmony to a world divided by evil forces.
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
                            <Image src={seaBeastImage} alt="Sea Beast Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Sea Beast</Card.Title>
                                    <Card.Text className="text-left">
                                        A terrifying sea monster attacks a coastal town, and the local residents struggle to survive.
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

export default Cartoon