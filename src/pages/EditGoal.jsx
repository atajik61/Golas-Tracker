import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

export default function EditGoal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    target: "",
  });

  // گرفتن goal از localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("goals")) || [];
    const goal = stored.find((g) => g.id === Number(id));

    if (goal) {
      setForm({
        title: goal.title,
        category: goal.category,
        target: goal.target,
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const stored = JSON.parse(localStorage.getItem("goals")) || [];

    const updatedGoals = stored.map((g) =>
      g.id === Number(id)
        ? { ...g, ...form, target: Number(form.target) }
        : g
    );

    localStorage.setItem("goals", JSON.stringify(updatedGoals));

    navigate("/goals");
  };

  return (
    <Box maxWidth={500}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Edit Goal
      </Typography>

      <TextField
        fullWidth
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        select
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value="Health">Health</MenuItem>
        <MenuItem value="Study">Study</MenuItem>
        <MenuItem value="Work">Work</MenuItem>
        <MenuItem value="Personal">Personal</MenuItem>
      </TextField>

      <TextField
        fullWidth
        label="Target"
        name="target"
        type="number"
        value={form.target}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" onClick={handleSave}>
        Save Changes
      </Button>
    </Box>
  );
}