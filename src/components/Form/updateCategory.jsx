import React from "react";
import ModalBase from "../ModelBase/ModalBase";
import { useForm } from "react-hook-form";
import { categoryApi } from "../../api";
import { toast } from "react-toastify"

import Button from "@material-ui/core/Button";

export default function UpdateCategory(props) {
  const { data:category, open, onClose, reload } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const payload= {
      ...data,
      category_id: category.category_id
    }

    console.log(payload)
    categoryApi.update(payload).then(() => toast.success("successfully!.."));
    setTimeout(() => {
      onClose();
      reload();
    },2000)
  };

  return (
    <ModalBase open={open} onClose={onClose}>
      <div className="card mb-4">
        <div className="card-body p-4">
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-3 row text-center">
                <div className="col-12">
                  <h3>Update Category id{category?.category_id}</h3>
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="name" className="col-4 col-form-label">
                  Name
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register("name")}
                    defaultValue={category?.name}
                    placeholder={"Category name"}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="classes" className="col-4 col-form-label">
                  Classes
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="classes"
                    {...register("classes")}
                    defaultValue={category?.classes}
                    placeholder={"font awesome class"}
                  />
                </div>
              </div>

              <div className="mb-4 row">
                <div className="col-sm-10 text-center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalBase>
  );
}
