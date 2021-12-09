import { v4 as uuid } from 'uuid';

class Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;

  constructor(
    task: {
      name: string;
      title: string;
      order: number;
      description: string;
      userId: string;
      boardId: string;
      columnId: string;
    },
    id: string = uuid()
  ) {
    this.id = id;
    this.title = task.title;
    this.order = task.order;
    this.description = task.description;
    this.userId = task.userId;
    this.boardId = task.boardId;
    this.columnId = task.columnId;
  }
}

module.exports = Task;
