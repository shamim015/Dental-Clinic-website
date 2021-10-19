import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "green",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Dental Clinic
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>Menu</Heading>
                        <FooterLink href="#">Home</FooterLink>
                        <FooterLink href="#">pages</FooterLink>
                        <FooterLink href="#">services</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Why Us</Heading>
                        <FooterLink href="#">Special Offers Us</FooterLink>
                        <FooterLink href="#">Emergency Information</FooterLink>
                        <FooterLink href="#">Doctor Careers</FooterLink>
                        <FooterLink href="#">Professional Careers</FooterLink>
                    </Column>
                    <Column>
                        <Heading>About</Heading>
                        <FooterLink href="#">Corporate Information</FooterLink>
                        <FooterLink href="#">Locations</FooterLink>
                        <FooterLink href="#">Leadership</FooterLink>
                        <FooterLink href="#">Investor Relations</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
