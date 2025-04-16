import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contacts() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Helmet>
        <title>Контакты - Компания SamaraMed</title>
        <meta
          name="description"
          content="Свяжитесь с SamaraMed: адреса, телефоны, email"
        />
        <meta
          name="keywords"
          content="контакты, SamaraMed, адрес, телефон, email"
        />
      </Helmet>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            animation: "fadeIn 1s ease-in-out",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#0d47a1",
                fontSize: { xs: "2rem", md: "3.5rem" },
                letterSpacing: "0.5px",
              }}
            >
              Контакты
            </Typography>
          </motion.div>
          <Divider
            sx={{
              width: "120px",
              height: "4px",
              bgcolor: "#1976d2",
              mx: "auto",
              mt: 2,
              borderRadius: "2px",
              transition: "width 0.3s ease",
              "&:hover": {
                width: "160px",
              },
            }}
          />
        </Box>

        {/* Contact Information Section */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            p: { xs: 3, md: 5 },
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            maxWidth: "900px",
            mx: "auto",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <List sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Phone */}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 2,
                borderRadius: "12px",
                transition: "background-color 0.3s",
                "&:hover": { bgcolor: "#e3f2fd" },
              }}
              component={motion.li}
              whileHover={{ scale: 1.02 }}
            >
              <PhoneIcon sx={{ fontSize: 40, color: "#1976d2" }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "medium",
                    color: "#0d47a1",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Телефон
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#1565c0",
                    mt: 0.5,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  +7 (903) 086 3091
                </Typography>
              </Box>
            </ListItem>

            {/* Email */}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 2,
                borderRadius: "12px",
                transition: "background-color 0.3s",
                "&:hover": { bgcolor: "#e3f2fd" },
              }}
              component={motion.li}
              whileHover={{ scale: 1.02 }}
            >
              <EmailIcon sx={{ fontSize: 40, color: "#1976d2" }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "medium",
                    color: "#0d47a1",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Email
                </Typography>
                <Link
                  href="mailto:doverie.sam63@mail.ru"
                  sx={{
                    color: "#1565c0",
                    textDecoration: "none",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  doverie.sam63@mail.ru
                </Link>
              </Box>
            </ListItem>

            {/* Address */}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 3,
                p: 2,
                borderRadius: "12px",
                transition: "background-color 0.3s",
                "&:hover": { bgcolor: "#e3f2fd" },
              }}
              component={motion.li}
              whileHover={{ scale: 1.02 }}
            >
              <LocationOnIcon sx={{ fontSize: 40, color: "#1976d2" }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "medium",
                    color: "#0d47a1",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Пункт выдачи заказов
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#1565c0",
                    mt: 0.5,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  г. Самара, ул. Киевская 1В
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#1565c0",
                    mt: 0.5,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  +7 (999) 999 3091
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
}
