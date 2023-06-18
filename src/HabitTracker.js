import React, { useState } from "react";
import HabitList from "./HabitList";
import HabitForm from "./HabitForm";
import { Routes, Route } from "react-router-dom";
import ArchivedPage from "./ArchivedPage";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [archivedHabits, setArchivedHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const removeHabit = (habitId) => {
    setHabits(habits.filter((habit) => habit.id !== habitId));
  };

  const editHabit = (habitId) => {
    // Find the habit to edit based on habitId
    const habitToEdit = habits.find((habit) => habit.id === habitId);
    // Perform necessary actions for editing the habit
    // For example, you can show a form or navigate to an edit page
    console.log("Edit habit:", habitToEdit);
  };

  const archiveHabit = (habitId) => {
    const habitToArchive = habits.find((habit) => habit.id === habitId);
    if (habitToArchive) {
      setArchivedHabits([...archivedHabits, habitToArchive]);
      removeHabit(habitId);
    }
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} removeHabit={removeHabit} archiveHabit={archiveHabit} editHabit={editHabit}/>
      <Routes>
        <Route path="/archive" element={<ArchivedPage archivedHabits={archivedHabits} />} />
      </Routes>
    </div>
  );
};

export default HabitTracker;
