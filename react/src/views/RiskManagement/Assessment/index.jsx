// -----------------------|| RISK MANAGEMENT ASSESSMENT ||-----------------------//
export default function RiskAssessment() {
  return (
    <div>

      {/* Breadcrumb */}
      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'16px', fontSize:'13px' }}>
        <a href="/" style={{ color:'#6c757d', textDecoration:'none' }}>🏠</a>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#8e85f2', fontWeight:'500' }}>Risk Management</span>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#333', fontWeight:'500' }}>Assessment</span>
      </div>

      {/* Stage Header Card */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'16px 20px',
        marginBottom:'16px'
      }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'12px' }}>
          <div style={{ display:'flex', gap:'32px', fontSize:'14px', color:'#555' }}>
            <span><strong>Stage</strong> : 2 of 6</span>
            <span><strong>Previous</strong> : Risk Indentification</span>
            <span><strong>Next</strong> : Risk Mitigation</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <span style={{ fontSize:'14px', color:'#555' }}><strong>Active Risks</strong> :2</span>
            <button style={{
              background:'#4caf50', color:'#fff', border:'none',
              width:'32px', height:'32px', borderRadius:'4px',
              cursor:'pointer', fontSize:'14px'
            }}>📄</button>
            <button style={{
              background:'#f44336', color:'#fff', border:'none',
              width:'32px', height:'32px', borderRadius:'4px',
              cursor:'pointer', fontSize:'14px'
            }}>🗑</button>
          </div>
        </div>
        <button style={{
          background:'#4caf50', color:'#fff', border:'none',
          padding:'8px 20px', borderRadius:'4px',
          fontWeight:'600', fontSize:'14px', cursor:'pointer'
        }}>
          Create New
        </button>
      </div>

      {/* Assessment Criteria Card */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'16px 20px',
        marginBottom:'16px', fontSize:'14px', color:'#555'
      }}>
        <strong style={{ color:'#333' }}>Assessment Criteria by Framework:</strong>
        <div style={{ display:'flex', gap:'40px', marginTop:'6px', flexWrap:'wrap' }}>
          <span>ISO 27001: Control Effectiveness (1-10)</span>
          <span>SOC 1: Control Operation (1-10)</span>
          <span>SOC 2: Trust Services Criteria (1-10)</span>
          <span>RPN Calculation: S * O * D</span>
        </div>
      </div>

      {/* Assessment Table */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'20px',
        marginBottom:'16px', overflowX:'auto'
      }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'13px' }}>
          <thead>
            <tr style={{ background:'#f8f9fa', borderBottom:'1px solid #e0e0e0' }}>
              {['Risk ID','Framework','Control','Risk Description','Failure Mode','Current Controls','S','O','D','RPN','Risk Level','Action'].map((col) => (
                <th key={col} style={{
                  padding:'10px 12px', textAlign:'left',
                  fontWeight:'600', color:'#333',
                  whiteSpace:'nowrap', fontSize:'13px'
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr style={{ borderBottom:'1px solid #f0f0f0' }}>
              <td style={{ padding:'12px' }}>R-001</td>
              <td style={{ padding:'12px' }}>ISO 27001</td>
              <td style={{ padding:'12px' }}>A.5.1</td>
              <td style={{ padding:'12px' }}>Information Security Policy</td>
              <td style={{ padding:'12px' }}>Policy Framework Gap</td>
              <td style={{ padding:'12px' }}>Basic Policies</td>
              <td style={{ padding:'12px' }}>8</td>
              <td style={{ padding:'12px' }}>6</td>
              <td style={{ padding:'12px' }}>5</td>
              <td style={{ padding:'12px' }}>240</td>
              <td style={{ padding:'12px' }}>
                <span style={{
                  background:'#f44336', color:'#fff',
                  padding:'3px 10px', borderRadius:'4px',
                  fontSize:'12px', fontWeight:'500'
                }}>High Risk</span>
              </td>
              <td style={{ padding:'12px' }}>
                <button style={{
                  background:'#f44336', color:'#fff', border:'none',
                  padding:'5px 14px', borderRadius:'4px',
                  fontSize:'12px', fontWeight:'600', cursor:'pointer'
                }}>Critical</button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr style={{ borderBottom:'1px solid #f0f0f0' }}>
              <td style={{ padding:'12px' }}>R-002</td>
              <td style={{ padding:'12px' }}>SOC 2</td>
              <td style={{ padding:'12px' }}>CC1.1</td>
              <td style={{ padding:'12px' }}>Control Environment</td>
              <td style={{ padding:'12px' }}>Structure Issues</td>
              <td style={{ padding:'12px' }}>Basic Controls</td>
              <td style={{ padding:'12px' }}>7</td>
              <td style={{ padding:'12px' }}>5</td>
              <td style={{ padding:'12px' }}>4</td>
              <td style={{ padding:'12px' }}>140</td>
              <td style={{ padding:'12px' }}>
                <span style={{
                  background:'#ff9800', color:'#fff',
                  padding:'3px 10px', borderRadius:'4px',
                  fontSize:'12px', fontWeight:'500'
                }}>Medium Risk</span>
              </td>
              <td style={{ padding:'12px' }}>
                <button style={{
                  background:'#ff9800', color:'#fff', border:'none',
                  padding:'5px 14px', borderRadius:'4px',
                  fontSize:'12px', fontWeight:'600', cursor:'pointer'
                }}>Medium</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Assessment Summary Card */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'16px 20px',
        marginBottom:'16px'
      }}>
        <strong style={{ color:'#333', fontSize:'14px' }}>Assessment Summary:</strong>
        <div style={{ display:'flex', gap:'40px', marginTop:'8px', fontSize:'14px', color:'#555', flexWrap:'wrap' }}>
          <span>Total Risks: 2</span>
          <span>High Risk: 1</span>
          <span>Medium Risk: 1</span>
          <span>Low Risk: 0</span>
          <span>Average RPN: 190</span>
          <span>Completion: 85%</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <button style={{
          background:'#6c757d', color:'#fff', border:'none',
          padding:'10px 20px', borderRadius:'4px',
          fontSize:'14px', fontWeight:'600', cursor:'pointer',
          display:'flex', alignItems:'center', gap:'8px'
        }}>
          ← Risk Indentification
        </button>
        <button style={{
          background:'#4caf50', color:'#fff', border:'none',
          padding:'10px 20px', borderRadius:'4px',
          fontSize:'14px', fontWeight:'600', cursor:'pointer',
          display:'flex', alignItems:'center', gap:'8px'
        }}>
          Risk Mitigation →
        </button>
      </div>

    </div>
  );
}