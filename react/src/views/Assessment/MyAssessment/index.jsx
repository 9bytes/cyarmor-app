import { Link } from 'react-router-dom';

// -----------------------|| MY ASSESSMENT ||-----------------------//
export default function MyAssessment() {
  return (
    <div>

      {/* Breadcrumb */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '16px',
        fontSize: '13px',
        color: '#6c757d'
      }}>
        <Link to="/" style={{ color: '#6c757d', textDecoration: 'none' }}>
          🏠
        </Link>
        <span>/</span>
        <Link to="#" style={{ color: '#8e85f2', textDecoration: 'none', fontWeight: '500' }}>
          Assessment
        </Link>
        <span>/</span>
        <span style={{ color: '#333', fontWeight: '500' }}>My Assessment</span>
      </div>

      {/* Page Title */}
  
   
      <h5 style={{ marginBottom: '16px', fontWeight: '600', color: '#1a3353', fontFamily: "Michroma"  }}>
        My Assessment
      </h5>

      {/* Card with Add button and empty state */}
      <div style={{
        background: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        padding: '20px'
      }}>
        {/* Add Button */}
        <div style={{ marginBottom: '16px' }}>
          <button
            className="btn"
            style={{
              background: '#8e85f2',
              color: '#fff',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '4px',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            Add
          </button>
        </div>

        {/* Empty State */}
        <div style={{
          textAlign: 'center',
          padding: '40px 0',
          color: '#9e9e9e',
          fontSize: '14px'
        }}>
          No data available
        </div>
      </div>

    </div>
  );
}