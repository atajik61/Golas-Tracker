import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AddTaskIcon from "@mui/icons-material/AddTask";
import FlagIcon from "@mui/icons-material/Flag";
import StarIcon from "@mui/icons-material/Star";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useTranslation } from "react-i18next";

function pickIcon(name) {
  switch (name) {
    case "new":
      return <AddTaskIcon />;
    case "done":
      return <CheckCircleIcon />;
    case "streak":
      return <LocalFireDepartmentIcon />;
    case "star":
      return <StarIcon />;
    default:
      return <FlagIcon />;
  }
}

export default function StatCard({ label, value, icon, extra }) {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 2,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}
        <Box>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>

          <Typography variant="h5" sx={{ mt: 1 }}>
            {icon === "streak" ? ` ${value}` : value}
          </Typography>

          {/* optional extra info */}
          {extra && (
            <Typography variant="caption" color="text.secondary">
              {extra}
            </Typography>
          )}
        </Box>

        {/* RIGHT ICON */}
        <Box
          sx={{
            fontSize: 40,
            color: "primary.main",
            display: "flex",
            alignItems: "center",
          }}
        >
          {pickIcon(icon)}
        </Box>
      </CardContent>
    </Card>
  );
}