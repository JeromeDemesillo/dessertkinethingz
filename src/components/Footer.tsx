import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 site-footer">
    <Container>
      <Col className="text-center">
        A pink trailer ministry pouring coffee, matcha, and prayer into Hawai&apos;i.
        <br />
        <br />
        Visit
        <br />
        91-1111 Kamaaha Loop
        <br />
        Kapolei, HI 96707
        <br />
        Mon - Sat • 6 - 11 AM • Closed Thu & Sun
        <br />
        <br />
        Say Hi
        <br />
        Instagram ➡ @dkt.hnl
        <br />
        <a href="https://form.jotform.com/260498405627161?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3">Submit a prayer request</a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
