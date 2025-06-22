/**
 * 带下拉选择框的输入框，可以用于Form.Item组件中，有完整的类型声明
 */
import { Col, Input, Row, Select } from 'antd';
import React, { ComponentProps, useMemo } from 'react';

type Value = {
  select?: ComponentProps<typeof Select>['value'];
  input?: ComponentProps<typeof Input>['value'];
};

type Props = {
  rowProps?: React.ComponentProps<typeof Row>;
  selectProps?: React.ComponentProps<typeof Select>;
  selectColProps?: React.ComponentProps<typeof Col>;
  inputProps?: React.ComponentProps<typeof Input>;
  inputColProps?: React.ComponentProps<typeof Col>;
  options?: React.ComponentProps<typeof Select>['options'];
  defaultValue?: Value;
  value?: Value;
  onChange?: (value: Value) => void;
};

/**
 * 带下拉选择框的输入框，可以用于Form.Item组件中，有完整的类型声明
 */
export const TypedInputWithSelect = ({
  defaultValue,
  selectProps,
  selectColProps,
  inputProps,
  inputColProps,
  value,
  onChange,
  options,
  rowProps,
}: Props) => {
  /** 合并后的options */
  const mergedOptions = useMemo(() => {
    if (selectProps?.options) {
      return selectProps.options;
    }

    return options;
  }, [options, selectProps?.options]);

  /** 输入框的placeholder */
  const inputPlaceHolder = useMemo(() => {
    const selectLabel = mergedOptions?.find(
      (item) => item.value === value?.select,
    )?.label;

    return `请输入${selectLabel}`;
  }, [value?.select, mergedOptions]);

  return (
    <Row
      gutter={8}
      {...rowProps}
    >
      <Col
        span={10}
        {...selectColProps}
      >
        <Select
          defaultValue={defaultValue?.select}
          value={value?.select}
          options={mergedOptions}
          onChange={(selectValue) => {
            onChange?.({
              select: selectValue,
              input: value?.input,
            });
          }}
          {...selectProps}
        ></Select>
      </Col>
      <Col
        span={14}
        {...inputColProps}
      >
        <Input
          defaultValue={defaultValue?.input}
          placeholder={inputPlaceHolder}
          value={value?.input}
          onChange={(e) => {
            onChange?.({
              select: value?.select,
              input: e.target.value,
            });
          }}
          allowClear
          {...inputProps}
        />
      </Col>
    </Row>
  );
};
