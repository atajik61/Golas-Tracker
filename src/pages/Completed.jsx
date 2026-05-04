import { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Completed() {
  const { t } = useTranslation();

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("goals")) || [];
    const completed = stored.filter((g) => g.status === "completed");
    setGoals(completed);
  }, []);

  const handleRestore = (id) => {
    const stored = JSON.parse(localStorage.getItem("goals")) || [];

    const updated = stored.map((g) =>
      g.id === id ? { ...g, status: "active" } : g
    );

    localStorage.setItem("goals", JSON.stringify(updated));

    setGoals(updated.filter((g) => g.status === "completed"));
  };

  return (
    <Box>
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        {t("completedGoals")}
      </Typography>

      {/* Empty state */}
      {goals.length === 0 && (
        <Typography>
          {t("noCompletedGoals")}
        </Typography>
      )}

      {/* List */}
      <Grid container spacing={2}>
        {goals.map((goal) => (
          <Grid item xs={12} key={goal.id}>
            <Box
              sx={{
                p: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
              }}
            >
              <Typography>{goal.title}</Typography>

              <Button
                sx={{ mt: 1 }}
                variant="outlined"
                onClick={() => handleRestore(goal.id)}
              >
                {t("restore")}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}