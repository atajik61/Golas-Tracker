import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useTranslation } from "react-i18next";

export default function Navbar({ onMenuClick, mode, onToggleMode }) {
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery("(max-width:900px)");

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fa" : "en");
  };

  return (
    <AppBar position="static" elevation={4}>
      <Toolbar sx={{ gap: 1 }}>

        {/* 👇 فقط در موبایل */}
        {isMobile && (
          <IconButton color="inherit" edge="start" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Title */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            {t("goalsTracker")}
          </Typography>
        </Box>

        {/* Theme toggle */}
        <Tooltip title={mode === "dark" ? t("lightMode") : t("darkMode")}>
          <IconButton color="inherit" onClick={onToggleMode}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>

        {/* Language button */}
        <Button
          variant="outlined"
          color="inherit"
          onClick={toggleLang}
          sx={{
            borderRadius: 3,
            px: 2,
            textTransform: "none",
            fontWeight: 600,
            borderColor: "rgba(255,255,255,0.5)",
          }}
        >
          {i18n.language === "en" ? "FA 🇮🇷" : "EN 🇬🇧"}
        </Button>

      </Toolbar>
    </AppBar>
  );
}