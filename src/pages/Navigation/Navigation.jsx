import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deltaLogo from '../../assets/logos/delta-logo.jpg'
import './Navigation.css';

export default function Navigation() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Navbar expand="lg" className="custom-navbar  bg-body-tertiary mb-3">

            <Container fluid>

                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={handleShow} />

                <Navbar.Brand as={Link} to={'/'} className='nav-brand' >
                    <Image src={deltaLogo} alt='Delta Ecografía logo' className='delta-logo' />
                </Navbar.Brand>

                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="start"

                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                            DELTA ECOGRAFÍA
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as="span">
                                <Link to="/" className="nav-link" onClick={handleClose}>
                                    Inicio
                                </Link>
                            </Nav.Link>
                            <Nav.Link as="span">
                                <Link to="/equipo" className="nav-link" onClick={handleClose}>
                                    Equipo
                                </Link>
                            </Nav.Link>
                            <Nav.Link as="span">
                                <NavDropdown
                                    title="Qué hacemos"
                                    id="offcanvasNavbarDropdown-expand-lg"
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/ecografia-obstetrica'}
                                        className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Ecografía Obstétrica
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/ecografia-ginecologica'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Ecografía Ginecológica
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/ecografia-onclogogica'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Ecografía Onclogógica
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/ecografia-de-mama'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Ecografía de mama
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/neurosonografía'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Neurosonografía
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/earterias-uterinas'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Arterias uterinas
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/longitud-vertical'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Longitud vertical
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/dismorfologia-fetal'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Dismorfología Fetal
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/malformaciones-uterinas'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Malformaciones Uterinas
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/suelo-pelvico'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Suelo Pélvico
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/histerosonosalpingrografía'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Histerosonosalpingrografía                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/hacemos/endometriosis-pelvica'} className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Endometriosis Pélvica
                                    </NavDropdown.Item>

                                </NavDropdown>
                                {/* <Link to="/" className="nav-link" onClick={handleClose}>
                                    Qué hacemos
                                </Link> */}
                            </Nav.Link>
                            <Nav.Link as="span">
                                <NavDropdown
                                    title="Saber más"
                                    id="offcanvasNavbarDropdown-expand-lg"
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/sabermas/ecografia-3d-4d'}
                                        className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Ecografía 3D/4D
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/sabermas/ecografia-embarazo'}
                                        className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Ecografía en el embarazo
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/sabermas/biopsia-corial'}
                                        className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Biopsia Corial
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/sabermas/amniocentesis'}
                                        className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Amniocentesis
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/sabermas/cromosomopatia'}
                                        className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Cromosomopatía
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/sabermas/microarrays'}
                                        className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        Microarrays
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'/sabermas/adn-fetal'}
                                        className='dropdown-item'
                                        onClick={handleClose}
                                    >
                                        ADN Fetal en sangre materna
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>

                            <Nav.Link as="span">
                                <Link to="/contacta" className="nav-link" onClick={handleClose}>
                                    Contacta
                                </Link>
                            </Nav.Link>

                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar >
    );
}
