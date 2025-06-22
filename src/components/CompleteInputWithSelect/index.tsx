/**
 * 带下拉选择框的输入框，可以用于Form.Item组件中，有完整的注释以及类型声明
 */
import { Col, Input, Row, Select } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ComponentProps, useMemo } from 'react';

/** 组件值类型 */
type Value<SelectValue = any> = {
  select?: SelectValue;
  input?: string;
};

/** 组件参数类型 */
// 注意这里为了让Select相关参数类型被正确推导，参考原Select的类型声明，添加了泛型
type Props<
  SelectValueType = any,
  SelectOptionType extends BaseOptionType = DefaultOptionType,
> = {
  /** 透传给Row组件的参数 */
  rowProps?: ComponentProps<typeof Row>;
  /** 透传给Select组件的参数 */
  selectProps?: ComponentProps<
    typeof Select<SelectValueType, SelectOptionType>
  >;
  /** 透传给包裹Select的Col组件的参数 */
  selectColProps?: ComponentProps<typeof Col>;
  /** 透传给Input组件的参数 */
  inputProps?: ComponentProps<typeof Input>;
  /** 透传给包裹Input的Col组件的参数 */
  inputColProps?: ComponentProps<typeof Col>;
  /** 下拉选项 */
  options?: ComponentProps<
    typeof Select<SelectValueType, SelectOptionType>
  >['options'];
  /** 默认值 */
  defaultValue?: Value<SelectValueType>;
  value?: Value<SelectValueType>;
  onChange?: (value: Value<SelectValueType>) => void;
};

/**
 * 带下拉选择框的输入框，可以用于Form.Item组件中，有完整的注释以及类型声明
 * @param props
 * @param props.rowProps 透传给Row组件的参数
 * @param props.selectProps 透传给Select组件的参数
 * @param props.selectColProps 透传给包裹Select的Col组件的参数
 * @param props.inputProps 透传给Input组件的参数
 * @param props.inputColProps 透传给包裹Input的Col组件的参数
 * @param props.options 下拉选项
 * @param props.defaultValue 默认值
 * @param props.value 当前值
 * @param props.onChange 值变化时的回调
 *
 * @example
 *
 * 直接在`Form.Item`或`ProFormItem`中使用：
 *
 * ```tsx
 * <Form.Item name="inputWithSelect" label="带下拉选择框的输入框">
 *   <InputWithSelect />
 * </Form.Item>
 * ```
 *
 * 单独作为受控组件使用：
 * ```tsx
 * <InputWithSelect
 *   options={[
 *     { value: '1', label: '选项1' },
 *     { value: '2', label: '选项2' },
 *   ]}
 *   inputProps={{
 *     placeholder: '请输入',
 *   }}
 *   selectColProps={{
 *     span: 10,
 *   }}
 *   inputColProps={{
 *     span: 14,
 *   }}
 *   defaultValue={{
 *     select: '1',
 *     input: '选项1',
 *   }}
 *   value={{
 *     select: '1',
 *     input: '选项1',
 *   }}
 *   onChange={(value) => {
 *     console.log(value);
 *   }}
 * />
 * ```
 */
export const CompleteInputWithSelect = <
  SelectValueType = any,
  SelectOptionType extends
    | BaseOptionType
    | DefaultOptionType = DefaultOptionType,
>({
  defaultValue,
  selectProps,
  selectColProps,
  inputProps,
  inputColProps,
  value,
  onChange,
  options,
  rowProps,
}: Props<SelectValueType, SelectOptionType>) => {
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
        <Select<SelectValueType, SelectOptionType>
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
