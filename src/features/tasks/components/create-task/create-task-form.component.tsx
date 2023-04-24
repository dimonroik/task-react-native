import React from 'react';
import { Task } from 'types/task';
import { InputGroupsWrapper, InputGroup, FormActionsWrapper, FieldError, FormWrapper } from './create-task-form.styles';
import { Button } from 'react-native-paper';
import { DatePickerModal, en, registerTranslation } from 'react-native-paper-dates';
import { Controller, useForm } from 'react-hook-form';
import { TaskStatus } from 'constant/task-statuses';
registerTranslation('en', en);

interface TaskListItemProps {
  initialTask?: Task;
  onSubmit(v: any): void
}

export const CreateTaskForm = ({ initialTask, onSubmit }: TaskListItemProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      id: initialTask?.id || Math.floor(Math.random() * 1e6),
      description: initialTask?.description || '',
      name: initialTask?.name || '',
      dueDate: initialTask?.dueDate || new Date().valueOf(),
      status: initialTask?.status || TaskStatus.OPENED,
    },
  });

  const [open, setOpen] = React.useState(false);

  return (
    <FormWrapper>
      <InputGroupsWrapper>
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputGroup
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as string}
              error={!!errors.name}
            />
          )}
          name="name"
        />
        {errors.name && <FieldError>This is required.</FieldError>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <InputGroup label="Due date" value={value.toString()} onPressIn={() => setOpen(true)} />
              <DatePickerModal
                locale="en"
                mode="single"
                visible={open}
                onDismiss={() => {
                  setOpen(false);
                }}
                date={new Date(Number(value))}
                onConfirm={({ date }) => {
                  setOpen(false);
                  onChange(date?.valueOf());
                }}
                />
            </>
          )}
          name="dueDate"
        />
        {errors.name && <FieldError>This is required.</FieldError>}

        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputGroup
              placeholder="Description"
              multiline
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as string}
            />
          )}
          name="description"
        />
      </InputGroupsWrapper>

      <FormActionsWrapper>
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>Save</Button>
      </FormActionsWrapper>
    </FormWrapper>
  );
};
