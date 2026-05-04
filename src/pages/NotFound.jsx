import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        404
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/")}
      >
        Go to Dashboard
      </Button>
    </Box>
  );
}