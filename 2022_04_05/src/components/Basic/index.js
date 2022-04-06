import { Controller, useForm } from "react-hook-form";

const initValue = {
  numbers: [""],
};

const Basic = () => {
  // #1 watch, setValue, getValues
  const { control, watch, setValue, getValues, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: initValue,
  });

  const numbers = watch("numbers") || [];
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="numbers"
        render={() => {
          return numbers.map((number, index) => {
            const onHandleChange = (e) => {
              const tmp = getValues("numbers");
              const result = tmp.map((item, _index) => {
                if (_index === index) return e.target.value;
                return item;
              });
              setValue("numbers", result);
            };
            return (
              <div key={index}>
                <input value={number} onChange={onHandleChange} />
              </div>
            );
          });
        }}
      />

      <button
        onClick={() => {
          const tmp = getValues("numbers") || [];
          setValue("numbers", [...tmp, ""]);
        }}
      >
        추가
      </button>
      <input type="submit" />
    </form>
  );
};

export default Basic;
