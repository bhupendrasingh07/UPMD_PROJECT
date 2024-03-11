import React from "react";
import ContentData from "./ContentData";
const ContentPage = () => {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle mb-4">
          <h1>Good Evening Bhupendra</h1>
          {/* <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">List Group</li>
            </ol>
          </nav> */}
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-4">
              <video src=""></video>
            </div>

            {ContentData.map((data, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <div className="card" key={index}>
                    <div className="card-body">
                      <h5 className="card-title">{data.caption}</h5>
                      {/* <p>Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</p> */}

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="">{data.title1}</a></li>
                        <li className="list-group-item"><a href="">{data.title2}</a></li>
                        <li className="list-group-item"><a href="">{data.title3}</a></li>
                        <li className="list-group-item"><a href="">{data.title4}</a></li>
                        {/* <li className="list-group-item disabled" aria-disabled="true">A disabled item</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

           
          </div>
        </section>
      </main>

      <main id="main" className="main">
        <div>
          <section classname="p-4 mt-4 section">
            <div className="row ">
              <div className="col text-center">
                <a href="/portal/orders" className="text-reset" data-pjax="">
                  <div className="text mb-1">Open Orders</div>
                  <h2 className=" m-0">0</h2>
                </a>
              </div>
              <div className="col text-center">
                <a
                  href="/portal/orders?status=3"
                  className="text-reset"
                  data-pjax=""
                >
                  <div className="text-muted mb-1">Completed Orders</div>
                  <h2 className="h1 m-0">0</h2>
                </a>
              </div>
              <div className="col text-center">
                <a
                  href="/portal/subscriptions"
                  className="text-reset"
                  data-pjax=""
                >
                  <div className="text-muted mb-1">Active Subscriptions</div>
                  <h2 className="h1 m-0">0</h2>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="section  mt-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="pagetitle">
                  <h1>Recent Order</h1>
                </div>
                <div className="card">
                  <div className="card-body">
                    {/* <h1 className="card-title">Unpaid Invoices</h1> */}
                    {/* Default Table */}
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Order</th>
                          <th scope="col">Service</th>
                          <th scope="col">Order Title</th>
                          <th scope="col">Business Name</th>
                          <th scope="col">Paid Price</th>
                          <th scope="col">Complete Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>28</td>
                          <td>28</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Default Table Example */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          {/* End Page Title */}
          <section className="section">
            <div className="row">
              <div className="col-lg-6">
                <div className="pagetitle">
                  <h1>UnPaid Invoice</h1>
                </div>
                <div className="card">
                  <div className="card-body">
                    {/* <h1 className="card-title">Unpaid Invoices</h1> */}
                    {/* Default Table */}
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Invoice</th>
                          <th scope="col">Date</th>
                          <th scope="col">Total</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Default Table Example */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="pagetitle">
                  <h1>Active Subscription</h1>
                </div>
                <div className="card">
                  <div className="card-body">
                    {/* <h5 className="card-title">Active Subscription</h5> */}
                    {/* Default Table */}
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Service</th>
                          <th scope="col">Started</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Default Table Example */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="section">
            <div className="row">
              <div className="col-lg-6">
                <div className="pagetitle">
                  <h1>Open Ticket</h1>
                </div>
                <div className="card">
                  <div className="card-body">
                    {/* <h1 className="card-title">Unpaid Invoices</h1> */}
                    {/* Default Table */}
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Subject</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon </td>
                          <td>Designer</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Default Table Example */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ContentPage;
