import FormField from "./form-field";

type FormProps = {
  form: { username: string; password: string; email: string };
  setForm: React.Dispatch<
    React.SetStateAction<{ username: string; password: string; email: string }>
  >;
};
export default function SignUpFormComponent({ form, setForm }: FormProps) {
  return (
    <>
      <FormField
        title="Username"
        value={form.username}
        handleChangeText={(e: any) => {
          setForm({ ...form, username: e });
        }}
        otherStyles="mt-10"
      />
      <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e: any) => {
          setForm({ ...form, email: e });
        }}
        otherStyles="mt-7"
        keyboardType="email-address"
      />
      <FormField
        title="Password"
        value={form.password}
        handleChangeText={(e: any) => {
          setForm({ ...form, password: e });
        }}
        otherStyles="mt-7"
      />
    </>
  );
}
