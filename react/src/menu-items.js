// Menu configuration for default layout
const menuItems = {
  items: [
    {
      id: 'security-services',
      title: 'Security Services',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'ph-squares-four',
          url: '/dashboard'
        },
        {
          id: 'user-activity',
          title: 'User Activity',
          type: 'item',
          icon: 'ph-activity',
          url: '/user-activity'
        }
      ]
    },
    {
      id: 'assessment-risk',
      title: 'Assessment & Risk',
      type: 'group',
      icon: 'icon-assessment',
      children: [
        {
          id: 'assessment',
          title: 'Assessment',
          type: 'collapse',
          icon: 'ph-clipboard-text',
          children: [
            {
              id: 'my-assessment',
              title: 'My Assessment',
              type: 'item',
              url: '/assessment/my-assessment'
            }
          ]
        },
        {
          id: 'risk-management',
          title: 'Risk Management',
          type: 'collapse',
          icon: 'ph-shield-warning',
          children: [
            {
              id: 'risk-dashboard',
              title: 'Dashboard',
              type: 'item',
              url: '/risk-management/dashboard'
            },
            {
              id: 'risk-identification',
              title: 'Identification Assessment',
              type: 'item',
              url: '/risk-management/identification'
            },
            {
              id: 'risk-mitigation',
              title: 'Mitigation',
              type: 'item',
              url: '/risk-management/mitigation'
            },
            {
              id: 'risk-implementation',
              title: 'Implementation',
              type: 'item',
              url: '/risk-management/implementation'
            }
          ]
        }
      ]
    },
    {
      id: 'incident-user',
      title: 'Incident & User Management',
      type: 'group',
      icon: 'icon-incident',
      children: [
        {
          id: 'incident-management',
          title: 'Incident Management',
          type: 'collapse',
          icon: 'ph-warning-circle',
          children: [
            {
              id: 'incident',
              title: 'Incident',
              type: 'item',
              url: '/incident-management/incident'
            }
          ]
        },
        {
          id: 'user-management',
          title: 'User Management',
          type: 'collapse',
          icon: 'ph-users',
          children: [
            {
              id: 'users',
              title: 'Users',
              type: 'item',
              url: '/user-management/users'
            },
            {
              id: 'user-groups',
              title: 'User Groups',
              type: 'item',
              url: '/user-management/user-groups'
            },
            {
              id: 'roles',
              title: 'Roles',
              type: 'item',
              url: '/user-management/roles'
            }
          ]
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      type: 'group',
      icon: 'icon-infrastructure',
      children: [
        {
          id: 'device-management',
          title: 'Device Management',
          type: 'collapse',
          icon: 'ph-desktop',
          children: [
            {
              id: 'devices',
              title: 'Devices',
              type: 'item',
              url: '/device-management/devices'
            },
            {
              id: 'device-groups',
              title: 'Device Groups',
              type: 'item',
              url: '/device-management/device-groups'
            }
          ]
        },
        {
          id: 'app-management',
          title: 'App Management',
          type: 'item',
          icon: 'ph-app-window',
          url: '/app-management'
        }
      ]
    },
    {
      id: 'governance',
      title: 'Governance',
      type: 'group',
      icon: 'icon-governance',
      children: [
        {
          id: 'policies',
          title: 'Policies',
          type: 'item',
          icon: 'ph-scroll',
          url: '/policies'
        },
        {
          id: 'jobs',
          title: 'Jobs',
          type: 'item',
          icon: 'ph-briefcase',
          url: '/jobs'
        },
        {
          id: 'workspaces',
          title: 'Workspaces',
          type: 'item',
          icon: 'ph-layout',
          url: '/workspaces'
        },
        {
          id: 'modules',
          title: 'Modules',
          type: 'item',
          icon: 'ph-cube',
          url: '/modules'
        },
        {
          id: 'requests',
          title: 'Requests',
          type: 'item',
          icon: 'ph-paper-plane-tilt',
          url: '/requests'
        }
      ]
    },
    {
      id: 'configuration',
      title: 'Configuration',
      type: 'group',
      icon: 'icon-configuration',
      children: [
        {
          id: 'settings',
          title: 'Settings',
          type: 'collapse',
          icon: 'ph-gear',
          children: [
            {
              id: 'file-settings',
              title: 'File Settings',
              type: 'item',
              url: '/settings/file-settings'
            },
            {
              id: 'grc',
              title: 'GRC',
              type: 'collapse',
              children: [
                {
                  id: 'grc-master',
                  title: 'GRC Master',
                  type: 'item',
                  url: '/settings/grc/master'
                },
                {
                  id: 'grc-fields',
                  title: 'Fields',
                  type: 'item',
                  url: '/settings/grc/fields'
                },
                {
                  id: 'grc-iso27001',
                  title: 'ISO 27001',
                  type: 'item',
                  url: '/settings/grc/iso27001'
                },
                {
                  id: 'grc-soc1',
                  title: 'SOC 1',
                  type: 'item',
                  url: '/settings/grc/soc1'
                },
                {
                  id: 'grc-soc2',
                  title: 'SOC 2',
                  type: 'item',
                  url: '/settings/grc/soc2'
                },
                {
                  id: 'grc-rbi',
                  title: 'RBI',
                  type: 'item',
                  url: '/settings/grc/rbi'
                },
                {
                  id: 'grc-iso42001',
                  title: 'ISO 42001',
                  type: 'item',
                  url: '/settings/grc/iso42001'
                }
              ]
            },
            {
              id: 'remote-apps',
              title: 'Remote Apps',
              type: 'item',
              url: '/settings/remote-apps'
            }
          ]
        }
      ]
    }
  ]
};

export default menuItems;
