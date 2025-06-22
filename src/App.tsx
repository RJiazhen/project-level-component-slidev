import type { FormProps } from "antd";
import { ProjectComponetsDemo } from "./pages/projectComponentsDemo";

export default function App() {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return <ProjectComponetsDemo />;
}
