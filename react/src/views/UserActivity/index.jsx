import { useState } from 'react';

const TABS = ['Dashboard', 'App', 'Session', 'Idle', 'Snapshot', 'Screen Recordings', 'FileAudit'];

// -----------------------|| USER ACTIVITY ||-----------------------//
export default function UserActivity() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      {/* Tabs */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        marginBottom: '0'
      }}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '12px 20px',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid #1a3353' : '2px solid transparent',
              background: 'transparent',
              fontWeight: activeTab === tab ? '600' : '400',
              color: activeTab === tab ? '#1a3353' : '#6c757d',
              cursor: 'pointer',
              fontSize: '14px',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter Strip */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        background: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        marginTop: '16px',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            <span style={{
              border: '1px solid #e0e0e0',
              padding: '6px 14px',
              borderRadius: '4px',
              color: '#6c757d',
              whiteSpace: 'nowrap',
              fontSize: '14px'
            }}>From</span>
            <input
              type="date"
              className="form-control"
              defaultValue={today}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            <span style={{
              border: '1px solid #e0e0e0',
              padding: '6px 14px',
              borderRadius: '4px',
              color: '#6c757d',
              whiteSpace: 'nowrap',
              fontSize: '14px'
            }}>To</span>
            <input
              type="date"
              className="form-control"
              defaultValue={today}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
          <button className="btn btn-primary px-4">Apply Filter</button>
          <button className="btn btn-outline-secondary px-4">Reset Filter</button>
        </div>
      </div>

      {/* Empty content area */}
      <div style={{
        background: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        padding: '40px',
        textAlign: 'center',
        color: '#9e9e9e'
      }}>
        No data available for <strong>{activeTab}</strong> in the selected date range.
      </div>
    </div>
  );
}