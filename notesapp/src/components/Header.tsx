import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
 <Navbar className="bg-body-tertiary" fixed='top' bg='dark' variant='dark' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
