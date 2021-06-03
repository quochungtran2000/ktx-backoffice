import React from 'react'

export default function index(props) {
  return (
    <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table mr-1"></i>
          {props.title}
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              {props.children}
            </table>
          </div>
        </div>
      </div>
  )
}
