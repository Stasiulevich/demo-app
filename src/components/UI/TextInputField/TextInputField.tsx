import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FormControl, IInputProps, Input } from 'native-base';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';

type TProps = IInputProps & { rules?: ControllerProps['rules'] } & {
  hasContext?: boolean;
  fieldName: string;
  label?: string;
  helperText?: string;
};

const TextInputField: FC<TProps> = ({
  rules,
  placeholder = 'Type here',
  helperText,
  hasContext,
  fieldName,
  isRequired,
  label,
  height,
  size,
  ...rest
}) => {
  const methods = useFormContext();
  const {
    formState: { errors },
    control,
  } = methods;

  const errorMessage = errors[fieldName]?.message;

  return (
    <FormControl isRequired={isRequired} isInvalid={fieldName in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            {...rest}
            height={height || 44}
            size={size || 'lg'}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        )}
        name={fieldName}
        rules={rules}
        defaultValue=""
      />
      {errorMessage ? <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage> : null}
      {helperText ? <FormControl.HelperText>{helperText}</FormControl.HelperText> : null}
    </FormControl>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
