import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  List,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Helmet } from "react-helmet";
import React from "react";
import { motion } from "framer-motion";

export default function Certificate() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, 100%)",
        py: { xs: 4, md: 8 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>
          Электронные сертификаты - Получите государственную поддержку
        </title>
        <meta
          name="description"
          content="Узнайте о электронных сертификатах для получения государственной поддержки на технические средства реабилитации."
        />
        <meta
          name="keywords"
          content="электронные сертификаты, государственная поддержка, технические средства реабилитации, инвалидность"
        />
        <link
          rel="canonical"
          href="https://example.com/electronic-certificate"
        />
      </Helmet>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <header>
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
                Электронные сертификаты
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
        </header>
        <Box component="section">
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              p: { xs: 3, md: 5 },
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
              mb: 4,
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
              <CardGiftcardIcon
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
                Что такое электронный сертификат?
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#424242",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
                mb: 2,
              }}
            >
              Электронный сертификат (ЭС) - это новый платёжный инструмент, при
              помощи которого можно получать государственную поддержку на
              приобретение необходимых технических средств реабилитации (ТСР).
              Электронный сертификат является записью в реестре государственной
              системы электронных сертификатов, которая привязывается к номеру
              банковской карты «МИР» получателя. То есть для лица с
              инвалидностью ЭС работает как банковская карта и позволяет
              мгновенно оплатить выбранное изделие, если оно соответствует
              предписаниям медико-социальной экспертизы. Перечень технических
              средств реабилитации, которые можно приобрести с помощью
              электронного сертификата, утверждается Министерством труда России.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#424242",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              До появления электронного сертификата россияне с инвалидностью
              могли получить средства реабилитации в отделении Фонда социального
              страхования, либо приобрести нужное изделие самостоятельно и затем
              подать документы на компенсацию затраченных средств. Наличие
              электронного сертификата является дополнительным. Он лишь
              дополняет уже существующие возможности получения ТСР и оформляется
              человеком по желанию.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              mt: 3,
              mb: 5,
            }}
          >
            {[
              {
                title: "Как можно оформить электронный сертификат?",
                content:
                  "Вы можете подать заявление на оформление ЭС в сети интернет через портал Госуслуг (www.gosuslugi.ru) или же очно – в вашем территориальном органе ФСС РФ, через МФЦ, либо по почте. Для оформления ЭС через Госуслуги вам понадобится написать заявление и предоставить реквизиты вашей банковской карты «МИР». Для оформления ЭС через территориальный орган ФСС или МФЦ вам понадобятся: заявление; документ, удостоверяющий личность, реквизиты вашей банковской карты «МИР».",
              },
              {
                title: "Как быстро я получу электронный сертификат?",
                content:
                  "После подачи нужного обращения вас известят об открытии для вас ЭС в течение пяти дней.",
              },
              {
                title: "В чём плюсы электронного сертификата?",
                content:
                  "Удобно то, что господдержкой вы можете воспользоваться быстро — непосредственно в момент покупки, выбрав нужный товар. ЭС индивидуализирует подход к приобретению требуемых ТСР – вы можете выбрать именно то изделие, которое вам нравится.",
              },
              {
                title: "Какую информацию содержит электронный сертификат?",
                content:
                  "В ЭС указан вид и количество ТСР, которые вы можете приобрести по сертификату; максимальная цена за единицу ТСР, которую можно оплатить сертификатом; срок действия, в течение которого можно использовать сертификат для оплаты ТСР.",
              },
            ].map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  background:
                    "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
                  color: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                  },
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon fontSize="medium" sx={{ color: "#fff" }} />
                  }
                  sx={{
                    fontSize: { xs: "18px", md: "20px" },
                    fontWeight: "medium",
                  }}
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    maxHeight: 400,
                    overflow: "auto",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  <List>
                    <ListItem
                      sx={{
                        py: 1,
                        "&:hover": {
                          backgroundColor: "#e0e0e0",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#424242",
                          fontSize: { xs: "16px", md: "18px" },
                        }}
                      >
                        {item.content}
                      </Typography>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Box
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
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              {
                title:
                  "Как определяется номинал моего электронного сертификата?",
                content:
                  "Фонд социального страхования записывает на ЭС определённую сумму, которую можно использовать для приобретения ТСР. Сумма, положенная по сертификату, определяется по цене таких технических средств реабилитации, которые Фонд социального страхования приобрёл по государственному контракту для обеспечения граждан. Причём, согласно действующему законодательству, учитывается последний исполненный контракт в данном регионе. При этом при расчёте компенсации по электронному сертификату не используются те закупки, когда поставщик демпинговал.",
                icon: (
                  <InfoIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
                ),
              },
              {
                title: "Что можно купить с помощью электронного сертификата?",
                content:
                  "Выбор ТСР по электронному сертификату стал более разнообразным. Люди с инвалидностью по нему могут приобрести: Трости, костыли, опоры и поручни; — Кресла-коляски с ручным приводом, с электроприводом и аккумуляторные батареи к ним; — Ортопедическую обувь; — Противопролежневые матрацы и подушки; — Приспособления для одевания, раздевания и захвата предметов; — Специальную одежду; — Специальные устройства для чтения «говорящих книг», для оптической коррекции слабовидения; — Медицинские термометры и тонометры с речевым выходом; — Сигнализаторы звука световые и вибрационные; — Слуховые аппараты, в том числе с ушными вкладышами индивидуального изготовления кресло-стулья с санитарным оснащением; — Брайлевский дисплей, программное обеспечение экранного доступа; — Абсорбирующее белье и подгузники.",
                icon: (
                  <ShoppingCartIcon
                    sx={{ fontSize: 40, color: "#1976d2", mr: 2 }}
                  />
                ),
              },
              {
                title:
                  "Каков механизм оплаты товара по электронному сертификату?",
                content:
                  "Деньги резервируются, но не перечисляются на вашу банковскую карту «МИР». При оплате картой того изделия, которое предусмотрено в вашей индивидуальной программе реабилитации (абилитации), средства поступят напрямую продавцу.",
                icon: (
                  <InfoIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
                ),
              },
              {
                title:
                  "Что делать, если мне понравилось ТСР, чья стоимость больше номинала моего ЭС?",
                content:
                  "Если вам понравилось изделие по цене, превышающей сумму, положенную вам по электронному сертификату, вы всё равно сможете с его помощью оплатить покупку, доплатив из личных средств по карте МИР разницу в цене. Единственное условие – изделие должно соответствовать ИПРА (Индивидуальной программе реабилитации или абилитации инвалида).",
                icon: (
                  <InfoIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
                ),
              },
              {
                title:
                  "Как выяснить, выгоден ли для меня электронный сертификат?",
                content:
                  "Посмотреть сумму, привязанную к тому или иному ТСР, можно в электронном каталоге. https://ktsr.sfr.gov.ru/ru-RU/ Здесь же можно посмотреть, каков номинал вашего электронного сертификата. Как совершить покупку нужного ТСР при помощи электронного сертификата? Найдите в «Каталоге технических средств реабилитации» на сайте ФСС РФ (https://ktsr.sfr.gov.ru/ru-RU/) необходимый вам товар. Выберите изделие в «Каталоге технических средств реабилитации» (https://ktsr.sfr.gov.ru/ru-RU/) в разделе «карточка товара». Примите решение о необходимости совершения покупки по электронному сертификату.",
                icon: (
                  <InfoIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
                ),
              },
              {
                title:
                  "Где посмотреть ближайшие ко мне точки, работающие с электронным сертификатом?",
                content:
                  "Проверить в каталоге технических средств реабилитации Фонда социального страхования на интерактивной карте подключение удобной для вас торговой точки можно на сайте: https://ktsr.sfr.gov.ru/ru-RU/",
                icon: (
                  <InfoIcon sx={{ fontSize: 40, color: "#1976d2", mr: 2 }} />
                ),
              },
            ].map((item, index) => (
              <List
                key={index}
                sx={{
                  py: 2,
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                    borderRadius: "8px",
                  },
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {item.icon}
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", md: "24px" },
                      fontWeight: "bold",
                      color: "#0d47a1",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <List>
                  <ListItem
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      color: "#424242",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.content}
                  </ListItem>
                </List>
              </List>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
