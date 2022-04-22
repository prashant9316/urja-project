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
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  import "./../common_styles/commonClasses.css";
  import "./../components/navbar/navbar.css";
  import logo from "./../assets/logo (8).png";
    import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
    import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";


  import Avatar from "@mui/material/Avatar";


  const styles = {
    header: {
      color: "var(--primarygreen)",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "4rem",
    },
    box: {
      width: 200,
      height: 100,
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      display: "flex",
      flexDirection: "column",
      color: "var(--primarygreen)",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
      },
  };
  const useStyles = makeStyles(styles);
  
  
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
  
  
  export default function Header() {
    const classes = useStyles();
    const { menuButton, header } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
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
        <div className={classes.header}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            align="center"
            fontWeight="bold"
            style={{ color: "var(--darkblue)" }}
          >
            CIN: L67120DL1992PLC048983
          </Typography>
          {/* <Typography
            align="center"
            fontWeight="bold"
            style={{ color: "var(--darkblue)", margin: 9 }}
          >
            GSTIN NO: 07AAACC0367M1ZN
          </Typography> */}
        </div>
        <div
          style={{
            display: "flex",
            border: "1px solid grey",
            borderRadius: 5,
          }}
        >
          <Box
            style={{
              background: "var(--darkblue)",
              color: "white",
              fontWeight: "800",
              width: 70,
              height: 40,
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            NSE:
          </Box>
          <Box
            style={{
              fontWeight: "800",
              width: 70,
              height: 40,
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ₹17.60
          </Box>
        </div>
        <IconButton size="large">
          <Avatar
            alt="Urja Global"
            src={logo}
            variant="square"
            sx={{ width: 56, height: 56 }}
          />
        </IconButton>
        <div
          style={{
            display: "flex",
            border: "1px solid grey",
            borderRadius: 5,
          }}
        >
          <Box
            style={{
              background: "var(--darkblue)",
              color: "white",
              fontWeight: "800",
              width: 70,
              height: 40,
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            BSE:
          </Box>
          <Box
            style={{
              fontWeight: "800",
              width: 70,
              height: 40,
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ₹17.59
          </Box>
        </div>
        <div style={{ display: "flex" }}>
          <Box className={classes.box}>
            <CallOutlinedIcon fontSize="large" />
            <div className={classes.text}>
              {/* <Typography fontWeight="light">Toll-Free:</Typography> */}
              <Typography fontWeight="bold" className="sub-heading">
                8000-500-789
              </Typography>
            </div>
          </Box>
          <Box className={classes.box}>
            <EmailOutlinedIcon fontSize="large" />
            <div className={classes.text}>
              {/* <Typography fontWeight="light">Email:</Typography> */}
              <Typography fontWeight="bold" className="sub-heading">
                info@urjaglobal.in
              </Typography>
            </div>
          </Box>
        </div>
      </div>
            
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
        
      return (
          <>
          <div className={classes.header}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          align="center"
          fontWeight="bold"
          style={{ color: "var(--darkblue)" }}
        >
          CIN: L67120DL1992PLC048983
        </Typography>
        {/* <Typography
          align="center"
          fontWeight="bold"
          style={{ color: "var(--darkblue)", margin: 9 }}
        >
          GSTIN NO: 07AAACC0367M1ZN
        </Typography> */}
      </div>
      <div style={{ display: "flex" }}>
        <Box className={classes.box}>
          <CallOutlinedIcon fontSize="large" />
          <div className={classes.text}>
            {/* <Typography fontWeight="light">Toll-Free:</Typography> */}
            <Typography fontWeight="bold" className="sub-heading">
              8000-500-789
            </Typography>
          </div>
        </Box>
        <Box className={classes.box}>
          <EmailOutlinedIcon fontSize="large" />
          <div className={classes.text}>
            {/* <Typography fontWeight="light">Email:</Typography> */}
            <Typography fontWeight="bold" className="sub-heading">
              info@urjaglobal.in
            </Typography>
          </div>
        </Box>
      </div>
    </div>
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