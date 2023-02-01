import { Outlet, Link } from "react-router-dom";
import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../visual_one_logo.svg";

const Layout = () => {
  return (
    <>
      {/* Beginning of the Navbar */}
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#home">
            <img
              src={logo}
              height="75"
              alt="Visual One Marketing Logo"
              loading="lazy"
            />
            Visual One Marketing
          </MDBNavbarBrand>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink href="#About">About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#Services">Services</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#Clientele">Clientele</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#Music">Music</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#Contact">Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

      <Outlet />

      {/* Beginning of the Footer */}
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get Connected with us on our social networks</span>
          </div>
          <div>
            <a href="#facebook" className="me-4 text-reset">
              <MDBIcon
                fab
                icon="facebook"
                size="2x"
                style={{ color: "#3b5998" }}
              />
            </a>
            <a href="#twitter" className="me-4 text-reset">
              <MDBIcon
                fab
                icon="twitter"
                size="2x"
                style={{ color: "#55acee" }}
              />
            </a>
            <a href="#instagram" className="me-4 text-reset">
              <MDBIcon
                fab
                icon="instagram"
                size="2x"
                style={{ color: "#ac2bac" }}
              />
            </a>
          </div>
        </section>
        <section>
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Company name
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Services
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Clientele
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Music
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  visualonemarketing@gmail.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />{" "}
                  917.547.9063
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright Visual One Marketing
        </div>
      </MDBFooter>
    </>
  );
};

export default Layout;
