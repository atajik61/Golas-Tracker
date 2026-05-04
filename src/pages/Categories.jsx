import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Categories() {
  const { t } = useTranslation();

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(stored);
  }, []);

  const categories = [...new Set(goals.map((g) => g.category))];

  return (
    <Box>
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        {t("categories")}
      </Typography>

      <Grid container spacing={2}>
        {categories.map((cat) => {
          const catGoals = goals.filter((g) => g.category === cat);

          const active = catGoals.filter(
            (g) => g.status === "active"
          ).length;

          const completed = catGoals.filter(
            (g) => g.status === "completed"
          ).length;

          return (
            <Grid item xs={12} sm={6} md={4} key={cat}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  {/* Category name (DATA → NOT translate) */}
                  <Typography variant="h6">
                    {cat}
                  </Typography>

                  {/* UI TEXT → translate */}
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {t("total")}: {catGoals.length}
                  </Typography>

                  <Typography variant="body2">
                    {t("active")}: {active}
                  </Typography>

                  <Typography variant="body2">
                    {t("completed")}: {completed}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}