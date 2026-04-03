// react-bootstrap
import { Row, Col, Card } from 'react-bootstrap';

// third party
import Chart from 'react-apexcharts';

// project imports
import ProductCard from 'components/Widgets/Statistic/ProductCard';
import FeedTable from 'components/Widgets/FeedTable';
import ProductTable from 'components/Widgets/ProductTable';
import { SalesCustomerSatisfactionChartData } from './chart/sales-customer-satisfication-chart';
import { SalesAccountChartData } from './chart/sales-account-chart';
import { SalesSupportChartData } from './chart/sales-support-chart';
import { SalesSupportChartData1 } from './chart/sales-support-chart1';
import feedData from 'data/feedData';
import productData from 'data/productTableData';

// -----------------------|| DASHBOARD SALES ||-----------------------//
export default function DashSales() {
  return (
    <>
      {/* Filter Strip */}
<div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white border rounded" style={{ marginLeft: '-25px', marginRight: '-25px', marginTop: '-25px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '0', borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}>        <div className="d-flex align-items-center gap-3" style={{ flex: 1 }}>
          <div className="d-flex align-items-center gap-2" style={{ flex: 1 }}>
            <span className="text-muted" style={{ whiteSpace: 'nowrap' }}>From</span>
            <input type="date" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
          <div className="d-flex align-items-center gap-2" style={{ flex: 1 }}>
            <span className="text-muted" style={{ whiteSpace: 'nowrap' }}>To</span>
            <input type="date" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 ms-4">
          <button className="btn btn-primary px-4">Apply Filter</button>
          <button className="btn btn-outline-secondary px-4">Reset Filter</button>
        </div>
      </div>

      {/* Empty white card */}
      {/* Dashboard Cards */}
      <Row>
        <Col md={12} xl={6}>
          {/* Empty white card */}
          {/* Text Banner */}
{/* Text Banner */}
<Card className="mb-3" style={{
  minHeight: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px 40px',
  textAlign: 'center',
  background: '#150430',
  border: 'none'
}}>
  <div style={{ width: '100%' }}>
    <div style={{
      display: 'inline-block',
      background: 'rgb(0, 0, 0)',
      color: '#8e85f2',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '1.5px',
      padding: '4px 16px',
      borderRadius: '20px',
      marginBottom: '16px',
      textTransform: 'uppercase',
      fontFamily: '"Michroma", sans-serif'
    }}>
      Next-Gen Protection
    </div>
    <div style={{
      fontSize: '42px',
      fontWeight: '400',
      lineHeight: '1.2',
      color: '#ffffff',
      fontFamily: '"Michroma", sans-serif'
    }}>
      Work <span style={{ fontSize:'50px',color: '#ffffff',  }}>Any Where</span>{' '}
      <span style={{ color: '#8e85f2', fontSize:'26px' }}>  Stay Compliant Every Where</span>
    </div>
  </div>
</Card>
          <Row>
            <Col md={6}> 
              <Card className="support-bar overflow-hidden">
                <Card.Body className="pb-0">
                  <h2 className="m-0">53.94%</h2>
                  <span className="text-primary">Conversion Rate</span>
                  <p className="mb-3 mt-3">Number of conversions divided by the total visitors.</p>
                </Card.Body>
                <Chart {...SalesSupportChartData()} />
                <Card.Footer className="border-0 bg-primary text-white background-pattern-white">
                  <Row className="text-center">
                    <Col>
                      <h4 className="m-0 text-white">10</h4>
                      <span>2018</span>
                    </Col>
                    <Col>
                      <h4 className="m-0 text-white">15</h4>
                      <span>2017</span>
                    </Col>
                    <Col>
                      <h4 className="m-0 text-white">13</h4>
                      <span>2016</span>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="support-bar overflow-hidden">
                <Card.Body className="pb-0">
                  <h2 className="m-0">1432</h2>
                  <span className="text-primary">Order Delivered</span>
                  <p className="mb-3 mt-3">Number of conversions divided by the total visitors.</p>
                </Card.Body>
                <Card.Footer className="border-0">
                  <Row className="text-center">
                    <Col>
                      <h4 className="m-0">130</h4>
                      <span>May</span>
                    </Col>
                    <Col>
                      <h4 className="m-0">251</h4>
                      <span>June</span>
                    </Col>
                    <Col>
                      <h4 className="m-0">235</h4>
                      <span>July</span>
                    </Col>
                  </Row>
                </Card.Footer>
                <Chart type="bar" {...SalesSupportChartData1()} />
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h4>Productivity (based on web & apps usage)</h4>
            </Card.Header>
            <Card.Body>
              
              <Chart {...SalesAccountChartData()} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={6}>
          <Card>
            <Card.Body>
              <h6>Customer Satisfaction</h6>
              <span>It takes continuous effort to maintain high customer satisfaction levels Internal and external.</span>
              <Row className="d-flex justify-content-center align-items-center">
                <Col>
                  <Chart type="pie" {...SalesCustomerSatisfactionChartData()} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <ProductTable {...productData} />
        </Col>

        <Col md={12} xl={6}>
          <Row>
            <Col sm={6}>
              <ProductCard params={{ title: 'Total Profit', primaryText: '$1,783', icon: 'card_giftcard' }} />
            </Col>
            <Col sm={6}>
              <ProductCard params={{ variant: 'primary', title: 'Total Orders', primaryText: '15,830', icon: 'local_mall' }} />
            </Col>
            <Col sm={6}>
              <ProductCard params={{ variant: 'primary', title: 'Average Price', primaryText: '$6,780', icon: 'monetization_on' }} />
            </Col>
            <Col sm={6}>
              <ProductCard params={{ title: 'Product Sold', primaryText: '6,784', icon: 'local_offer' }} />
            </Col>
          </Row>
          <FeedTable {...feedData} />
        </Col>
      </Row>
    </>
  );
}