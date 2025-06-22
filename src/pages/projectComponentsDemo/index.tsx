import { CompleteInputWithSelect } from '@/components/CompleteInputWithSelect/index.js';
import { CompletedParameterInputWithSelect } from '@/components/CompletedParameterInputWithSelect/index.jsx';
import { SimplyExtractedInputWithSelect } from '@/components/SimplyExtractedInputWithSelect/index.jsx';
import { TypedInputWithSelect } from '@/components/TypedInputWithSelect/index.js';
import type { FormProps } from 'antd';
import { Button, Form } from 'antd';
import { InputWithSelect } from './components/InputWithSelect/index.jsx';

export const ProjectComponentsDemo = () => {
  const onFinish: FormProps['onFinish'] = (values) => {
    alert('onFinish:' + JSON.stringify(values, null, 2));
  };

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

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        queryCondition: {
          select: 'name',
          input: '',
        },
      }}
    >
      {/* 直接使用页面专用的组件 */}
      <Form.Item
        label="查询条件（页面专用的）"
        name="queryCondition"
      >
        <InputWithSelect />
      </Form.Item>
      {/* 使用简单抽离的组件 */}
      <Form.Item
        label="查询条件（简单抽离的）"
        name="queryCondition"
      >
        <SimplyExtractedInputWithSelect options={options} />
      </Form.Item>
      {/* 使用完善了参数的组件 */}
      <Form.Item
        label="查询条件（完善了参数的）"
        name="queryCondition"
      >
        <CompletedParameterInputWithSelect
          options={options}
          // 可以通过透传rowProps、selectColProps、inputColProps等参数，来深度定制公共组件
          rowProps={{
            gutter: 4,
          }}
          selectColProps={{
            span: 4,
          }}
        />
      </Form.Item>
      {/* 使用完善了注释的组件 */}
      <Form.Item
        label="查询条件（完善了类型声明的）"
        name="queryCondition"
      >
        <TypedInputWithSelect options={options} />
      </Form.Item>
      {/* 使用完善了注释和类型的组件 */}
      <Form.Item
        label="查询条件（完善了注释和类型的）"
        name="queryCondition"
      >
        <CompleteInputWithSelect options={options} />
      </Form.Item>
      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
        >
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
