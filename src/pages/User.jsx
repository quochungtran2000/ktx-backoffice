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
import { userApi } from "../api";
import { toast } from "react-toastify";
import queryString from "query-string";
import { useLocation } from "react-router";
import noimage from "../assets/images/noimage.jpeg";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function User() {
  const classes = useStyles();

  const onDelete = (id) => {
    userApi.deleteById(id).then((res) => {
      toast.success(res);
      reload();
    });
  };

  const location = useLocation();
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(location, loading);
  const fetchData = async () => {
    const postData = await userApi.getAll(
      queryString.parse(location?.search?.replace("?", ""))
    );
    setdata(postData);
    setLoading(false);
  };

  const reload = () => fetchData();

  useEffect(() => {
    setLoading(true);
   
    return fetchData();
    // eslint-disable-next-line
  }, [location?.search]);

  return (
    <Layout>
      <div className="card mb-4">
        <div className="card-header card-custom">
          <div>
            <i className="fas fa-table mr-1"></i>
            User
          </div>
        </div>
        <div className="card-body">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.users?.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user?.userid}</TableCell>
                    <TableCell align="left">
                      <img
                        style={{ maxWidth: "50px", height: "auto" }}
                        src={user?.img_url || noimage}
                        title="Paella dish"
                        alt={user?.name}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {user?.name}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {user?.age}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {user?.email}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {user?.phone}
                    </TableCell>
                    <TableCell align="right">{user?.address}</TableCell>
                    <TableCell align="center">
                      <i
                        className="fa fa-trash"
                        onClick={() => onDelete(user?.user_id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Layout>
  );
}

export default User;
