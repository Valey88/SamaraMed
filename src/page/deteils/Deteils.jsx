import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";
import { Helmet } from "react-helmet";
import React from "react";

export default function Details() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#fff",
        padding: { xs: "20px", md: "0px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Helmet>
        <title>
          Реквизиты компании SamaraMed - Полная информация о компании
        </title>
        <meta
          name="description"
          content="Узнайте полные реквизиты компании SamaraMed, включая ИНН, КПП, адрес и контактные данные. Мы предоставляем качественные медицинские услуги."
        />
        <meta
          name="keywords"
          content="реквизиты SamaraMed, ИНН SamaraMed, контактные данные SamaraMed, адрес SamaraMed"
        />
      </Helmet>
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            mb: 5,
            animation: "fadeIn 1s ease-in-out",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#0d47a1",
              letterSpacing: "0.5px",
              mb: 1,
            }}
          >
            Реквизиты
          </Typography>
          <Divider
            sx={{
              my: 2,
              borderColor: "#1976d2",
              borderWidth: "2px",
              width: "100px",
              margin: "0 auto",
              transition: "width 0.3s ease",
              "&:hover": {
                width: "150px",
              },
            }}
          />
          <Typography
            component="h2"
            variant="h5"
            sx={{
              fontWeight: "medium",
              color: "#1565c0",
              mt: 2,
              fontStyle: "italic",
            }}
          >
            ИП Байгузова «SamaraMed»
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: { xs: "20px", md: "30px" },
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <List>
            {[
              {
                label: "Адрес",
                value:
                  "ИНН 632209957009, Россия, Самарская обл., г. Самара, пр-кт Кирова, д. 365, кв. 93",
              },
              { label: "БИК", value: "044525974" },
              { label: "Корр. счёт", value: "330101810145250000974" },
              { label: "Расчётный счёт", value: "40802810400008124772" },
              { label: "Email", value: "doverie.sam63@mail.ru" },
            ].map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  py: 1.5,
                  borderBottom: index < 4 ? "1px solid #e0e0e0" : "none",
                  transition: "background-color 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: "bold",
                      color: "#0d47a1",
                      mb: 0.5,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#424242", fontSize: "1.1rem" }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
