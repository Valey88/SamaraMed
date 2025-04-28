import {
    Box,
    Container,
    Typography,
    Divider,
    Paper,
  } from "@mui/material";
  import PolicyIcon from "@mui/icons-material/Policy";
  import { Helmet } from "react-helmet";
  import React from "react";
  import { motion } from "framer-motion";
  
  export default function PrivacyPolicy() {
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
          <title>Политика конфиденциальности - SamaraMed</title>
          <meta
            name="description"
            content="Ознакомьтесь с политикой конфиденциальности SamaraMed. Узнайте, как мы собираем, используем и защищаем ваши персональные данные."
          />
          <meta
            name="keywords"
            content="политика конфиденциальности, SamaraMed, защита данных, персональные данные"
          />
          <link rel="canonical" href="https://www.yourwebsite.com/privacy-policy" />
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
                Политика конфиденциальности
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
  
          {/* Content Section */}
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              p: { xs: 3, md: 5 },
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
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <PolicyIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#0d47a1",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                }}
              >
                Общие положения
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#424242",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
                mb: 3,
              }}
            >
              Настоящая Политика конфиденциальности регулирует порядок сбора,
              использования, хранения и раскрытия информации, полученной от
              пользователей сайта ИП Байгузова «SamaraMed» (далее — «Сайт»). Мы
              стремимся обеспечить защиту ваших персональных данных и соблюдаем
              требования Федерального закона РФ «О персональных данных» № 152-ФЗ от
              27 июля 2006 года.
            </Typography>
  
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "medium",
                  color: "#0d47a1",
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  mb: 1,
                }}
              >
                Сбор информации
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#424242",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Мы можем собирать персональные данные, такие как имя, номер телефона,
                адрес электронной почты и адрес доставки, когда вы оформляете заказ,
                связываетесь с нами через форму обратной связи или по телефону. Также
                мы можем собирать техническую информацию, включая IP-адрес, тип
                браузера и данные об использовании сайта, с помощью cookies и других
                аналитических инструментов.
              </Typography>
            </Box>
  
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "medium",
                  color: "#0d47a1",
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  mb: 1,
                }}
              >
                Использование информации
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#424242",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Собранные данные используются для:
                <ul>
                  <li>Обработки и выполнения ваших заказов;</li>
                  <li>Предоставления информации о товарах и услугах;</li>
                  <li>Улучшения работы сайта и качества обслуживания;</li>
                  <li>Связи с вами по вопросам заказов или поддержки;</li>
                  <li>Соблюдения законодательных требований.</li>
                </ul>
              </Typography>
            </Box>
  
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "medium",
                  color: "#0d47a1",
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  mb: 1,
                }}
              >
                Защита данных
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#424242",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Мы принимаем все необходимые технические и организационные меры для
                защиты ваших персональных данных от несанкционированного доступа,
                изменения, раскрытия или уничтожения. Доступ к вашим данным имеют
                только уполномоченные сотрудники, обязанные соблюдать
                конфиденциальность.
              </Typography>
            </Box>
  
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "medium",
                  color: "#0d47a1",
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  mb: 1,
                }}
              >
                Передача данных третьим лицам
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#424242",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Мы не передаем ваши персональные данные третьим лицам, за исключением
                случаев, когда это необходимо для выполнения заказа (например,
                курьерским службам) или требуется по закону. Все третьи лица,
                получающие доступ к данным, обязаны соблюдать конфиденциальность.
              </Typography>
            </Box>
  
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "medium",
                  color: "#0d47a1",
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  mb: 1,
                }}
              >
                Права пользователей
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#424242",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Вы имеете право запросить доступ к вашим персональным данным,
                исправить их, удалить или ограничить их обработку. Для этого
                свяжитесь с нами по электронной почте doverie.sam63@mail.ru или по
                телефону +7 (903) 086 3091.
              </Typography>
            </Box>
  
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "medium",
                  color: "#0d47a1",
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  mb: 1,
                }}
              >
                Изменения в политике
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#424242",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Мы можем обновлять данную Политику конфиденциальности в случае
                изменения законодательства или наших процессов. Актуальная версия
                всегда доступна на нашем сайте. Дата последнего обновления: 28 апреля
                2025 года.
              </Typography>
            </Box>
  
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "medium",
                  color: "#0d47a1",
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  mb: 1,
                }}
              >
                Контактная информация
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#424242",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Если у вас есть вопросы по поводу данной Политики
                конфиденциальности, свяжитесь с нами:
                <br />
                Email: doverie.sam63@mail.ru
                <br />
                Телефон: +7 (903) 086 3091
                <br />
                Адрес: г. Самара, ул. Киевская 1В
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    );
  }