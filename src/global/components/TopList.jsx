import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function TopList() {
  const navigate = useNavigate();
  const products = [
    {
      id: "1",
      name: `Подгузники для взрослых, размер "S" (объем талии/бедер до 90 см), с полным влагопоглощением не менее 1000 г Super Seni Classic`,
      price: 800,
      order_count: 100,
      image: "/f67ac863-d710-4e67-893b-adcee7bcaecd.png",
    },
    {
      id: "2",
      name: `Кровать медицинская Med-Mos механическая E-8 с инфузионной стойкой, рамой для подтягивания, боковыми ограждениями и матрасом`,
      price: 32000,
      order_count: 15,
      image: "/bf53e8d0-7321-4c46-969b-79b085bfa20b.jfif",
    },
    {
      id: "3",
      name: `Кресло-коляска ортоника БАЗА-450, размер сиденья от 40,5 до 50,5 см`,
      price: 29000,
      order_count: 32,
      image: "/f40dac8d-fd16-42dd-ac5b-27942e86c5a0.jfif",
    },
    {
      id: "4",
      name: `Ходунки шагающие складные, Мега оптим
Спасибо`,
      price: 4500,
      order_count: 55,
      image: "/ada7ccff-0ebb-4c53-b5e7-d6e43908d956.jfif",
    },
  ];

  return (
    <Box component="article" id="top-list">
      <Helmet>
        <title>Лучшие товары - Магазина SamaraMed</title>
        <meta
          name="description"
          content="Посмотрите лучшие товары нашего магазина."
        />
        <meta name="keywords" content="товары, магазин, кресло-коляска" />
      </Helmet>
      <Box>
        <img style={{ width: "100%" }} src="/Line 1.png" alt="Линия" />
        <Box sx={{ mt: 3, mb: 4 }}>
          <Typography
            variant="h4"
            color="black"
            sx={{
              mb: 4,
            }}
          >
            Товары
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, md: 4, lg: 2 }}
            columns={{ xs: 4, sm: 4, md: 4 }}
          >
            {products.map((item, index) => (
              <Grid item="true" xs={1} sm={1} md={1} key={index}>
                <Card
                  sx={{
                    maxWidth: { xs: "167px", md: "261px" },
                    height: { xs: "505px", md: "614px" },
                    background: "#F5FCFF",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "300px",
                      borderBottom: "1px solid #E0E0E0",
                    }}
                    //   onClick={() => {
                    //     navigate(`/product/${item.id}`);
                    //   }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={name}
                      sx={{
                        width: "100%",
                        height: { xs: "200px", md: "300px" },
                        objectFit: "contain",
                      }}
                      loading="lazy"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1.2rem" },
                        fontWeight: "bold",
                        mb: 1,
                        width: { xs: "150px", md: "235px" },
                        // overflow: "hidden",
                        // textOverflow: "ellipsis",
                        // whiteSpace: "nowrap",
                      }}
                      // onClick={() => {
                      //   navigate(`/product/${item.id}`);
                      // }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      Всего заказов {item.order_count} шт.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "#1E90FF", fontWeight: "bold" }}
                        //   onClick={() => {
                        //     navigate(`/product/${item.id}`);
                        //   }}
                      >
                        {item.price} ₽
                      </Typography>
                    </Box>
                    {/* <Button
                          variant="contained"
                          sx={{
                            width: "100%",
                            mt: { xs: 1, md: 5 },
                            backgroundColor: "#00B3A4",
                            color: "#FFFFFF",
                            borderRadius: "8px",
                            "&:hover": {
                              backgroundColor: "#00B3A4",
                            },
                          }}
                          onClick={() => {
                            hendleAddProductThithBascket(item.id);
                          }}
                        >
                          В корзину
                        </Button> */}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
