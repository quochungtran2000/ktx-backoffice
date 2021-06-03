import React, { useState } from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor(props) {
  const [data, setData ] = useState("");
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setData(data);
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <CKEditor
        config={{
          ckfinder:{
            uploadUrl: 'cloudinary://879146363472782:QXzmcJ8YTysTEXVWvzOPvH_Yi9k@hunghamhoc'
          }
        }}
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={handleChange}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      {
        data ? data : 'nothing'
      }
    </div>
  )
}
