import { useForm, SubmitHandler } from 'react-hook-form';
import { hyperForm } from "@/lib/hyperForm";

type Inputs = {
  name: string;
  email: string;
  contents: string;
};

const formId: string = import.meta.env.VITE_HYPER_FORM_ID;

export const useContacts = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (params: Inputs) => {
    // @TODO エラーハンドリングを追加する
    hyperForm.post(`async/${formId}/complete`, params);
  }

  return {
    handleSubmit,
    register,
    errors,
    onSubmit,
  }
}
