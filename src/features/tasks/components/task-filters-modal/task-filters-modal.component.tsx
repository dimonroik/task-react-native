import React, { useState } from 'react';
import { Button } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import {
  FilterModal,
  InputGroup,
  ModalTitleText,
  ModalTitleWrapper,
} from './task-filters-modal.styles';
import { SafeArea } from 'components/utility/safe-area.component';
import { format } from 'date-fns';
import { DatePickerModal } from 'react-native-paper-dates';

interface TaskFiltersModalProps {
  visible: boolean;
  initialFilter: any;
  toggleModal(): void;

  onCancel(): void;
  onApply(data: any): void;
}

export const TaskFiltersModal = ({
  initialFilter,
  visible,
  toggleModal,
  onApply,
  onCancel,
}: TaskFiltersModalProps) => {
  const [open, setOpen] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: initialFilter?.name || '',
      status: initialFilter?.status,
      range: [new Date(), new Date()],
    },
  });

  return (
    <FilterModal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={toggleModal}
    >
      <SafeArea>
        <ModalTitleWrapper>
          <ModalTitleText>Filtering Tasks</ModalTitleText>
        </ModalTitleWrapper>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputGroup
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputGroup
              placeholder="Status"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="status"
        />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <InputGroup
                label="Due date"
                value={`${format(value[0], 'dd/MM/yyyy')} - ${format(
                  value[1],
                  'dd/MM/yyyy'
                )}`}
                onPressIn={() => setOpen(true)}
              />
              <DatePickerModal
                locale="en"
                mode="range"
                visible={open}
                onDismiss={() => {
                  setOpen(false);
                }}
                startDate={value[0]}
                endDate={value[1]}
                onConfirm={({ startDate, endDate }) => {
                  setOpen(false);
                  onChange([startDate, endDate]);
                }}
              />
            </>
          )}
          name="range"
        />

        <Button
          title="Apply"
          onPress={() => {
            toggleModal();
            handleSubmit(onApply);
          }}
        />
        <Button
          title="Clear"
          onPress={() => {
            toggleModal();
            onCancel();
          }}
        />
      </SafeArea>
    </FilterModal>
  );
};
