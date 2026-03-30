import { lazy } from 'react';

import AdminLayout from 'layouts/AdminLayout';
import GuestLayout from 'layouts/GuestLayout';
const UserActivity = lazy(() => import('../views/UserActivity/index'));
const MyAssessment = lazy(() => import('../views/Assessment/MyAssessment/index'));
const RiskDashboard = lazy(() => import('../views/RiskManagement/Dashboard/index'));
const RiskIdentification = lazy(() => import('../views/RiskManagement/Identification/index'));
const RiskAssessment = lazy(() => import('../views/RiskManagement/Assessment/index'));
const RiskMitigation = lazy(() => import('../views/RiskManagement/Mitigation/index'));
const RiskImplementation = lazy(() => import('../views/RiskManagement/Implementation/index'));
const Incident = lazy(() => import('../views/IncidentManagement/Incident/index'));
const DashboardSales = lazy(() => import('../views/dashboard/DashSales/index'));

const Typography = lazy(() => import('../views/ui-elements/basic/BasicTypography'));
const Color = lazy(() => import('../views/ui-elements/basic/BasicColor'));

const FeatherIcon = lazy(() => import('../views/ui-elements/icons/Feather'));
const FontAwesome = lazy(() => import('../views/ui-elements/icons/FontAwesome'));
const MaterialIcon = lazy(() => import('../views/ui-elements/icons/Material'));

const Login = lazy(() => import('../views/auth/login'));
const Register = lazy(() => import('../views/auth/register'));

const Sample = lazy(() => import('../views/sample'));

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <AdminLayout />,
      children: [
        {
          path: '/dashboard/sales',
          element: <DashboardSales />
        },
        {
          path: '/typography',
          element: <Typography />
        },
        {
          path: '/color',
          element: <Color />
        },
        {
          path: '/icons/Feather',
          element: <FeatherIcon />
        },
        {
          path: '/icons/font-awesome-5',
          element: <FontAwesome />
        },
        {
          path: '/icons/material',
          element: <MaterialIcon />
        },

        {
          path: '/sample-page',
          element: <Sample />
        },
        {
          path: '/user-activity',
          element: <UserActivity />
        },
        {
          path: '/assessment/my-assessment',
          element: <MyAssessment />
        },
        {
        path: '/risk-management/dashboard',
        element: <RiskDashboard />
        },
        {
          path: '/risk-management/identification',
          element: <RiskIdentification />
        },
        { path: '/risk-management/assessment', 
          element: <RiskAssessment /> 
        },
        { path: '/risk-management/mitigation', 
          element: <RiskMitigation /> 
        },
        { path: '/risk-management/implementation', 
          element: <RiskImplementation /> 
        },
        { path: '/incident-management/incident', 
          element: <Incident /> 
        },
      ]
    },
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ]
};

export default MainRoutes;
