import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container text>
      <h1>Hi!</h1>
      <p>
        What is this?
        Why?
        Goals?
        Future?
        Follow up => Instagram, AllTrails
      </p>
    </Container>
    <Footer />
  </div>
);

export default About;
