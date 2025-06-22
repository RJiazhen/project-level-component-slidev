/**
 * 简单抽离的，带有下拉框的输入框公共组件
 */
import { Col, Input, Row, Select } from 'antd';
import React, { useMemo } from 'react';

/** 简单抽离的，带有下拉框的输入框公共组件 */
export const SimplyExtractedInputWithSelect = ({
  value,
  onChange,
  options,
}) => {
  /** 输入框的placeholder */
  const inputPlaceHolder = useMemo(() => {
    const selectLabel = options?.find(
      (item) => item.value === value?.select,
    )?.label;
    return `请输入${selectLabel}`;
  }, [value?.select, options]);

  return (
    <Row gutter={8}>
      <Col span={10}>
        <Select
          value={value?.select}
          options={options}
          onChange={(selectValue) => {
            onChange?.({
              select: selectValue,
              input: value?.input,
            });
          }}
        ></Select>
      </Col>
      <Col span={14}>
        <Input
          placeholder={inputPlaceHolder}
          value={value?.input}
          onChange={(e) => {
            onChange?.({
              select: value?.select,
              input: e.target.value,
            });
          }}
          allowClear
        />
      </Col>
    </Row>
  );
};
