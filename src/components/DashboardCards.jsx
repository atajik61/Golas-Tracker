import Grid from "@mui/material/Grid";
import { stats } from "../data/data";
import StatCard from "./StatCard";
import { getStreak } from "../utils/streak";
import { useTranslation } from "react-i18next";

export default function DashboardCards({ goals = [] }) {
  const { t } = useTranslation();

  const totalStreak = Math.max(
    0,
    ...goals
      .filter((g) => g.type === "daily")
      .map((g) => getStreak(g.logs))
  );
  const totalXP = goals.reduce((sum, g) => {
    const logsXP = g.logs?.length ? g.logs.length * 10 : 0;
    return sum + logsXP;
  }, 0);

  return (
    <Grid container spacing={2}>
      {stats.map((s) => {
        const value =
        s.icon === "streak"
          ? totalStreak
          : s.icon === "star"
          ? totalXP
          : s.value;

        return (
          <Grid item xs={12} sm={6} md={3} key={s.key}>
            <StatCard
              label={t(s.key)}
              value={value}
              icon={s.icon}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}