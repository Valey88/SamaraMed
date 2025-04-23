import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
  Paper,
  Drawer,
  Modal,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./components/Logo";
import ContactMenu from "./components/ContactMenu";
import BurgerMenu from "./components/BurgerMenu";
import Navigation from "./components/Navigation";
import { Link, useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  gridGap: "25px",
  flexDirection: "column",
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ background: "white", p: 1 }}>
        <Container>
          <StyledToolbar>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gridGap: 20,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gridGap: 20 }}>
                <Logo />
              </Box>
              <Box>
                <Navigation />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gridGap: 20 }}>
                <ContactMenu />
              </Box>
            </Box>
          </StyledToolbar>
        </Container>
        <Toolbar
          sx={{
            display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
            flexDirection: "column",
            gridGap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Logo />
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                  color: "#1E90FF",
                },
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <BurgerMenu />
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}
