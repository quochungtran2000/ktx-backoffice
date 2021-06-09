import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts";
import { locationApi, categoryApi, userApi, postApi } from "../api";
import { useFetch } from "../hook";
import noimage from "../assets/images/noimage.jpeg";
function Dashboard() {
  const { data: locationData, loading: locationLoading } = useFetch(
    locationApi.getAll,
    {}
  );
  const { data: categoryData, loading: categoryLoading } = useFetch(
    categoryApi.getAll,
    {}
  );

  const { data: userData, loading: userLoading } = useFetch(userApi.getAll, {});

  const { data: postData, loading: postLoading } = useFetch(postApi.getAll, {});

  console.log(locationLoading, categoryLoading, userLoading, postLoading)
  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">User</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <Link className="small text-white stretched-link" to={"/user"}>
                  View Details
                </Link>
                <div className="small text-white">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-warning text-white mb-4">
              <div className="card-body">Posts</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <Link className="small text-white stretched-link" to={"/posts"}>
                  View Details
                </Link>
                <div className="small text-white">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-success text-white mb-4">
              <div className="card-body">Category</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <Link
                  className="small text-white stretched-link"
                  to={"/category"}
                >
                  View Details
                </Link>
                <div className="small text-white">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-danger text-white mb-4">
              <div className="card-body">Location</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <Link
                  className="small text-white stretched-link"
                  to={"/location"}
                >
                  View Details
                </Link>
                <div className="small text-white">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table mr-1"></i>
            Category
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>classes</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryData?.map((category, index) => (
                    <tr key={index}>
                      <td>{category?.category_id}</td>
                      <td>{category?.name}</td>
                      <td>{category?.classes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table mr-1"></i>
            Location
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>address</th>
                  </tr>
                </thead>
                <tbody>
                  {locationData?.map((location, index) => (
                    <tr key={index}>
                      <td>{location?.location_id}</td>
                      <td>{location?.name}</td>
                      <td>{location?.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table mr-1"></i>
            User
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>id</th>
                    <th>image</th>
                    <th>name</th>
                    <th>age</th>
                    <th>phone</th>
                    <th>email</th>
                    <th>address</th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.users?.map((user, index) => (
                    <tr key={index}>
                      <td>{user?.userid}</td>
                      <td>
                        <img
                          style={{ width: "50px" }}
                          src={user?.img_url || noimage}
                          alt={user?.name}
                        />
                      </td>
                      <td>{user?.name}</td>
                      <td>{user?.age}</td>
                      <td>{user?.phone}</td>
                      <td>{user?.email}</td>
                      <td>{user?.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table mr-1"></i>
            Post
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>id</th>
                    <th>image</th>
                    <th>title</th>
                    <th>price</th>
                    <th>category</th>
                    <th>location</th>
                    <th>author</th>
                  </tr>
                </thead>
                <tbody>
                  {postData?.post?.map((post, index) => (
                    <tr key={index}>
                      <td>{post?.id}</td>
                      <td>
                        <img
                          style={{ width: "50px" }}
                          src={post?.img_url || noimage}
                          alt={post?.title}
                        />
                      </td>
                      <td>{post?.title}</td>
                      <td>{post?.price}</td>
                      <td>{post?.category?.name}</td>
                      <td>{post?.location?.name}</td>
                      <td>{post?.user?.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
