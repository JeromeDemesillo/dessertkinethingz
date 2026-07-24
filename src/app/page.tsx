import { Container, Image } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container
      id="landing-page"
      fluid
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center py-5"
    >
      <Image src="/logo.png" width={150} height={150} alt="Logo" className="mb-4" />
      <div>
        <h1>Jesus & Coffee</h1>
        <p className="mt-3">It's about proclaiming Jesus</p>
      </div>
    </Container>
  </main>
);

export default Home;
