import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskStatus } from 'constant/task-statuses';
import { isBefore } from 'date-fns';
import { Task } from 'types/task';

const sortTasks = (tasks: Task[]) => {
  return tasks.sort((a: Task, b: Task) => {
    if (a.status === TaskStatus.COMPLETED) {
      return 1;
    }
    if (b.status === TaskStatus.COMPLETED) {
      return -1;
    }
    return isBefore(a.dueDate, b.dueDate) ? -1 : 1;
  });
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        id: 1,
        name: 'task1',
        status: TaskStatus.COMPLETED,
        dueDate: new Date().valueOf(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere ut esse porro praesentium explicabo dignissimos exercitationem obcaecati, velit, officiis, beatae veniam fuga! Quos, autem ipsum! Impedit saepe quo aliquid.',
      },
    ],
    oldTasks: [
      {
        id: 5,
        name: 'task1',
        status: TaskStatus.COMPLETED,
        dueDate: 0,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere ut esse porro praesentium explicabo dignissimos exercitationem obcaecati, velit, officiis, beatae veniam fuga! Quos, autem ipsum! Impedit saepe quo aliquid.',
      },
    ],
  },
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks = sortTasks([...state.tasks, action.payload]);
    },
    removeTask(state, action: PayloadAction<Task>) {
      state.tasks = state.tasks.filter((el) => el.id !== action.payload.id);
      state.oldTasks = [...state.oldTasks, action.payload];
    },
    updateTask(state, action: PayloadAction<Task>) {
      state.tasks = sortTasks(
        state.tasks.map((el) =>
          el.id === action.payload.id ? action.payload : el
        )
      );
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
