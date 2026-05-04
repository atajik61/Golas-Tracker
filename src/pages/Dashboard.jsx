import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import GoalCard from "../components/GoalCard";
import DashboardCards from "../components/DashboardCards";

export default function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [goals, setGoals] = useState(() => {
    const stored = localStorage.getItem("goals");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const handleUpdate = (updatedGoal) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === updatedGoal.id ? updatedGoal : g))
    );
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Delete this goal?");
    if (confirm) {
      setGoals((prev) => prev.filter((g) => g.id !== id));
    }
  };

  const activeGoals = goals.filter((g) => g.status !== "completed");

  return (
    <>
      <DashboardCards goals={goals} />

      {/* Quick Actions */}
      <Box sx={{ display: "flex", gap: 2, my: 2 }}>
        <Button variant="contained">
          {t("newGoal")}
        </Button>

        <Button
          variant="outlined"
          onClick={() => navigate("/completed")}
        >
          {t("completedGoals")}
        </Button>
      </Box>

      <Typography variant="h6" sx={{ my: 2, fontWeight: 600 }}>
        {t("activeGoals")}
      </Typography>

      <Grid container spacing={0} sx={{ width: "100%" }}>
        {activeGoals.map((goal) => (
          <Grid item xs={12} key={goal.id} sx={{ width: "100%" }}>
            <GoalCard
              goal={goal}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}