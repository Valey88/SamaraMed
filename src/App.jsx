import { Box, Stack, Typography } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routers";

function App() {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
