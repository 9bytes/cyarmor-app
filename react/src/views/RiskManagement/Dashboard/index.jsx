

// -----------------------|| RISK MANAGEMENT DASHBOARD ||-----------------------//
export default function RiskDashboard() {
  return (
    <div>
    <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'16px', fontSize:'13px' }}>
  <a href="/" style={{ color:'#6c757d', textDecoration:'none' }}>🏠</a>
  <span style={{ color:'#6c757d' }}>/</span>
  <span style={{ color:'#8e85f2', fontWeight:'500' }}>Risk Management</span>
  <span style={{ color:'#6c757d' }}>/</span>
  <span style={{ color:'#333', fontWeight:'500' }}>Dashboard</span>
</div>

      {/* Top Stats Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0',
        background: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        marginBottom: '16px',
        overflow: 'hidden'
      }}>
        {[
          { label: 'Total Risks', value: '168' },
          { label: 'Critical', value: '45' },
          { label: 'Actions Due', value: '23' },
          { label: 'Last Update', value: 'Live' },
        ].map((stat, i) => (
          <div key={i} style={{
            padding: '16px 20px',
            borderRight: i < 3 ? '1px solid #e0e0e0' : 'none',
            fontSize: '14px',
            color: '#333'
          }}>
            <span style={{ color: '#6c757d' }}>{stat.label} : </span>
            <span style={{ fontWeight: '600' }}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Risk Category Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '16px'
      }}>
        {[
          { title: 'Risk Identification', value: '45', color: '#2196f3' },
          { title: 'Risk Assessment',     value: '38', color: '#2196f3' },
          { title: 'Risk Mitigation',     value: '32', color: '#4caf50' },
          { title: 'Implementation',      value: '28', color: '#ff9800' },
        ].map((card, i) => (
          <div key={i} style={{
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '20px'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
              {card.title}
            </div>
            <div style={{ fontSize: '22px', fontWeight: '700', color: card.color }}>
              {card.value}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginBottom: '16px'
      }}>

        {/* Risk Distribution */}
        <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '6px', padding: '20px' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '16px' }}>
            Risk Distribution
          </div>
          {[
            { label: 'Security (35%)',    width: '70%', color: '#00bcd4' },
            { label: 'Operational (28%)', width: '56%', color: '#f44336' },
            { label: 'Compliance (21%)',  width: '42%', color: '#4caf50' },
            { label: 'Technical (16%)',   width: '32%', color: '#ff9800' },
          ].map((bar, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <div style={{
                background: bar.color,
                width: bar.width,
                padding: '4px 10px',
                borderRadius: '3px',
                fontSize: '12px',
                color: '#fff',
                fontWeight: '500'
              }}>
                {bar.label}
              </div>
            </div>
          ))}
        </div>

        {/* Framework Compliance */}
        <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '6px', padding: '20px' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '16px' }}>
            Framework Compliance
          </div>
          {[
            { label: 'ISO 27001 (90%)', width: '90%', color: '#2196f3' },
            { label: 'SOC 1 (80%)',     width: '80%', color: '#f44336' },
            { label: 'SOC 2 (93%)',     width: '93%', color: '#4caf50' },
          ].map((bar, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <div style={{ position: 'relative', background: '#f0f0f0', borderRadius: '3px', height: '28px' }}>
                <div style={{
                  background: bar.color,
                  width: bar.width,
                  height: '100%',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '10px'
                }}>
                  <span style={{ fontSize: '12px', color: '#fff', fontWeight: '500' }}>{bar.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Progress */}
        <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '6px', padding: '20px' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '16px' }}>
            Implementation Progress
          </div>
          {[
            { label: 'Tasks (65%)',     width: '65%', color: '#2196f3' },
            { label: 'Resources (80%)', width: '80%', color: '#4caf50' },
            { label: 'Timeline (50%)',  width: '50%', color: '#ff9800' },
          ].map((bar, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <div style={{ position: 'relative', background: '#f0f0f0', borderRadius: '3px', height: '28px' }}>
                <div style={{
                  background: bar.color,
                  width: bar.width,
                  height: '100%',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '10px'
                }}>
                  <span style={{ fontSize: '12px', color: '#fff', fontWeight: '500' }}>{bar.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Actions Table */}
      <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '6px', padding: '20px' }}>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '16px' }}>
          Critical Actions
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              {['Risk ID', 'Action Item', 'Owner', 'Due Date', 'Status', 'Progress'].map((col) => (
                <th key={col} style={{
                  padding: '10px 12px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '13px'
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', color: '#555' }}>R-001</td>
              <td style={{ padding: '12px', color: '#555' }}>Zero Trust Implementation</td>
              <td style={{ padding: '12px', color: '#555' }}>CISO</td>
              <td style={{ padding: '12px', color: '#555' }}>Mar 15, 2024</td>
              <td style={{ padding: '12px' }}>
                <span style={{
                  background: '#f44336',
                  color: '#fff',
                  padding: '3px 10px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>Critical</span>
              </td>
              <td style={{ padding: '12px', color: '#555' }}>65%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}