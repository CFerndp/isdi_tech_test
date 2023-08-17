db = db.getSiblingDB('tasks_db');

db.createCollection('task_collection');

db.task_collection.insertMany([
  { id: 1, name: "Task 1", done: false },
  { id: 2, name: "Task 2", done: true },
  { id: 3, name: "Task 3", done: false },
  { id: 4, name: "Task 4", done: true },
  { id: 5, name: "Task 5", done: false },
  { id: 6, name: "Task 6", done: true },
  { id: 7, name: "Task 7", done: false },
]);
