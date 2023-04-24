import { TaskStatus } from 'constant/task-statuses';

export interface Task {
  id: number;
  dueDate: number;
  name: string;
  status: TaskStatus;
  description: string;
}
