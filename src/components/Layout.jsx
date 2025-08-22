import { Outlet, NavLink } from "react-router";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Layout() {
  return (
    <div>
      <Navbar
        bg="light"
        expand="md"
        className="mb-3"
        role="navigation"
        aria-label="Primary"
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            aria-label="HuskyHealth Tracker Home"
          >
            HuskyHealth Tracker
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="primary-nav" />
          <Navbar.Collapse id="primary-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/log">
                Log
              </Nav.Link>
              <Nav.Link as={NavLink} to="/streaks">
                Streaks
              </Nav.Link>
              <Nav.Link as={NavLink} to="/diary">
                Diary
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link
                as={NavLink}
                to="/login"
                className="login-icon"
                title="Log in"
                aria-label="Log in"
              >
                <span className="material-symbols-outlined" aria-hidden>
                  login
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container as="main" id="main-content" tabIndex={-1}>
        <Outlet />
      </Container>

      <footer className="mt-5 py-3 border-top">
        <Container>
          <p className="mb-0">&copy; 2025 HuskyHealth Tracker</p>
        </Container>
      </footer>
    </div>
  );
}
