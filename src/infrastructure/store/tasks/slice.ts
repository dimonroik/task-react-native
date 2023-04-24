import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from 'types/task';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [{
      id: 1,
      name: 'task1',
      status: 'in progress',
      dueDate: '25/04/2022',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere ut esse porro praesentium explicabo dignissimos exercitationem obcaecati, velit, officiis, beatae veniam fuga! Quos, autem ipsum! Impedit saepe quo aliquid.',
    }],
    oldTasks: [] as Task[],
  },
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask(state, action: PayloadAction<Task>) {
      state.tasks = state.tasks.filter(el => el.id !== action.payload.id);
      state.oldTasks = [...state.oldTasks, action.payload];
    },
    updateTask(state, action: PayloadAction<Task>) {
      state.tasks = state.tasks.map(el => {
        return el.id === action.payload.id
          ? action.payload
          : el;
      });
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
