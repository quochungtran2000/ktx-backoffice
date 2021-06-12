import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Layout from "../components/layouts";
import { categoryApi } from "../api";
import { useFetch } from "../hook";
import { toast } from "react-toastify";
import { Button } from "@material-ui/core";
import { CreateCategory, UpdateCategory } from "../components/Form";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Category(props) {
  const {
    data: categoryData,
    loading: categoryLoading,
    reload,
  } = useFetch(categoryApi.getAll, {});
  console.log(categoryLoading);
  const classes = useStyles();

  const onDelete = (id) => {
    categoryApi.deleteById(id).then((res) => {
      toast.success(res);
      reload();
    });
  };

  const [createOpen, setCreateOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [select, setSelect] = useState({});
  const onOpen = {
    create: () => {
      setCreateOpen(true);
    },
    update: (category) => {
      setSelect(category);
      setUpdateOpen(true);
    },
  };

  const onClose = {
    create: () => {
      setCreateOpen(false);
    },
    update: () => {
      setUpdateOpen(false);
    },
  };

  return (
    <Layout>
      <div className="card mb-4">
        <div className="card-header card-custom">
          <div>
            <i className="fas fa-table mr-1"></i>
            Category
          </div>
          <div>
            <Button onClick={onOpen.create}>Create</Button>
            <CreateCategory
              open={createOpen}
              onClose={onClose.create}
              reload={reload}
            />
          </div>
        </div>
        <div className="card-body">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="right">Classes</TableCell>
                  <TableCell align="right">Update</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categoryData?.map((category, index) => (
                  <TableRow key={index}>
                    <TableCell>{category?.category_id}</TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {category?.name}
                    </TableCell>
                    <TableCell align="right">{category?.classes}</TableCell>
                    <TableCell align="right">
                      <i className="fas fa-tools" onClick={() => onOpen.update(category)} />
                    </TableCell>
                    <TableCell align="right">
                      <i
                        className="fa fa-trash"
                        onClick={() => onDelete(category?.category_id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <UpdateCategory
        data={select}
        open={updateOpen}
        onClose={onClose.update}
        reload={reload}
      />
    </Layout>
  );
}

export default Category;
