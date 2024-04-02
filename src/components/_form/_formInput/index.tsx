import React from "react";

import { UseFormRegister } from "react-hook-form";

import { ShowPassBtn } from "../../../components";

import cs from "../../../scss/helpers.module.scss";

type FormInputProps = {
  isPass: boolean;
  register: UseFormRegister<any>;
  classNameWrapper: string;
  classNameInput: string;
  error: string | undefined;
  name: string;
  type: string;
  placeholder: string;
};

export const FormInput: React.FC<FormInputProps> = ({
  isPass,
  classNameWrapper,
  classNameInput,
  error = "",
  register,
  name,
  type,
  placeholder,
}) => {
  const [isShowPass, setIsShowPass] = React.useState(false);

  return (
    <div className={`${classNameWrapper} ${error ? cs.inputWrapperActive : cs.inputWrapper}`}>
      <div className={cs.inputWrapperInner}>
        <input
          {...register(name)}
          type={isPass ? (isShowPass ? "text" : "password") : type}
          placeholder={placeholder}
          className={classNameInput}
        />

        {isPass && (
          <ShowPassBtn setIsShowPass={() => setIsShowPass((b) => !b)} isShowPass={isShowPass} />
        )}
      </div>

      <strong className={cs.inputMessage}>{error}</strong>
    </div>
  );
};

// const password = watch("password");
// React.useEffect(() => {
//   if (!submitCount) return;
//   trigger("confirmPassword");
// }, [password, trigger, submitCount]);

/* <FormInput
  isPass={false}
  classNameWrapper={s.inputWrapper}
  classNameInput={cs.input}
  error={errors?.fullname?.message}
  register={register}
  name="fullname"
  type="text"
  placeholder="Full Name"
/>; */

// const TagsSchema = z
//   .string()
//   .refine((value) => value.replace(/(\s|,)/g, "").length >= 1, {
//     message: "Tags should contain atleast 1 tag",
//   })
//   .optional();

// **
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// **
// const FormSchema = z
//   .object({
//     fullname: z
//       .string()
//       .min(2, "Fullname should be atleast 2 characters")
//       .max(45, "Fullname must be less than 45 characters"),
//     // .regex(new RegExp("^[a-zA-Z]+$"), "No special characters allowed"),
//     email: z.string().email("Please enter a valid email address"),
//     password: z
//       .string()
//       .min(6, "Password should be atleast 6 characters")
//       .max(45, "Password must be less than 45 characters"),
//     confirmPassword: z
//       .string()
//       .min(6, "Password should be atleast 6 characters")
//       .max(45, "Password must be less than 45 characters"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords doesn't match",
//     path: ["confirmPassword"],
//   });

// type InputType = z.infer<typeof FormSchema>;

// **
// const {
//   register,
//   handleSubmit,
//   getValues,
//   trigger,
//   watch,
//   formState: { errors, submitCount },
// } = useForm<InputType>({
//   resolver: zodResolver(FormSchema),
// });

// const password = watch("password");
// React.useEffect(() => {
//   if (!submitCount) return;
//   trigger("confirmPassword");
// }, [password, trigger, submitCount]);

// **
// onSubmit={handleSubmit(onSubmit)}
