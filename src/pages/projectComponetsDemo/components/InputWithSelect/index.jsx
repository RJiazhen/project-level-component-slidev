/**
 * 页面专用的业务组件 文件
 */
import { Col, Input, Row, Select } from 'antd';
import React, { useMemo } from 'react';

/** 页面专用的，带有下拉框的输入框组件 */
export const InputWithSelect = ({ value, onChange }) => {
  /** 下拉框的选项 */
  const options = [
    {
      label: '姓名',
      value: 'name',
    },
    {
      label: '身份证号',
      value: 'id',
    },
    {
      label: '手机号',
      value: 'phone',
    },
  ];

  /** 输入框的placeholder */
  const inputPlaceHolder = useMemo(() => {
    const selectLabel = options?.find(
      (item) => item.value === value?.select,
    )?.label;
    return `请输入${selectLabel}`;
  }, [value?.select]);

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
