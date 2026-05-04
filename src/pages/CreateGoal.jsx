import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CreateGoal() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    type: "daily",
    target: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.title || !form.category || !form.target) {
      alert("Please fill all fields");
      return;
    }

    const newGoal = {
      id: Date.now(),
      title: form.title,
      category: form.category,
      type: form.type,
      target: Number(form.target),
      status: "active",
      logs: [],
    };

    // موقت: ذخیره در localStorage
    const stored =
      JSON.parse(localStorage.getItem("goals")) || [];

    localStorage.setItem(
      "goals",
      JSON.stringify([...stored, newGoal])
    );

    navigate("/goals");
  };

  return (
    <Box maxWidth={500}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Create New Goal
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
        select
        label="Type"
        name="type"
        value={form.type}
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value="daily">Daily</MenuItem>
        <MenuItem value="count">Count</MenuItem>
        <MenuItem value="time">Time</MenuItem>
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

      <Button variant="contained" onClick={handleSubmit}>
        Create Goal
      </Button>
    </Box>
  );
}