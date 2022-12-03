import { Message } from '@alifd/next';
import { submitForm } from '@/services/form';
import { definePageConfig } from 'ice';

export default function Form() {
  const onFinish = async (values: Record<string, any>) => {
    submitForm(values).then(() => {
      Message.success('提交成功');
    });
  };

  return (
    <>Form</>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
  };
});
