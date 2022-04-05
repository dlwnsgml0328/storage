import { useForm } from "react-hook-form";

const Form3 = () => {
  const { register, watch, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  console.log("watch: ", watch());

  const onValid = (data) => console.log(data, "onvalid");
  const onInValid = (data) => console.log(data, "onInValid");

  return (
    <div>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          {...register("id", { required: true, minLength: 5 })}
          type="text"
          placeholder="id"
        />
        <input
          {...register("pw", {
            required: true,
            minLength: { value: 5, message: "too short add over 4 words" },
          })}
          type="password"
          placeholder="pw"
        />

        <button type="button" onClick={handleSubmit(onValid, onInValid)}>
          button
        </button>
      </form>
    </div>
  );
};

export default Form3;
