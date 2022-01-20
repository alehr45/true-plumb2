import React from "react";
import Page from "./Page";
import { Row, Col, Container } from 'react-bootstrap'




function Home() {

    return (
        <Page title="Home">
            <div className="border-top">
                <br></br>
                <div>
                    <Container >
                        <Row>
                            <Col>
                                <h1>Our Story</h1>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id quam nulla. Integer faucibus mauris sit amet lacus dictum ultrices. Sed tempus non lectus eu iaculis. Duis sodales quam non vestibulum vulputate. Sed efficitur feugiat enim, at elementum ligula. Curabitur efficitur vehicula purus, in finibus nulla scelerisque imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ut mi sollicitudin, efficitur risus nec, dictum dolor. Cras in dui porta, eleifend dolor non, facilisis lacus. Vestibulum at dui libero. Praesent vel diam tristique, maximus leo sed, rutrum erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin lacinia aliquet tortor ac efficitur. Aliquam.
                            </Col>
                            <Col>
                                <h1>Our Mission</h1>
                                Donec a vulputate sapien, blandit molestie ante. Duis sed nisi vehicula, vulputate nisl nec, luctus ex. Sed viverra, ipsum sed laoreet scelerisque, tortor elit rhoncus felis, eu semper sapien tellus et mi. Curabitur fermentum turpis at leo mattis efficitur eget eu ex. Duis eget erat commodo, eleifend libero sit amet, sollicitudin turpis. Aliquam id lacus justo. Sed posuere massa vitae bibendum consequat. Suspendisse potenti. In placerat odio at facilisis porta. Praesent quis velit tincidunt, porta odio vel, dignissim augue. Quisque neque nunc, dictum quis libero in, mollis pellentesque purus. Maecenas lectus nibh, varius non tincidunt vel, iaculis tristique sapien. Nullam ac pulvinar massa. Donec id semper justo, non mattis purus. Morbi eleifend posuere mi.
                            </Col>
                        </Row>


                    </Container>

                </div>
            </div>
        </Page>
    )
}

export default Home;