import React from "react";
import ModalBase from "../ModelBase/ModalBase";
import { useForm } from "react-hook-form";
import { bannerApi } from "../../api";
import { toast } from "react-toastify"

import Button from "@material-ui/core/Button";

export default function CreateBanner(props) {
  const { open, onClose, reload } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    bannerApi.create(data).then(() => toast.success("successfully!.."));
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
                  <h3>Create Banner</h3>
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="link" className="col-4 col-form-label">
                  Link
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="link"
                    {...register("link")}
                    placeholder={"Link in website"}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="description" className="col-4 col-form-label">
                  Description
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    {...register("description")}
                    placeholder={"description"}
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
