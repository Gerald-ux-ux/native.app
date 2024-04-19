import { useState } from "react";
import { signIn } from "../../../lib/appwrite";
import { router } from "expo-router";

export default function useSignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({
    message: "",
    success: true,
  });
  const submit = async () => {
    setIsSubmitting(true);
    if (!form.email || !form.password) {
      setError({
        ...error,
        message: "Please fill all the fields",
      });
    }
    const res = await signIn(form.email, form.password);
    if (res.success === false) {
      setError({
        message: res.message,
        success: false,
      });
    } else {
      setError({
        ...error,
        success: true,
      });
      router.replace("/home");
    }
    setIsSubmitting(false);
  };
  return {
    form,
    setForm,
    error,
    submit,
    isSubmitting,
  };
}
