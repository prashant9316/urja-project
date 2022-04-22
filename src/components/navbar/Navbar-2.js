import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Box,
    Link,
    MenuItem,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  import TopBar from "./Nav_Header"
  import Container from "@mui/material/Container";
  import "../../common_styles/commonClasses.css";
  import "./navbar.css";

  import {NavDropdown} from "react-bootstrap";
  import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

  
  const headersData = [
    {
      label: "Listings",
      href: "/listings",
    },
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
  ];

  const buttons = [
    {
      title: "Right Issue First Call",
      url: "/firstcall",
    },
    {
      title: "Right Issue Second and Final Call",
      url: "/secondcall",
    },
    {
      title: "Franchisee",
      url: "/franchisee",
    },
  ];
  
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#400CCC",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));
  
  export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
    const classes = useStyles();
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);
  
    const displayDesktop = () => {
      return (
            <AppBar position="static">
              <TopBar />
              <Container maxWidth="xl" className={classes.navbar}>
                <Toolbar disableGutters>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      alignItems: "baseline",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Button
                      sx={{
                        margin: "1px",
                        color: "var(--darkblue)",
                        display: "block",
                      }}
                    >
                      <Link
                        href="/"
                        style={{
                          textDecoration: "none",
                          color: "var(--darkblue)",
                          fontSize: "13px",
                          fontWeight: 1000,
                        }}
                      >
                        Home
                      </Link>
                    </Button>
                    <NavDropdown
                      title="ABOUT US"
                      style={{
                        color: "var(--darkblue) !important",
                        fontWeight: 1000,
                        fontSize: "13px",
                        textDecoration: "none",
                      }}
                    >
                      <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                      <NavDropdown.Item href="/ceo">CEO</NavDropdown.Item>
                      <NavDropdown.Item href="/company_overview">
                        Company Overview
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/vision_mission">
                        Vision and Mission
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/board_directors">
                        Board of Directos
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/key_managerial">
                        Key Managerial Personnel
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/business_partner">
                        Business Partners
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Button
                      sx={{
                        margin: "1px",
                        color: "var(--darkblue)",
                        display: "block",
                      }}
                    >
                      <Link
                        href="/categories"
                        style={{
                          textDecoration: "none",
                          color: "var(--darkblue)",
                          fontSize: "13px",
                          fontWeight: 1000,
                        }}
                      >
                        Products
                      </Link>
                    </Button>
                    <NavDropdown
                      title="INVESTORS"
                      style={{
                        color: "var(--darkblue) !important",
                        fontWeight: 1000,
                        fontSize: "13px",
                        textDecoration: "none",
                      }}
                    >
                      <NavDropdown.Item href="#">Announcements</NavDropdown.Item>
                      <NavDropdown.Item href="/rightissue">
                        Right Issue
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Notices of record date & BM
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Financials</NavDropdown.Item>
                      <NavDropdown.Item href="#">Corporate Governance</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Share Holding Patterns
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Annual Report</NavDropdown.Item>
                      <NavDropdown.Item href="#">Contact Information</NavDropdown.Item>
                    </NavDropdown>
                    <Button
                      sx={{
                        margin: "1px",
                        color: "var(--darkblue)",
                        display: "block",
                      }}
                    >
                      <Link
                        href="/electric_vehicles"
                        style={{
                          textDecoration: "none",
                          color: "var(--darkblue)",
                          fontSize: "13px",
                          fontWeight: 1000,
                        }}
                      >
                        Electric Vehicles
                      </Link>
                    </Button>
                    <Button
                      sx={{
                        margin: "1px",
                        color: "var(--darkblue)",
                        display: "block",
                      }}
                    >
                      <Link
                        href="/solar_projects"
                        style={{
                          textDecoration: "none",
                          color: "var(--darkblue)",
                          fontSize: "13px",
                          fontWeight: 1000,
                        }}
                      >
                        Projects
                      </Link>
                    </Button>
                    <Button
                      sx={{
                        margin: "1px",
                        color: "var(--darkblue)",
                        display: "block",
                      }}
                    >
                      <Link
                        href="/contact"
                        style={{
                          textDecoration: "none",
                          color: "var(--darkblue)",
                          fontSize: "13px",
                          fontWeight: 1000,
                        }}
                      >
                        Contact Us
                      </Link>
                    </Button>
                    <Button
                      sx={{
                        margin: "1px",
                        color: "var(--darkblue)",
                        display: "block",
                      }}
                    >
                      <Link
                        href="/gallery"
                        style={{
                          textDecoration: "none",
                          color: "var(--darkblue)",
                          fontSize: "13px",
                          fontWeight: 1000,
                        }}
                      >
                        Gallery
                      </Link>
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      justifyContent: "flex-end",
                    }}
                  >
                    {buttons.map((button) => (
                      <Button
                        key={button.title}
                        sx={{
                          margin: "1px",
                          color: "var(--darkblue)",
                          backgroundColor: "white",
                          display: "block",
                          borderRadius: 10,
                          fontWeight: "bold",
                        }}
                      >
                        <Link
                          href={button.url}
                          style={{
                            textDecoration: "none",
                            color: "var(--darkblue)",
                            fontSize: "13px",
                          }}
                        >
                          {button.title}
                        </Link>
                      </Button>
                    ))}
                  </Box>
                  <Link href="/cart">
                    <Button sx={{ color: "var(--darkblue)" }}>
                      <ShoppingCartOutlinedIcon fontSize="large" />
                    </Button>
                  </Link>
                </Toolbar>
              </Container>
            </AppBar>
            
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
        
      return (
          <>
            <AppBar position="static">
      <Container maxWidth="xl" className={classes.navbar}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "baseline",
              justifyContent: "flex-start",
            }}
          >
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Home
              </Link>
            </Button>
            <NavDropdown
              title="ABOUT US"
              style={{
                color: "var(--darkblue) !important",
                fontWeight: 1000,
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/ceo">CEO</NavDropdown.Item>
              <NavDropdown.Item href="/company_overview">
                Company Overview
              </NavDropdown.Item>
              <NavDropdown.Item href="/vision_mission">
                Vision and Mission
              </NavDropdown.Item>
              <NavDropdown.Item href="/board_directors">
                Board of Directos
              </NavDropdown.Item>
              <NavDropdown.Item href="/key_managerial">
                Key Managerial Personnel
              </NavDropdown.Item>
              <NavDropdown.Item href="/business_partner">
                Business Partners
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/categories"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Products
              </Link>
            </Button>
            <NavDropdown
              title="INVESTORS"
              style={{
                color: "var(--darkblue) !important",
                fontWeight: 1000,
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              <NavDropdown.Item href="#">Announcements</NavDropdown.Item>
              <NavDropdown.Item href="/rightissue">
                Right Issue
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Notices of record date & BM
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Financials</NavDropdown.Item>
              <NavDropdown.Item href="#">Corporate Governance</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Share Holding Patterns
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Annual Report</NavDropdown.Item>
              <NavDropdown.Item href="#">Contact Information</NavDropdown.Item>
            </NavDropdown>
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/electric_vehicles"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Electric Vehicles
              </Link>
            </Button>
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/solar_projects"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Projects
              </Link>
            </Button>
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Contact Us
              </Link>
            </Button>
            <Button
              sx={{
                margin: "1px",
                color: "var(--darkblue)",
                display: "block",
              }}
            >
              <Link
                href="/gallery"
                style={{
                  textDecoration: "none",
                  color: "var(--darkblue)",
                  fontSize: "13px",
                  fontWeight: 1000,
                }}
              >
                Gallery
              </Link>
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {buttons.map((button) => (
              <Button
                key={button.title}
                sx={{
                  margin: "1px",
                  color: "var(--darkblue)",
                  backgroundColor: "white",
                  display: "block",
                  borderRadius: 10,
                  fontWeight: "bold",
                }}
              >
                <Link
                  href={button.url}
                  style={{
                    textDecoration: "none",
                    color: "var(--darkblue)",
                    fontSize: "13px",
                  }}
                >
                  {button.title}
                </Link>
              </Button>
            ))}
          </Box>
          <Link href="/cart">
            <Button sx={{ color: "var(--darkblue)" }}>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
            <Toolbar>
            <IconButton
                {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
                }}
            >
                <MenuIcon />
            </IconButton>
    
            <Drawer
                {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
                }}
            >
                <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>
    
            <div>{femmecubatorLogo}</div>
            </Toolbar>
          </>
      );
    };
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
              
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };
  
    const femmecubatorLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        Femmecubator
      </Typography>
    );
  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }} 
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }