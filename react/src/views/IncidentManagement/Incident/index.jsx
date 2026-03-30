import { useState } from 'react';

// -----------------------|| INCIDENT MANAGEMENT - INCIDENT ||-----------------------//
export default function Incident() {
  const [search, setSearch] = useState('');

  return (
    <div>

      {/* Breadcrumb */}
      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'16px', fontSize:'13px' }}>
        <a href="/" style={{ color:'#6c757d', textDecoration:'none' }}>🏠</a>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#8e85f2', fontWeight:'500' }}>Incident Management</span>
        <span style={{ color:'#6c757d' }}>/</span>
        <span style={{ color:'#333', fontWeight:'500' }}>Incident</span>
      </div>

      {/* Card */}
      <div style={{ background:'#fff', border:'1px solid #e0e0e0', borderRadius:'6px', padding:'20px' }}>

        {/* Top bar */}
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px' }}>
          <button style={{
            background:'#e67e22', color:'#fff', border:'none',
            padding:'8px 18px', borderRadius:'4px',
            fontWeight:'600', fontSize:'14px', cursor:'pointer',
            whiteSpace:'nowrap'
          }}>
            Create Incident
          </button>

          <div style={{
            display:'flex', alignItems:'center', flex:1,
            border:'1px solid #e0e0e0', borderRadius:'4px', overflow:'hidden'
          }}>
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
            cursor:'pointer', fontSize:'16px',
            display:'flex', alignItems:'center', justifyContent:'center'
          }} title="Export">📄</button>

          <button style={{
            background:'#f44336', color:'#fff', border:'none',
            width:'36px', height:'36px', borderRadius:'4px',
            cursor:'pointer', fontSize:'16px',
            display:'flex', alignItems:'center', justifyContent:'center'
          }} title="Delete">🗑</button>
        </div>

        {/* Table */}
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'13px' }}>
          <thead>
            <tr style={{ background:'#f8f9fa', borderBottom:'1px solid #e0e0e0' }}>
              {['Incident ID', 'RootCause Analysis', 'Risk Title', 'Summary', 'ReportedBy', 'Actions'].map((col) => (
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
              <td colSpan={6} style={{
                padding:'40px', textAlign:'center',
                color:'#9e9e9e', fontSize:'14px'
              }}>
                No Incidents Found
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}