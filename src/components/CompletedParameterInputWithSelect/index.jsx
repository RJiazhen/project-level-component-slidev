/**
 * 完善了参数的，带下拉选择框的输入框
 */
import { Col, Input, Row, Select } from 'antd';
import React, { useMemo } from 'react';

/**
 * 完善了参数的，带下拉选择框的输入框
 */
export const CompletedParameterInputWithSelect = ({
  defaultValue,
  selectProps,
  selectColProps,
  inputProps,
  inputColProps,
  value,
  onChange,
  options,
  rowProps,
}) => {
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
