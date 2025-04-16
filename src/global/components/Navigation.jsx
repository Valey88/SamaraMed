import { Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box
      sx={{
        width: "max-content",
        // background: "#FAFAFA",
        borderRadius: "15px",
        display: { xs: "none", sm: "none", md: "", lg: "flex" },
        alignItems: "center",
        padding: "20px 5px",
        // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* <Link to="/delivery">Доставка</Link> */}
      <Link to="/deteils" style={{ color: "#1E90FF", fontSize: "20px" }}>
        Реквизиты
      </Link>
      <Link to="/returnpolicy" style={{ color: "#1E90FF", fontSize: "20px" }}>
        Возврат
      </Link>
      {/* <Link to="/about">О нас</Link> */}
      <Link to="/contacts" style={{ color: "#1E90FF", fontSize: "20px" }}>
        Контакты
      </Link>
    </Box>
  );
};

export default Navigation;
