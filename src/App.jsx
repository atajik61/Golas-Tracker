import { useMemo, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Routes, Route } from "react-router-dom";

import getTheme from "./theme";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { useTranslation } from "react-i18next";

import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Completed from "./pages/Completed";
import Settings from "./pages/Settings";
import CreateGoal from "./pages/CreateGoal";
import GoalDetailes from "./pages/GoalDetailes";
import EditGoal from "./pages/EditGoal";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";

import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const [mode, setMode] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  const { i18n } = useTranslation();

  // ✅ درست: داخل component
  const isMobile = useMediaQuery("(max-width:900px)");

  const theme = useMemo(
    () => getTheme(mode, i18n.language),
    [mode, i18n.language]
  );

  useEffect(() => {
    document.body.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>

        {/* Navbar */}
        <Navbar
          mode={mode}
          onToggleMode={toggleMode}
          onMenuClick={handleDrawerToggle}
        />

        <Box sx={{ display: "flex", width: "100%" }}>

          {/* Sidebar / Drawer */}
          {isMobile ? (
  <Drawer
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{ keepMounted: true }}
    sx={{
      "& .MuiDrawer-paper": {
        width: 240,
        boxSizing: "border-box",
      },
    }}
  >
    <Sidebar onItemClick={handleDrawerToggle} />
  </Drawer>
) : (
  <Box
    sx={{
      width: 240,
      flexShrink: 0,
      borderRight: "1px solid",
      borderColor: "divider",
    }}
  >
    <Sidebar />
  </Box>
)}
          {/* Content */}
          <Box sx={{ flexGrow: 1, py: 3, width: "100%" }}>
            <Container maxWidth="lg">

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/goals/new" element={<CreateGoal />} />
                <Route path="/goals/:id" element={<GoalDetailes />} />
                <Route path="/goals/edit/:id" element={<EditGoal />} />
                <Route path="/categories" element={<Categories />} />
                <Route
                  path="/settings"
                  element={
                    <Settings
                      mode={mode}
                      setMode={setMode}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </Container>
          </Box>

        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;