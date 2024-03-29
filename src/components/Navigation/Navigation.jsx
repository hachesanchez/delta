import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deltaLogo from '../../assets/logos/delta-logo.png';
import './Navigation.css';

export default function Navigation() {


    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

    const handleLinkClick = () => handleCloseOffcanvas();


    return (


        <Navbar
            fixed="top"
            expand="xxl"
            className={`custom-navbar ${showOffcanvas ? 'with-offcanvas' : ''}`}
        >

            <Container fluid>

                <Navbar.Brand as={Link} to={'/'} className='nav-brand'>
                    <Image src={deltaLogo} alt='Delta Ecografía logo' className='delta-logo' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={handleShowOffcanvas} />

                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                    show={showOffcanvas}
                    onHide={handleCloseOffcanvas}
                >
                    <Offcanvas.Header closeButton>
                        <Link to="/" onClick={handleLinkClick}>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                delta ecografía
                            </Offcanvas.Title>
                        </Link>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {/* <Nav.Link as="span">
                                <Link to="/" className="nav-link" onClick={handleLinkClick}>
                                    Inicio
                                </Link>
                            </Nav.Link> */}
                            <Nav.Link as="span">
                                <Link to="/equipo" className="nav-link" onClick={handleLinkClick}>
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
                                        to={'#'}
                                        //     to={'/servicios/ecografia-obstetrica'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Ecografía Obstétrica
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //  to={'/servicios/ecografia-ginecologica'} 
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Ecografía Ginecológica
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //  to={'/servicios/ecografia-oncologica'} 
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Ecografía Onclogógica
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        // to={'/servicios/ecografia-de-mama'} 
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Ecografía de mama
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //  to={'/servicios/neurosonografía'} 
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Neurosonografía
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //  to={'/servicios/earterias-uterinas'} 
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Arterias uterinas
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        //     to={'/servicios/longitud-vertical'} 
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Longitud vertical
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        // to={'/servicios/dismorfologia-fetal'} 
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Dismorfología Fetal
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //   to={'/servicios/malformaciones-uterinas'} 
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Malformaciones Uterinas
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        // to={'/servicios/suelo-pelvico'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Suelo Pélvico
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        // to={'/servicios/histerosonosalpingografia'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Histerosonosalpingografía
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //  to={'/servicios/endometriosis-pelvica'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Endometriosis Pélvica
                                    </NavDropdown.Item>

                                </NavDropdown>
                                {/* <Link to="/" className="nav-link" onClick={handleLinkClick}>
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
                                        to={'#'}
                                        //  to={'/sabermas/ecografia-3d-4d'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Ecografía 3D/4D
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //  to={'/sabermas/ecografia-embarazo'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Ecografía en el embarazo
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        // to={'/sabermas/biopsia-corial'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Biopsia Corial
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //   to={'/sabermas/amniocentesis'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Amniocentesis
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //  to={'/sabermas/cromosomopatia'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Cromosomopatía
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //     to={'/sabermas/microarrays'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        Microarrays
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to={'#'}
                                        //  to={'/sabermas/adn-fetal'}
                                        className='dropdown-item'
                                        onClick={handleLinkClick}
                                    >
                                        ADN Fetal en sangre materna
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>

                            <Nav.Link as="span">
                                <Link to="/contacta" className="nav-link" onClick={handleLinkClick}>
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

        </Navbar>
    );
}
