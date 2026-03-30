// -----------------------|| RISK MANAGEMENT IMPLEMENTATION ||-----------------------//
export default function RiskImplementation() {
  return (
    <div>

      {/* Breadcrumb */}
      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'16px', fontSize:'13px' }}>
        <a href="/" style={{ color:'#6c757d', textDecoration:'none' }}>🏠</a>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#8e85f2', fontWeight:'500' }}>Risk Management</span>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#333', fontWeight:'500' }}>Implementation</span>
      </div>

      {/* Stage Header Card */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'16px 20px',
        marginBottom:'16px'
      }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'12px' }}>
          <div style={{ display:'flex', gap:'32px', fontSize:'14px', color:'#555' }}>
            <span><strong>Stage</strong> : 4 of 6</span>
            <span><strong>Previous</strong> : Mitigation Planning</span>
            <span><strong>Next</strong> : Monitoring</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <span style={{ fontSize:'14px', color:'#555' }}><strong>Active Tasks</strong> : 15</span>
            <button style={{
              background:'#e67e22', color:'#fff', border:'none',
              padding:'8px 16px', borderRadius:'4px',
              fontWeight:'600', fontSize:'13px', cursor:'pointer'
            }}>Export Tasks</button>
            <button style={{
              background:'#e67e22', color:'#fff', border:'none',
              padding:'8px 16px', borderRadius:'4px',
              fontWeight:'600', fontSize:'13px', cursor:'pointer'
            }}>Progress Report</button>
          </div>
        </div>
        <div style={{ display:'flex', gap:'10px' }}>
          <button style={{
            background:'#4caf50', color:'#fff', border:'none',
            padding:'8px 16px', borderRadius:'4px',
            fontWeight:'600', fontSize:'13px', cursor:'pointer'
          }}>Create Task</button>
          <button style={{
            background:'#1a3353', color:'#fff', border:'none',
            padding:'8px 16px', borderRadius:'4px',
            fontWeight:'600', fontSize:'13px', cursor:'pointer'
          }}>Review</button>
          <button style={{
            background:'#ff9800', color:'#fff', border:'none',
            padding:'8px 16px', borderRadius:'4px',
            fontWeight:'600', fontSize:'13px', cursor:'pointer'
          }}>Update</button>
          <button style={{
            background:'#f44336', color:'#fff', border:'none',
            padding:'8px 16px', borderRadius:'4px',
            fontWeight:'600', fontSize:'13px', cursor:'pointer'
          }}>Delete</button>
        </div>
      </div>

      {/* Status Cards Row */}
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(5, 1fr)',
        gap:'12px', marginBottom:'16px'
      }}>
        {[
          { label:'Planned: 15',      bg:'#e3f2fd' },
          { label:'In Progress: 8',   bg:'#e0f7fa' },
          { label:'Completed: 12',    bg:'#e8f5e9' },
          { label:'Blocked: 3',       bg:'#fff3e0' },
          { label:'Due This Week: 5', bg:'#fff8e1' },
        ].map((card) => (
          <div key={card.label} style={{
            background: card.bg,
            border:'1px solid #e0e0e0',
            borderRadius:'6px',
            padding:'16px 20px',
            fontSize:'14px',
            fontWeight:'500',
            color:'#333'
          }}>
            {card.label}
          </div>
        ))}
      </div>

      {/* Implementation Table */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'20px',
        marginBottom:'16px', overflowX:'auto'
      }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'13px' }}>
          <thead>
            <tr style={{ background:'#f8f9fa', borderBottom:'1px solid #e0e0e0' }}>
              {['Task ID','Risk Reference','Implementation Task','Framework Control','Resources','Timeline','Progress','Owner','Status','Dependencies'].map((col) => (
                <th key={col} style={{
                  padding:'10px 12px', textAlign:'left',
                  fontWeight:'600', color:'#333',
                  whiteSpace:'nowrap', fontSize:'13px'
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom:'1px solid #f0f0f0' }}>
              <td style={{ padding:'12px' }}>IMP-001</td>
              <td style={{ padding:'12px' }}>R-001</td>
              <td style={{ padding:'12px' }}>Zero Trust Implementation</td>
              <td style={{ padding:'12px' }}>ISO A.5.1, SOC2 CC1.1</td>
              <td style={{ padding:'12px' }}>Security Team, $150K</td>
              <td style={{ padding:'12px' }}>Mar 15, 2024</td>
              <td style={{ padding:'12px' }}>
                <div style={{ background:'#e0e0e0', borderRadius:'4px', height:'20px', width:'80px', overflow:'hidden' }}>
                  <div style={{ background:'#2196f3', width:'65%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <span style={{ color:'#fff', fontSize:'11px', fontWeight:'600' }}>65%</span>
                  </div>
                </div>
              </td>
              <td style={{ padding:'12px' }}>CISO</td>
              <td style={{ padding:'12px' }}>
                <span style={{
                  background:'#4caf50', color:'#fff',
                  padding:'3px 10px', borderRadius:'4px',
                  fontSize:'12px', fontWeight:'500'
                }}>Active</span>
              </td>
              <td style={{ padding:'12px' }}>Network Config</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Implementation Progress Summary */}
      <div style={{
        background:'#fff', border:'1px solid #e0e0e0',
        borderRadius:'6px', padding:'20px',
        marginBottom:'16px'
      }}>
        <div style={{ fontSize:'15px', fontWeight:'600', color:'#333', marginBottom:'16px' }}>
          Implementation
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'16px' }}>
          {[
            { label:'Overall Progress',    pct:'65%', color:'#2196f3', text:'65% Completed' },
            { label:'Resource Utilization', pct:'80%', color:'#4caf50', text:'80% Utilized' },
            { label:'Timeline Status',     pct:'50%', color:'#ff9800', text:'50% Completed' },
            { label:'On Schedule',         pct:'65%', color:'#f44336', text:'65% Completed' },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontSize:'13px', color:'#555', marginBottom:'6px' }}>{item.label}</div>
              <div style={{ background:'#e0e0e0', borderRadius:'4px', height:'22px', overflow:'hidden' }}>
                <div style={{
                  background: item.color,
                  width: item.pct,
                  height:'100%',
                  display:'flex', alignItems:'center', justifyContent:'center'
                }}>
                  <span style={{ color:'#fff', fontSize:'11px', fontWeight:'600' }}>{item.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display:'flex', gap:'10px' }}>
          <button style={{
            background:'#1a3353', color:'#fff', border:'none',
            padding:'10px 20px', borderRadius:'4px',
            fontSize:'14px', fontWeight:'600', cursor:'pointer'
          }}>
            ← Mitigation Planning
          </button>
          <button style={{
            background:'#1a3353', color:'#fff', border:'none',
            padding:'10px 20px', borderRadius:'4px',
            fontSize:'14px', fontWeight:'600', cursor:'pointer'
          }}>
            Save Progress
          </button>
        </div>
        <button style={{
          background:'#4caf50', color:'#fff', border:'none',
          padding:'10px 20px', borderRadius:'4px',
          fontSize:'14px', fontWeight:'600', cursor:'pointer'
        }}>
          Monitoring →
        </button>
      </div>

    </div>
  );
}