import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// -----------------------|| CYARMOR LOGIN ||-----------------------//
export default function SignIn1() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState('Local Login');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #8e85f2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '10%',
      paddingRight: '10%',
      fontFamily: '"Nunito", sans-serif'
    }}>

      {/* Left Panel */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: '4%'
      }}>
        <div style={{
          fontFamily: '"Michroma", sans-serif',
          fontSize: '58px',
          fontWeight: '400',
          lineHeight: '1.1',
          marginBottom: '1%',
          marginLeft: '15%'

        }}>
          <span style={{ color: '#8e85f2' }}>cy</span>
          <span style={{ color: '#ffffff' }}>armor</span>
        </div>
        <div style={{
          fontFamily: '"Michroma", sans-serif',
          fontSize: '17.5px',
          color: 'rgba(255, 255, 255, 0.32)',
          letterSpacing: '1px',
          marginBottom: '3%',
          marginLeft: '15%'

        }}>
          Foresee Comply Protect
        </div>
   <div style={{
  fontFamily: '"Michroma", sans-serif',
  fontSize: '20px',
  color: 'rgba(255, 255, 255, 0.75)',
  letterSpacing: '2px',
  lineHeight: '1.6',
  textTransform: 'uppercase',
          marginLeft: '15%'

}}>
  next-gen digital workspace platform
</div>

<div style={{ marginTop: '40px' }}>
  <NavLink to="#" style={{
    fontFamily: '"Michroma", sans-serif',
    fontSize: '13px',
    color: '#8e85f2',
    textDecoration: 'none',
    // border: '1px solid #8e85f2',
    padding: '10px 24px',
    borderRadius: '6px',
    letterSpacing: '1px',
    transition: 'all 0.2s',
    marginLeft: '12%'

  }}>
    Request Demo →
  </NavLink>
</div>
      </div>

      {/* Login Card */}
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '460px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        flexShrink: 0
      }}>

        {/* Title */}
        <h5 style={{
          textAlign: 'center',
          color: '#1a3353',
          fontWeight: '600',
          marginBottom: '28px',
          fontSize: '18px',
          fontFamily: '"Michroma", sans-serif'
        }}>
          Login into your account
        </h5>

        {/* Login Type Dropdown */}
        <div style={{ marginBottom: '16px', position: 'relative' }}>
          <select
            value={loginType}
            onChange={e => setLoginType(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '1.5px solid #8e85f2',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#1a3353',
              background: '#f0f0ff',
              outline: 'none',
              cursor: 'pointer',
              appearance: 'none',
              fontFamily: '"Nunito", sans-serif',
              fontWeight: '600'
            }}
          >
            <option>Local Login</option>
            <option>LDAP Login</option>
            <option>Azure AD Login</option>
          </select>
          <span style={{
            position: 'absolute', right: '16px', top: '50%',
            transform: 'translateY(-50%)', pointerEvents: 'none',
            color: '#8e85f2', fontSize: '18px'
          }}>⌄</span>
        </div>

        {/* Username */}
        <div style={{
          display: 'flex', alignItems: 'center',
          border: '1px solid #e0e0e0', borderRadius: '8px',
          overflow: 'hidden', marginBottom: '14px'
        }}>
          <div style={{
            width: '52px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderRight: '1px solid #e0e0e0',
            padding: '14px 0'
          }}>
            <i className="ph-duotone ph-user" style={{ fontSize: '20px', color: '#8e85f2' }} />
          </div>
          <input
            type="text"
            placeholder="Username"
            style={{
              flex: 1, border: 'none', outline: 'none',
              padding: '14px 16px', fontSize: '14px',
              fontFamily: '"Nunito", sans-serif', color: '#333'
            }}
          />
        </div>

        {/* Password */}
        <div style={{
          display: 'flex', alignItems: 'center',
          border: '1px solid #e0e0e0', borderRadius: '8px',
          overflow: 'hidden', marginBottom: '14px'
        }}>
          <div style={{
            width: '52px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderRight: '1px solid #e0e0e0',
            padding: '14px 0'
          }}>
            <i className="ph-duotone ph-lock" style={{ fontSize: '20px', color: '#8e85f2' }} />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            style={{
              flex: 1, border: 'none', outline: 'none',
              padding: '14px 16px', fontSize: '14px',
              fontFamily: '"Nunito", sans-serif', color: '#333'
            }}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            style={{
              width: '52px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', borderLeft: '1px solid #e0e0e0',
              padding: '14px 0', cursor: 'pointer'
            }}
          >
            <i className={`ph-duotone ${showPassword ? 'ph-eye' : 'ph-eye-slash'}`}
              style={{ fontSize: '20px', color: '#8e85f2' }} />
          </div>
        </div>

        {/* OTP */}
        <div style={{
          display: 'flex', alignItems: 'center',
          border: '1px solid #e0e0e0', borderRadius: '8px',
          overflow: 'hidden', marginBottom: '16px'
        }}>
          <div style={{
            width: '52px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', borderRight: '1px solid #e0e0e0',
            padding: '14px 0'
          }}>
            <i className="ph-duotone ph-lock-key" style={{ fontSize: '20px', color: '#8e85f2' }} />
          </div>
          <input
            type="text"
            placeholder="OTP"
            style={{
              flex: 1, border: 'none', outline: 'none',
              padding: '14px 16px', fontSize: '14px',
              fontFamily: '"Nunito", sans-serif', color: '#333'
            }}
          />
        </div>

        {/* Remember me */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <input type="checkbox" id="remember" defaultChecked
            style={{ accentColor: '#8e85f2', width: '16px', height: '16px', cursor: 'pointer' }} />
          <label htmlFor="remember"
            style={{ fontSize: '14px', color: '#6c757d', cursor: 'pointer', margin: 0 }}>
            Remember me
          </label>
        </div>

        {/* Continue Button */}
        <button
  onClick={() => window.location.href = '/react/free/dashboard/sales'}
  style={{
          width: '100%',
          padding: '14px',
          background: '#8e85f2',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontFamily: '"Michroma", sans-serif',
          fontWeight: '400',
          cursor: 'pointer',
          letterSpacing: '1px',
          marginBottom: '20px'
        }}>
          Continue
        </button>

        {/* Forgot Password + Request Demo */}
<div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
  <NavLink to="#" style={{
    color: '#8e85f2',
    fontWeight: '600',
    fontSize: '14px',
    textDecoration: 'none'
  }}>
    Request Demo
  </NavLink>
  <NavLink to="#" style={{
    color: '#1a3353',
    fontWeight: '700',
    fontSize: '14px',
    textDecoration: 'none'
  }}>
    Forgot Password?
  </NavLink>
</div>

      </div>

     

    </div>
  );
}