import { useContacts } from "@/hooks/useContact";

const Contacts: React.FC = () => {
  
  const { register, handleSubmit, onSubmit, errors } = useContacts();
  
  return (
    <>
      <p>Contacts</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>お名前</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name !== undefined && 'お名前は必須です'}
        </div>
        <div>
          <label>メールアドレス</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.contents !== undefined && 'メールアドレスは必須です'}
        </div>
        <div>
          <label>お問合せ内容</label>
          <textarea {...register('contents', { required: true })} />
          {errors.contents !== undefined && 'お問合せ内容は必須です'}
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Contacts;
