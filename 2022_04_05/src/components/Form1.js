import React from "react";
import { useForm } from "react-hook-form";

const Form1 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: { first_name: "bill", last_name: "luo" },
  });

  console.log(watch("first_name"));

  const firstName = watch("first_name");

  return (
    <form onSubmit={handleSubmit((data) => console.log("form data: ", data))}>
      <input
        {...register("first_name", { required: true })}
        placeholder="First Name"
      />
      <p>{firstName}</p>
      <p>{errors.first_name?.message}</p>
      <input
        {...register("last_name", {
          required: "over the 4 slength of string data is required",
          minLength: {
            value: 4,
            message: "Min length is 4",
          },
        })}
        placeholder="Last Name"
      />
      <p>{errors.last_name?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default Form1;
