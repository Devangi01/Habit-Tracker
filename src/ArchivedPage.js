import React from "react";

const ArchivedPage = ({ archivedHabits }) => {
  return (
    <div>
      <h2>Archived Habits</h2>
      {archivedHabits.map((habit) => (
        <div key={habit.id}>{habit.name}</div>
      ))}
    </div>
  );
};

export default ArchivedPage;
