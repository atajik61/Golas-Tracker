import { Box, Typography, Button, Switch, Paper, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Settings({ mode, setMode }) {
  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.dir = newLang === "fa" ? "rtl" : "ltr";
  };

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        {t("settings")}
      </Typography>

      {/* Language Card */}
      <Paper sx={{ p: 2, mb: 3, borderRadius: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          {t("language")}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button
            variant={i18n.language === "en" ? "contained" : "outlined"}
            onClick={() => changeLang("en")}
          >
            EN
          </Button>

          <Button
            variant={i18n.language === "fa" ? "contained" : "outlined"}
            onClick={() => changeLang("fa")}
          >
            FA
          </Button>
        </Stack>
      </Paper>

      {/* Theme Card */}
      <Paper sx={{ p: 2, borderRadius: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
          {t("darkMode")}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body2" color="text.secondary">
            {mode === "dark" ? "Dark theme enabled" : "Light theme enabled"}
          </Typography>

          <Switch checked={mode === "dark"} onChange={toggleTheme} />
        </Box>
      </Paper>

    </Box>
  );
}