db = db.getSiblingDB('tasks_db');

db.tasks.insertMany([
  {  name: "Task 1", done: false },
  {  name: "Task 2", done: true },
  {  name: "Task 3", done: false },
  {  name: "Task 4", done: true },
  {  name: "Task 5", done: false },
  {  name: "Task 6", done: true },
  {  name: "Task 7", done: false },
]);
