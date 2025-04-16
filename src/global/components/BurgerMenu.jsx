import { Drawer, Box, List, ListItem, IconButton } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BurgerMenu = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 300 }} role="presentation">
      <List>
        <ListItem>
          <Link style={{ color: "#1E90FF", marginLeft: 2 }} to="/deteils">
            Реквизиты
          </Link>
        </ListItem>
        <ListItem>
          <Link style={{ color: "#1E90FF", marginLeft: 2 }} to="/returnpolicy">
            Возврат
          </Link>
        </ListItem>

        <ListItem>
          <Link style={{ color: "#1E90FF", marginLeft: 2 }} to="/contacts">
            Контакты
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default BurgerMenu;
