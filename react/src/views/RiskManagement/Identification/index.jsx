import { useState } from 'react';

// -----------------------|| RISK IDENTIFICATION ||-----------------------//
export default function RiskIdentification() {
  const [search, setSearch] = useState('');

  return (
    <div>

      {/* Breadcrumb */}
      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'16px', fontSize:'13px' }}>
        <a href="/" style={{ color:'#6c757d', textDecoration:'none' }}>🏠</a>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#8e85f2', fontWeight:'500' }}>Risk Management</span>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#333', fontWeight:'500' }}>Identification</span>
      </div>

      {/* Page Title */}
      <h5 style={{ marginBottom:'16px', fontWeight:'600', color:'#1a3353' }}>Identification</h5>

      {/* Card */}
      <div style={{ background:'#fff', border:'1px solid #e0e0e0', borderRadius:'6px', padding:'20px' }}>

        {/* Top bar: Create Risk + Search + Export buttons */}
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
          <button style={{
            background:'#e67e22', color:'#fff', border:'none',
            padding:'8px 18px', borderRadius:'4px', fontWeight:'600',
            fontSize:'14px', cursor:'pointer', whiteSpace:'nowrap'
          }}>
            Create Risk
          </button>

          <div style={{ display:'flex', alignItems:'center', flex:1, border:'1px solid #e0e0e0', borderRadius:'4px', overflow:'hidden' }}>
            <span style={{ padding:'0 12px', color:'#999', fontSize:'16px' }}>🔍</span>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ border:'none', outline:'none', flex:1, padding:'8px 0', fontSize:'14px' }}
            />
          </div>

          <button style={{
            background:'#4caf50', color:'#fff', border:'none',
            width:'36px', height:'36px', borderRadius:'4px',
            cursor:'pointer', fontSize:'16px', display:'flex',
            alignItems:'center', justifyContent:'center'
          }} title="Export">
            📄
          </button>
          <button style={{
            background:'#f44336', color:'#fff', border:'none',
            width:'36px', height:'36px', borderRadius:'4px',
            cursor:'pointer', fontSize:'16px', display:'flex',
            alignItems:'center', justifyContent:'center'
          }} title="Delete">
            🗑
          </button>
        </div>

        {/* Filter Dropdowns Row 1 */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'12px', marginBottom:'12px' }}>
          {['Select Framework', 'Select Category', 'Select Owner'].map((placeholder) => (
            <select key={placeholder} style={{
              border:'1px solid #8e85f2', borderRadius:'4px',
              padding:'8px 12px', fontSize:'14px', color:'#555',
              outline:'none', cursor:'pointer', background:'#fff'
            }}>
              <option value="">{placeholder}</option>
            </select>
          ))}
        </div>

        {/* Filter Dropdowns Row 2 */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'12px', marginBottom:'20px' }}>
          {['Select Status', 'Select Severity', 'Select Likelihood'].map((placeholder) => (
            <select key={placeholder} style={{
              border:'1px solid #e0e0e0', borderRadius:'4px',
              padding:'8px 12px', fontSize:'14px', color:'#555',
              outline:'none', cursor:'pointer', background:'#fff'
            }}>
              <option value="">{placeholder}</option>
            </select>
          ))}
        </div>

        {/* Table */}
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'14px' }}>
          <thead>
            <tr style={{ borderBottom:'1px solid #e0e0e0' }}>
              {['Risk ID','Title','Category','Severity','Likelihood','MitigationPlans','Owner','RiskScore','Status','Actions'].map((col) => (
                <th key={col} style={{
                  padding:'10px 12px', textAlign:'left',
                  fontWeight:'600', color:'#333', fontSize:'13px',
                  whiteSpace:'nowrap'
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={10} style={{
                padding:'40px', textAlign:'center',
                color:'#9e9e9e', fontSize:'14px'
              }}>
                No Risks Found
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}