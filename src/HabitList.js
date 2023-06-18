import React from "react";
import { Card, CardContent, Typography, Button } from '@mui/material';

import Grid from '@mui/material/Grid';
const HabitList = ({ habits, removeHabit,EditHabit }) => {
  return (
    <Grid container spacing={2}>
      {habits.map((habit) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={habit.id}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2">
                {habit.name}
              </Typography>
              <Typography variant="body2" component="p">
                <strong>Goal:</strong> {habit.goal}
              </Typography>
              <Typography variant="body2" component="p">
                <strong>Frequency:</strong> {habit.frequency}
              </Typography>
              <Typography variant="body2" component="p">
                <strong>Start Date:</strong> {habit.startDate}
              </Typography>
              <Typography variant="body2" component="p">
                <strong>End Date:</strong> {habit.endDate}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeHabit(habit.id)}
            >
              Remove
            </Button> {" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => EditHabit(habit.id)}
            >
              Edit
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HabitList;
