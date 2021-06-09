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
import { bannerApi } from "../api";
import { useFetch } from "../hook";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Banner() {
  const { data: bannerData, loading: bannerLoading } = useFetch(
    bannerApi.getAll,
    {}
  );

  console.log(bannerLoading)

  const classes = useStyles();

  const onDelete = (id) => {
    bannerApi.deleteById(id).then(res => {
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
                <TableCell align="left">Image</TableCell>
                {/* <TableCell align="right">Image_Url</TableCell> */}
                <TableCell align="right">Link</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bannerData?.map((banner, index) => (
                <TableRow key={index}>
                  <TableCell>{banner?.id}</TableCell>
                  <TableCell>
                    <img style={{maxWidth: '100px'}} src={banner?.image_url} alt={banner?.description} />
                  </TableCell>
                  {/* <TableCell component="th" scope="row" align="left">
                    {banner?.image_url}
                  </TableCell> */}
                  <TableCell align="right">{banner?.link}</TableCell>
                  <TableCell align="right">{banner?.description}</TableCell>
                  <TableCell align="center">
                    <i className="fas fa-tools" />
                  </TableCell>
                  <TableCell align="center">
                    <i className="fa fa-trash" onClick={()=> onDelete(banner?.id)}/>
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

export default Banner;
