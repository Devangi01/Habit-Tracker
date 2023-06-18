import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const HabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState("");
  const [habitGoal, setHabitGoal] = useState("");
  const [habitFrequency, setHabitFrequency] = useState("");
  const [habitStartDate, setHabitStartDate] = useState("");
  const [habitEndDate, setHabitEndDate] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      habitName.trim() === "" ||
      habitGoal.trim() === "" ||
      habitFrequency.trim() === "" ||
      habitStartDate.trim() === "" ||
      habitEndDate.trim() === ""
    ) {
      return; // Prevent submitting empty form
    }

    const newHabit = {
      id: Math.random().toString(),
      name: habitName,
      goal: habitGoal,
      frequency: habitFrequency,
      startDate: habitStartDate,
      endDate: habitEndDate,
    };

    addHabit(newHabit);

    setHabitName("");
    setHabitGoal("");
    setHabitFrequency("");
    setHabitStartDate("");
    setHabitEndDate("");
    setIsFormOpen(false);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={openForm}>
        Add a new habit
      </Button>
      <Dialog open={isFormOpen} onClose={closeForm}>
        <DialogTitle>Add a New Habit</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Goal"
              value={habitGoal}
              onChange={(e) => setHabitGoal(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Frequency"
              value={habitFrequency}
              onChange={(e) => setHabitFrequency(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Start Date"
              value={habitStartDate}
              onChange={(e) => setHabitStartDate(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="End Date"
              value={habitEndDate}
              onChange={(e) => setHabitEndDate(e.target.value)}
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                Add Habit
              </Button>
              <Button variant="outlined" color="secondary" onClick={closeForm}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HabitForm;
