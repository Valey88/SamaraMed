import React from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  List,
  ListItem,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { motion } from "framer-motion";

export default function Delivery() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%,  100%)",
        py: { xs: 4, md: 8 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>Доставка - SamaraMed</title>
        <meta
          name="description"
          content="Узнайте о доставке по Самаре и другим городам России. Бесплатная доставка по Самаре и информация о стоимости доставки в другие регионы."
        />
        <meta
          name="keywords"
          content="доставка, Самара, бесплатная доставка, доставка по России, курьерская доставка"
        />
      </Helmet>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
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
              Доставка
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

        {/* Delivery Information Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "20px", md: "40px" },
            mt: 5,
            mb: 5,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
            }}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              style={{
                borderRadius: "12px",
                objectFit: "contain",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              src="/delivery.png"
              alt="Доставка"
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              maxWidth: "600px",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: { xs: "20px", md: "30px" },
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
                },
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocalShippingIcon
                  sx={{ fontSize: 40, color: "#1976d2", mr: 2 }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#0d47a1",
                    fontSize: { xs: "1.4rem", md: "1.6rem" },
                  }}
                >
                  Доставка в другие города России
                </Typography>
              </Box>
              <List>
                <ListItem
                  sx={{
                    py: 1,
                    "&:hover": {
                      backgroundColor: "#e3f2fd",
                      borderRadius: "8px",
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#424242",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      lineHeight: 1.6,
                    }}
                  >
                    Стоимость заказа включает в себя стоимость заказанных
                    товаров и стоимость почтовой/курьерской доставки до региона
                    получателя. Стоимость доставки зависит от региона получателя
                    (при доставке компанией СДЭК на стоимость доставки влияет
                    также общий вес заказа). Стоимость доставки видно на
                    странице оформления заказа после выбора региона проживания.
                  </Typography>
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
