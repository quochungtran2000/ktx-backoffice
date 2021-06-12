import React from "react";
import ModalBase from "../ModelBase/ModalBase";
import { useForm } from "react-hook-form";
import { locationApi } from "../../api";
import { toast } from "react-toastify"

import Button from "@material-ui/core/Button";

export default function CreateLocation(props) {
  const { open, onClose, reload } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    locationApi.create(data).then(() => toast.success("successfully!.."));
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
                  <h3>Create Location</h3>
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
                    placeholder={"Location name"}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="address" className="col-4 col-form-label">
                  Address
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    {...register("address")}
                    placeholder={"Location ADdress"}
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
                    // className={classes.button}
                    // startIcon={<SaveIcon />}
                    // onClick={onsubmit}
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
