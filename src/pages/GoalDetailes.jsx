import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  LinearProgress,
  Button,
  Chip,
} from "@mui/material";

export default function GoalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [goal, setGoal] = useState(null);

  // گرفتن دیتا از localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("goals")) || [];

    const found = stored.find((g) => g.id === Number(id));
    setGoal(found);
  }, [id]);

  if (!goal) return <Typography>Loading...</Typography>;

  // محاسبه progress
  const progress =
    goal.logs?.reduce((sum, l) => sum + l.amount, 0) || 0;

  const percent = Math.min(
    100,
    Math.round((progress / goal.target) * 100)
  );

  // ➕ اضافه کردن progress
  const handleAdd = () => {
    const today = new Date().toISOString().split("T")[0];

    const updated = {
      ...goal,
      logs: [...(goal.logs || []), { date: today, amount: 1 }],
    };

    // اگر کامل شد → status تغییر کند
    if (progress + 1 >= goal.target) {
      updated.status = "completed";
    }

    setGoal(updated);

    const allGoals =
      JSON.parse(localStorage.getItem("goals")) || [];

    const newGoals = allGoals.map((g) =>
      g.id === updated.id ? updated : g
    );

    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  // ⏸️ pause / resume
  const toggleStatus = () => {
    const updated = {
      ...goal,
      status: goal.status === "paused" ? "active" : "paused",
    };

    setGoal(updated);

    const allGoals =
      JSON.parse(localStorage.getItem("goals")) || [];

    const newGoals = allGoals.map((g) =>
      g.id === updated.id ? updated : g
    );

    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  return (
    <Box>
      {/* عنوان */}
      <Typography variant="h5">{goal.title}</Typography>

      <Chip
        label={goal.category}
        size="small"
        sx={{ mt: 1 }}
      />

      {/* Progress */}
      <Box mt={3}>
        <LinearProgress
          variant="determinate"
          value={percent}
          sx={{ height: 10, borderRadius: 5 }}
        />

        <Typography mt={1}>
          {progress} / {goal.target} ({percent}%)
        </Typography>
      </Box>

      {/* Buttons */}
      <Box mt={3} display="flex" gap={1}>
        <Button variant="contained" onClick={handleAdd}>
          + Add Progress
        </Button>

        <Button variant="outlined" onClick={toggleStatus}>
          {goal.status === "paused" ? "Resume" : "Pause"}
        </Button>

        <Button variant="text" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Box>

      {/* History */}
      <Box mt={4}>
        <Typography variant="h6">History</Typography>

        {goal.logs?.length === 0 && (
          <Typography>No logs yet</Typography>
        )}

        {goal.logs?.map((log, index) => (
          <Typography key={index}>
            📅 {log.date} — {log.amount}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}