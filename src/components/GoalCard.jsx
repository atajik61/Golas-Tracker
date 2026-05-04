import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Chip,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";

import { getStreak } from "../utils/streak";

import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

import { useTranslation } from "react-i18next";




export default function GoalCard({ goal, onUpdate, onDelete }) {
  const { t } = useTranslation();
  const categoryMap = {
    Health: "health",
    Coding: "coding",
    Learning: "learning",
    Language: "language",
    Personal: "personal"
  };
  const progress = goal.logs.reduce(
    (sum, log) => sum + log.amount,
    0
  );
 

const streak = getStreak(goal.logs);
const navigate = useNavigate();

console.log("goal title:", goal.title, "streak:", streak);
  const percent = goal.target
    ? (progress / goal.target) * 100
    : 0;

    const handleAdd = () => {
      const today = new Date().toISOString().split("T")[0];
    
      const updatedLogs = [
        ...goal.logs,
        { date: today, amount: 1 },
      ];
    
      const newProgress = updatedLogs.reduce(
        (sum, l) => sum + l.amount,
        0
      );
    
      onUpdate({
        ...goal,
        logs: updatedLogs,
        status:
          newProgress >= goal.target
            ? "completed"
            : "active",
      });
    };

  const toggleStatus = () => {
    const newStatus =
      goal.status === "paused" ? "active" : "paused";

    onUpdate({ ...goal, status: newStatus });
  };

  return (
    <Card onClick={() => navigate(`/goals/${goal.id}`)} sx={{ borderRadius: 3, width: "100%",my:2}}>
      <CardContent>

        {/* Title + Category */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">
            {goal.title}
          </Typography>

          <Chip
            label={t(categoryMap[goal.category])}
            size="small"
            color="primary"
            
          />
        </Box>

        {/* Progress */}
        <Box mt={2}>
        <LinearProgress
  variant="determinate"
  value={percent}
  sx={{
    height: 12,
    borderRadius: 6,
  }}
/>

          <Typography variant="caption">
            {progress}/{goal.target}
          </Typography>
        </Box>

        {/* Actions */}
        <Box mt={2} display="flex" gap={1}>

        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleAdd();
          }}
          color="primary"
          >
      <AddIcon />
      </IconButton>

          
          <IconButton
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/goals/edit/${goal.id}`);
          }}
        >
        <EditIcon />
      </IconButton>
      <IconButton
        color="gray"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(goal.id);
        }}
      >
        <DeleteIcon />
      </IconButton>

        </Box>

      </CardContent>
    </Card>
  );
}