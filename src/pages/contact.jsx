import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container text>
      <h1>Contact me!</h1>
      <p>
        Other things I do!
        => Talks
        => Blog
        Get in touch
        => Twitter
        => Github
        => Instagram
        => LinkedIn
      </p>
    </Container>
    <Footer />
  </div>
);

export default Contact;
