import { Box, Container, Typography, Paper } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import React from "react";
import { motion } from "framer-motion";

export const OrderProcessInfo = () => {
  return (
    <Box
      sx={{
        mb: 5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          p: { xs: 3, md: 5 },
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          width: "100%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
          },
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <ShoppingCartCheckoutIcon
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
            Порядок оформления покупки
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "#424242",
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.8,
          }}
        >
          Для совершения заказа обратитесь по указанному номеру телефона.
          Менеджер примет заявку, уточнит ваши данные, сформирует заказ,
          проверит сертификат и согласует все детали доставки или получения.
        </Typography>
      </Paper>
    </Box>
  );
};
