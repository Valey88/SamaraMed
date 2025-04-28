import { Box, Button, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymantsInfo() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ x: -1000 }} // Начальная позиция (сверху)
      animate={{ x: 0 }} // Конечная позиция (по центру)
      transition={{ duration: 1.2 }} // Длительность анимации
    >
      <Helmet>
        <title>Оплата электронным сертификатом</title>
        <meta
          name="description"
          content="Теперь оплачивать покупки на нашем сайте вы можете и электронным сертификатом."
        />
        <meta
          name="keywords"
          content="оплата, электронный сертификат, покупки"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: `#1E90FF`,
          borderRadius: "10px",
          padding: { xs: "20px", lg: "70px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "unset",
              md: "unset",
              lg: "unset",
            },
            justifyContent: { xs: "unset", md: "space-between" },
            alignItems: { xs: "center", md: "center" },
            gridGap: { xs: "40px", md: 60, lg: 0 },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "100%", lg: "50%" } }}>
            <CardMedia
              component="img"
              image="/Group31.png"
              alt="Изображение, иллюстрирующее оплату электронным сертификатом"
              sx={{
                width: { xs: "100%", sm: "50%", md: "80%", lg: "100%" },
                height: { xs: "300px", sm: "300px", md: "350px", lg: "400px" },
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "100%", lg: "50%" },
              display: "flex",
              flexDirection: "column",
              gridGap: 20,
            }}
          >
            <Typography
              variant="h2"
              color="white"
              sx={{ fontSize: { xs: "40px", lg: "40px" } }}
            >
              Электронный сертификат
            </Typography>
            <Typography variant="h5" color="white" component="p">
              Новая система оплаты покупок на нашем сайте с помощью электронного
              социального сертификата.
            </Typography>
            <Button
              sx={{
                display: "flex",
                justifyContent: "left",
                background: `#87CEEB`,
                width: "max-content",
                padding: "13px 39px",
                color: "white",
                fontSize: "18px",
              }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/certificate");
              }}
            >
              Подробнее
            </Button>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
