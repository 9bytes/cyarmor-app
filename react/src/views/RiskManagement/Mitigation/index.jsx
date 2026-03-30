// -----------------------|| RISK MANAGEMENT MITIGATION ||-----------------------//
export default function RiskMitigation() {
  return (
    <div>

      {/* Breadcrumb */}
      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'16px', fontSize:'13px' }}>
        <a href="/" style={{ color:'#6c757d', textDecoration:'none' }}>🏠</a>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#8e85f2', fontWeight:'500' }}>Risk Management</span>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#333', fontWeight:'500' }}>Mitigation</span>
      </div>

      {/* Stage Header Card */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'16px 20px',
        marginBottom:'16px'
      }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'12px' }}>
          <div style={{ display:'flex', gap:'32px', fontSize:'14px', color:'#555' }}>
            <span><strong>Stage</strong> : 3 of 6</span>
            <span><strong>Previous</strong> : Risk Assessment</span>
            <span><strong>Next</strong> : Implementation</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <span style={{ fontSize:'14px', color:'#555' }}><strong>High Risks</strong> : 12</span>
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
          Create Plan
        </button>
      </div>

      {/* Treatment Strategies Card */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'16px 20px',
        marginBottom:'16px', fontSize:'14px', color:'#555'
      }}>
        <strong style={{ color:'#333' }}>Treatment Strategies:</strong>
        <div style={{ display:'flex', gap:'40px', marginTop:'6px', flexWrap:'wrap' }}>
          <span>Mitigate (RPN &gt; 200)</span>
          <span>Transfer (150 RPN ≤ 200)</span>
          <span>Accept (RPN ≤ 100)</span>
          <span>Avoid (RPN &gt; 250)</span>
        </div>
      </div>

      {/* Mitigation Table */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'20px',
        marginBottom:'16px', overflowX:'auto'
      }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'13px' }}>
          <thead>
            <tr style={{ background:'#f8f9fa', borderBottom:'1px solid #e0e0e0' }}>
              {['Mitigation ID', 'Control Description', 'Risk Title', 'Assigned', 'Target Date', 'Status', 'Action'].map((col) => (
                <th key={col} style={{
                  padding:'10px 12px', textAlign:'left',
                  fontWeight:'600', color:'#333',
                  whiteSpace:'nowrap', fontSize:'13px'
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} style={{
                padding:'40px', textAlign:'left',
                color:'#555', fontSize:'14px'
              }}>
                No Data Found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display:'flex', justifyContent:'space-between' }}>
        <button style={{
          background:'#6c757d', color:'#fff', border:'none',
          padding:'10px 20px', borderRadius:'4px',
          fontSize:'14px', fontWeight:'600', cursor:'pointer',
          display:'flex', alignItems:'center', gap:'8px'
        }}>
          ← Assessment
        </button>
        <button style={{
          background:'#4caf50', color:'#fff', border:'none',
          padding:'10px 20px', borderRadius:'4px',
          fontSize:'14px', fontWeight:'600', cursor:'pointer',
          display:'flex', alignItems:'center', gap:'8px'
        }}>
          Implementation →
        </button>
      </div>

    </div>
  );
}