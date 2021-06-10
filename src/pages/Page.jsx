import React from "react";
import Layout from "../components/layouts";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { staticPageApi } from "../api";
import { useFetch } from "../hook";
// import { toast } from "react-toastify";
import { useUser } from "../context/userContext";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Page() {
  const { token } = useUser();
  const { data: pages, loading: pageLoading } = useFetch(staticPageApi.getAll, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  console.log(pageLoading)
  // const onDelete = (id) => {
  //   categoryApi.deleteById(id).then(res => {
  //     toast.success(res);
  //     window.location.reload();
  //   })
  // }

  const classes = useStyles();

  return (
    <Layout>
      <div className="card mb-4">
        <div className="card-header card-custom">
          <div>
            <i className="fas fa-table mr-1"></i>
            Page
          </div>
          <div>
            <Button><Link to="/pages/create">Create</Link></Button>
          </div>
        </div>
        <div className="card-body">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="left">type</TableCell>
                  <TableCell align="left">title</TableCell>
                  <TableCell align="left">description</TableCell>
                  <TableCell align="right">content</TableCell>
                  <TableCell align="center">update</TableCell>
                  <TableCell align="center">delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pages?.map((page, index) => (
                  <TableRow key={index}>
                    <TableCell>{page?.id}</TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {page?.type}
                    </TableCell>
                    <TableCell align="left">{page?.title}</TableCell>
                    <TableCell align="left">{page?.description}</TableCell>
                    <TableCell align="right">{page?.content}</TableCell>
                    <TableCell align="center">
                      <i
                        className="fa fa-trash"
                        // onClick={() => onDelete(location?.location_id)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <i
                        className="fa fa-trash"
                        // onClick={() => onDelete(location?.location_id)}
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

export default Page;
