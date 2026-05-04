import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar({ onItemClick }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      label: t("dashboard"),
      icon: <DashboardIcon />,
      path: "/",
    },
    {
      label: t("goals"),
      icon: <TrackChangesIcon />,
      path: "/goals",
    },
    {
      label: t("completed"),
      icon: <CheckCircleIcon />,
      path: "/completed",
    },
    {
      label: t("stats"),
      icon: <BarChartIcon />,
      path: "/categories",
    },
    {
      label: t("settings"),
      icon: <SettingsIcon />,
      path: "/settings",
    },
  ];

  return (
    <Box
      sx={{
        width: 240,
        minHeight: "100vh",
        borderRight: "1px solid",
        borderColor: "divider",
        p: 2,
      }}
    >
      <Typography variant="subtitle2" sx={{ mb: 2, color: "text.secondary" }}>
        {t("navigation")}
      </Typography>

      <List>
        {items.map((item) => {
          const active = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.path}
              selected={active}
              onClick={() => {
                navigate(item.path);
                if (onItemClick) onItemClick(); // 👈 مهم
              }}
              sx={{
                borderRadius: 2,
                mb: 1,
                bgcolor: active ? "primary.light" : "transparent",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: active ? "primary.main" : "text.secondary",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                sx={{
                  color: active ? "primary.main" : "text.primary",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {t("loggedIn")}: <b>admin</b>
      </Typography>
    </Box>
  );
}