import { useEffect, useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import GoalCard from "../components/GoalCard";

export default function Goals() {
  const { t } = useTranslation();

  const [goals, setGoals] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(stored);
  }, []);

  const handleUpdate = (updatedGoal) => {
    const updated = goals.map((g) =>
      g.id === updatedGoal.id ? updatedGoal : g
    );

    setGoals(updated);
    localStorage.setItem("goals", JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const updated = goals.filter((g) => g.id !== id);

    setGoals(updated);
    localStorage.setItem("goals", JSON.stringify(updated));
  };

  const filteredGoals = goals
    .filter((g) => {
      if (filter === "all") return true;
      return g.status === filter;
    })
    .filter((g) =>
      g.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Box>
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        {t("goals")}
      </Typography>

      {/* Search */}
      <TextField
        fullWidth
        placeholder={t("search")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
        >
          {t("all")}
        </Button>

        <Button
          variant={filter === "active" ? "contained" : "outlined"}
          onClick={() => setFilter("active")}
        >
          {t("active")}
        </Button>

        <Button
          variant={filter === "completed" ? "contained" : "outlined"}
          onClick={() => setFilter("completed")}
        >
          {t("completed")}
        </Button>

        <Button
          variant={filter === "paused" ? "contained" : "outlined"}
          onClick={() => setFilter("paused")}
        >
          {t("paused")}
        </Button>
      </Box>

      {/* List */}
      <Grid container spacing={2}>
        {filteredGoals.length === 0 ? (
          <Typography sx={{ ml: 2 }}>
            {t("notFound")}
          </Typography>
        ) : (
          filteredGoals.map((goal) => (
            <Grid item xs={12} key={goal.id}>
              <GoalCard
                goal={goal}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}