import React from 'react';
import { useForm } from "react-hook-form";
import Editor from '../Form/Editor/Editor';

export default function StaticPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    <Editor/>
    </>
  )
}
