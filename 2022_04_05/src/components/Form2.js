import React from "react";
import { useForm } from "react-hook-form";

export default function Form2() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", {
          required: "Please enter your first name.",
        })} // custom message
      />
      <input type="submit" />
    </form>
  );
}
