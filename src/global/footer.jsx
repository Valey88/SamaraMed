import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import UndoIcon from "@mui/icons-material/Undo";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const menuItems = [
  { text: "Реквизиты", href: "/deteils", icon: <DescriptionIcon /> },
  { text: "Возврат", href: "/returnpolicy", icon: <UndoIcon /> },
  { text: "Контакты", href: "/contacts", icon: <ContactPhoneIcon /> },
];

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%", // Ensure the parent container takes full viewport height
      }}
    >
      <Box sx={{ flexGrow: 1 }} /> {/* Pushes footer to the bottom */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #e3f2fd 0%, #bbdefb 100%)",
          pt: 6,
          pb: 4,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "30px", lg: "5%" },
            alignItems: { xs: "center", lg: "flex-start" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Box sx={{ width: { xs: "100%", lg: "35%" } }}>
            <Typography
              variant="h5"
              sx={{
                color: "#0d47a1",
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "1.8rem" },
                mb: 2,
              }}
            >
              ИП Байгузова «SamaraMed»
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: { xs: "18px", md: "20px" },
                  color: "#1565c0",
                  textDecoration: "none",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#0d47a1",
                    transform: "translateY(-2px)",
                  },
                }}
                href={item.href}
              >
                {item.icon}
                {item.text}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "15px", md: "20px" },
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", lg: "35%" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#0d47a1",
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              +7 (903) 088 3091
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", lg: "35%" },
              gap: 1,
              ml: { sm: 2 },
              alignItems: "center",
              flexDirection: { xs: "column", sm: "column" },
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              style={{ height: "40px" }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              style={{ height: "40px" }}
            />
            <img
              src="https://online-check.business.ru/wp-content/uploads/2019/10/PAYKEEPER-optimized.png"
              alt="PayKeeper"
              style={{ height: "50px" }}
            />
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(180deg, #42a5f5 0%, #1976d2 100%)",
          height: "60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "10px", sm: "0" },
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#ffffff", fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            ИП Байгузова «SamaraMed». Все права защищены.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link
              href="/privacy/policy"
              sx={{
                color: "#ffffff",
                fontSize: { xs: "0.9rem", md: "1rem" },
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Политика конфиденциальности
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
