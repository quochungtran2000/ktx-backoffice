import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Layout from "../components/layouts";
import { postApi } from "../api";
import { useLocation } from "react-router";
import noimage from "../assets/images/noimage.jpeg";

import queryString from "query-string";
import { toast } from "react-toastify";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    // maxHeight: 440,
  },
});

function Post() {
  const location = useLocation();
  const classes = useStyles();
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(location, loading);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const postData = await postApi.getAll(
        queryString.parse(location?.search?.replace("?", ""))
      );
      setdata(postData);
      setLoading(false);
    };
    fetchData();
  }, [location?.search]);

  console.log(`data`, data);
  const onDelete = (id) => {
    postApi.deleteById(id).then((res) => {
      toast.success(res);
      window.location.reload();
    });
  };
  const onClick = () => {
    console.log("asd");
    toast.success("Click");
  };

  return (
    <Layout>
      <div className="card mb-4">
        <div className="card-header card-custom">
          <div>
            <i className="fas fa-table mr-1"></i>
            Post
          </div>
          <div>
            <Button>Create</Button>
          </div>
        </div>
        <div className="card-body">
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={1}>Id</TableCell>
                    <TableCell colSpan={1} align="left">
                      Img
                    </TableCell>
                    <TableCell colSpan={3} align="left">
                      Title
                    </TableCell>
                    <TableCell colSpan={1} align="right">
                      Category
                    </TableCell>
                    <TableCell colSpan={1} align="right">
                      Location
                    </TableCell>
                    <TableCell colSpan={1} align="right">
                      Price
                    </TableCell>
                    <TableCell colSpan={1} align="right">
                      Author
                    </TableCell>
                    <TableCell colSpan={1} align="right">
                      Content
                    </TableCell>
                    <TableCell colSpan={1} align="center">
                      Update
                    </TableCell>
                    <TableCell colSpan={1} align="center">
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.post?.map((post, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell colSpan={1}>{post?.id}</TableCell>
                        <TableCell colSpan={1} align="left">
                          <img
                            style={{ maxWidth: "50px" }}
                            src={post?.img_url || noimage}
                            title="Paella dish"
                            alt={post?.title}
                          />
                          {/* {post?.img_url} */}
                        </TableCell>
                        <TableCell colSpan={3} align="left">
                          {post?.title}
                        </TableCell>
                        <TableCell colSpan={1} align="right">
                          {post?.category?.name}
                        </TableCell>
                        <TableCell colSpan={1} align="right">
                          {post?.location?.name}
                        </TableCell>
                        <TableCell colSpan={1} align="right">
                          {post?.price}
                        </TableCell>
                        <TableCell colSpan={1} align="right">
                          {post?.user?.name}
                        </TableCell>
                        <TableCell
                          colSpan={1}
                          align="right"
                          style={{
                            maxWidth: 50,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {post?.content}
                        </TableCell>
                        <TableCell colSpan={1} align="center">
                          <i
                            className="fas fa-tools"
                            onClick={() => onClick()}
                          />
                        </TableCell>
                        <TableCell colSpan={1} align="center">
                          <i
                            className="fa fa-trash"
                            onClick={() => onDelete(post?.id)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </Layout>
  );
}

export default Post;
