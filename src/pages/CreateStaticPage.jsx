import React, { useRef } from "react";
import Layout from "../components/layouts";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Editor } from "@tinymce/tinymce-react";
import { useUser } from "../context/userContext";

import Button from "@material-ui/core/Button";
import { staticPageApi } from "../api";
// import useFetch from "../hook/useFetch";
export default function CreateStaticPage() {
  const {  token } = useUser();
  const editorRef = useRef(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const post = {
      ...data,
      content: editorRef?.current?.getContent()
    };
    console.log(post);

    const aaa = await staticPageApi.createStaticPage(post, {
      headers: {
        "authorization": `Bearer ${token}`
      }});
      console.log(aaa);
    toast.success("Đăng bài thành công");
  };

  const settings = {
    height: 500,
    menubar: true,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste imagetools wordcount image code",
    ],
    toolbar:
      "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link imageundo redo | image code",
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
  };
  return (
    <Layout>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1"></i>
          Create Page
        </div>
        <div className="card-body">
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 row">
                <label htmlFor="type" className="col-sm-2 col-form-label">
                  Type
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-select"
                    placeholder="Type"
                    id="type"
                    {...register("type")}
                  >
                    <option value="NEWS" defaultValue>NEWS</option>
                    <option value="communicate">COMMNICATE</option>
                    <option value="CONTACT">CONTACT</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    {...register("title")}
                    placeholder={"Nhập tiêu đề"}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="description" className="col-sm-2 col-form-label">
                  Description
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    {...register("description")}
                    placeholder={"Nhập tiêu đề"}
                  />
                </div>
              </div>
              

              <div className="mb-4 row">
                <label htmlFor="content" className="col-sm-2 col-form-label">
                  Content
                </label>
                <div className="col-sm-10 text-center">
                  <Editor
                    id="content"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={``}
                    init={settings}
                    className="mb-4"
                  />
                  <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                // className={classes.button}
                style={{ margin: "3rem 0" }}
                // startIcon={<SaveIcon />}
                // onClick={onsubmit}
              >
                Save
              </Button>
                </div>
              </div>
              <div className="mt-4 text-center"></div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
