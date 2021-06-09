import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Layout from "../components/layouts";
import { locationApi } from "../api";
import { useFetch } from "../hook";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Location() {
  const { data: locationData, loading: locationLoading } = useFetch(
    locationApi.getAll,
    {}
  );

  console.log(locationLoading)

  const classes = useStyles();

  const onDelete = (id) => {
    locationApi.deleteById(id).then(res => {
      toast.success(res);
      window.location.reload(); 
    })
  }

  return (
    <Layout>
      <div className="p-4">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Update</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locationData?.map((location, index) => (
                <TableRow key={index}>
                  <TableCell>{location?.location_id}</TableCell>
                  <TableCell component="th" scope="row" align="left">
                    {location?.name}
                  </TableCell>
                  <TableCell align="right">{location?.address}</TableCell>
                  <TableCell align="right">
                    <i className="fas fa-tools" />
                  </TableCell>
                  <TableCell align="right">
                    <i className="fa fa-trash" onClick={()=> onDelete(location?.location_id)}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}

export default Location;
