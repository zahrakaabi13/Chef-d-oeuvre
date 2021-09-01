import { Table } from 'react-bootstrap'


export const LandingDash = () => {

    return (
        <>
          <div className="dashLanding mt-3 ms-4 me-2">
              <h1>Dashboard</h1>
              <div className="dash-boxes">
                  <div className="dash_box first_dash_box">
                      <div className="box_icons">
                      <i className="dash_shop_bag fas fa-shopping-bag"></i>
                       
                             
                             <i className="fas fa-ellipsis-v"></i>
                      </div>
                      <h5 className="mt-3">$1200</h5>
                      <h6 className="dash_box_text">45% purchases this week</h6>
                  </div>

                  <div className="dash_box second_dash_box">
                      <div className="box_icons">
                             <i className="dash_shop_bag far fa-calendar-check"></i>
                             <i className="fas fa-ellipsis-v"></i>
                      </div>
                      <h5 className="mt-3">$232,50</h5>
                      <h6 className="dash_box_text">45% this week</h6>
                  </div>

                  <div className="dash_box third_dash_box">
                      <div className="box_icons">
                             <i className="dash_shop_bag far fa-award"></i>
                             <i className="fas fa-ellipsis-v"></i>
                      </div>
                      <h5 className="mt-3">600</h5>
                      <h6 className="dash_box_text">21% deliveries this week</h6>
                  </div>
              </div>

              <div className="dash-wrapper">
                
                <div>
                     <h1 className="mt-5">Market review</h1>
                     <p className="parag">Prices views updates</p>
                     <img className="img" src="/img/dash-static.png" alt="static-alternative"/>
                </div>

              
                  <div className="sell-order-wrapper mt-5 p-3">
                    <div className="box_icons">
                        <h3 className="sell-order-title">Sell Order</h3>
                        <i className="sell fas fa-ellipsis-v"></i>
                    </div>

                    <Table className="table" hover size="sm">
                        <thead>
                            <tr>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>89.03</td>
                                <td>0.15</td>
                                <td>$126.00</td>
                            </tr>
                            <tr>
                                <td>94.02</td>
                                <td>0.18</td>
                                <td>$115.23</td>
                            </tr>
                            <tr>
                                <td>35.02</td>
                                <td>0.2</td>
                                <td>$195.23</td>
                            </tr>
                            <tr>
                                <td>115.02</td>
                                <td>0.26</td>
                                <td>$116.40</td>
                            </tr>
                            <tr>
                                <td>162.02</td>
                                <td>1.05</td>
                                <td>$216.40</td>
                            </tr>
                        </tbody>
                        </Table>
                  </div>
              </div>
          </div>
        </>
    )
}