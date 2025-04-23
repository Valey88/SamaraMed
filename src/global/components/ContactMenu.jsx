import {
  Box,
  IconButton,
  Modal,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { color } from "framer-motion";
import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";

const CallRequestForm = ({ onClose }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <Stack spacing={2}>
        <Typography variant="h5" component="h2">
          Заказать звонок
        </Typography>
        <Typography sx={{ color: "#1E90FF", fontSize: "20px" }}>
          Для того что бы совершить заказ свяжитесь с нашим менеджером по
          телефону.
        </Typography>
        <Typography
          sx={{
            color: "#1E90FF",
            fontWeight: "bold",
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PhoneIcon sx={{ mr: 1 }} />
          +7(999)888-77-66
        </Typography>
      </Stack>
    </Box>
  );
};

const ContactMenu = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gridGap: 20 }}>
      <IconButton onClick={handleOpen}>
        <img src="/Phone.png" alt="phone" />
      </IconButton>
      <Typography sx={{ color: "#1E90FF", width: "150px", flexWrap: "wrap" }}>
        {" "}
        Для совершения заказа обратитесь к менеджеру
      </Typography>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="call-request-modal"
        aria-describedby="call-request-form"
      >
        <CallRequestForm onClose={handleClose} />
      </Modal>
    </Box>
  );
};

export default ContactMenu;
