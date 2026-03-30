// menu-items.js
//
// All ids are prefixed with 'nav-' to prevent accidental URL segment
// matches. NavItem checks if item.id exists in the current URL path
// segments — without the prefix, generic words like 'dashboard',
// 'management', 'users' would match and highlight incorrectly.

const menuItems = {
  items: [

    // ─────────────────────────────────────────────
    // GROUP 1 — Security Services
    // ─────────────────────────────────────────────
    {
      id: 'nav-security-services',
      title: 'Security Services',
      type: 'group',
      children: [

        {
          id: 'nav-dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard/sales',
          icon: 'ph-squares-four',
        },

        {
          id: 'nav-user-activity',
          title: 'User Activity',
          type: 'item',
          url: '/user-activity',
          icon: 'ph-activity',
        },

      ],
    },

    // ─────────────────────────────────────────────
    // GROUP 2 — Risk & Compliance
    // ─────────────────────────────────────────────
    {
      id: 'nav-risk-compliance',
      title: 'Risk & Compliance',
      type: 'group',
      children: [

        {
          id: 'nav-assessment',
          title: 'Assessment',
          type: 'collapse',
          icon: 'ph-clipboard-text',
          children: [
            {
              id: 'nav-my-assessment',
              title: 'My Assessment',
              type: 'item',
              url: '/assessment/my-assessment',
            },
          ],
        },

        {
          id: 'nav-risk-management',
          title: 'Risk Management',
          type: 'collapse',
          icon: 'ph-shield-warning',
          children: [
            {
              id: 'nav-risk-dashboard',
              title: 'Dashboard',
              type: 'item',
              url: '/risk-management/dashboard',
            },
            {
              id: 'nav-risk-identification',
              title: 'Identification',
              type: 'item',
              url: '/risk-management/identification',
            },
            {
              id: 'nav-risk-assessment',
              title: 'Assessment',
              type: 'item',
              url: '/risk-management/assessment',
            },
            {
              id: 'nav-risk-mitigation',
              title: 'Mitigation',
              type: 'item',
              url: '/risk-management/mitigation',
            },
            {
              id: 'nav-risk-implementation',
              title: 'Implementation',
              type: 'item',
              url: '/risk-management/implementation',
            },
          ],
        },

        {
          id: 'nav-incident-management',
          title: 'Incident Management',
          type: 'collapse',
          icon: 'ph-warning-octagon',
          children: [
            {
              id: 'nav-incident',
              title: 'Incident',
              type: 'item',
              url: '/incident-management/incident',
            },
          ],
        },

      ],
    },

    // ─────────────────────────────────────────────
    // GROUP 3 — Administration
    // ─────────────────────────────────────────────
    {
      id: 'nav-administration',
      title: 'Administration',
      type: 'group',
      children: [

        {
          id: 'nav-user-management',
          title: 'User Management',
          type: 'collapse',
          icon: 'ph-users-three',
          children: [
            {
              id: 'nav-users',
              title: 'Users',
              type: 'item',
              url: '#',
            },
            {
              id: 'nav-user-groups',
              title: 'User Groups',
              type: 'item',
              url: '#', 
            },
            {
              id: 'nav-roles',
              title: 'Roles',
              type: 'item',
              url: '#',
            },
          ],
        },

        {
          id: 'nav-device-management',
          title: 'Device Management',
          type: 'collapse',
          icon: 'ph-devices',
          children: [
            {
              id: 'nav-devices',
              title: 'Devices',
              type: 'item',
              url: '#',
            },
            {
              id: 'nav-device-groups',
              title: 'Device Groups',
              type: 'item',
              url: '#',
            },
          ],
        },

        {
          id: 'nav-app-management',
          title: 'App Management',
          type: 'item',
          url: '#',
          icon: 'ph-app-window',
        },

      ],
    },

    // ─────────────────────────────────────────────
    // GROUP 4 — Management
    // ─────────────────────────────────────────────
    {
      id: 'nav-management',
      title: 'Management',
      type: 'group',
      children: [

        {
          id: 'nav-policies',
          title: 'Policies',
          type: 'item',
          url: '#',
          icon: 'ph-file-text',
        },

        {
          id: 'nav-jobs',
          title: 'Jobs',
          type: 'item',
          url: '#',
          icon: 'ph-briefcase',
        },

        {
          id: 'nav-workspaces',
          title: 'Workspaces',
          type: 'item',
          url: '#',
          icon: 'ph-house-line',
        },

        {
          id: 'nav-modules',
          title: 'Modules',
          type: 'item',
          url: '#',
          icon: 'ph-stack',
        },

        {
          id: 'nav-requests',
          title: 'Requests',
          type: 'item',
          url: '#',
          icon: 'ph-chat-dots',
        },

      ],
    },

    // ─────────────────────────────────────────────
    // GROUP 5 — System
    // ─────────────────────────────────────────────
    {
      id: 'nav-system',
      title: 'System',
      type: 'group',
      children: [

        {
          id: 'nav-settings',
          title: 'Settings',
          type: 'collapse',
          icon: 'ph-gear-six',
          children: [

            {
              id: 'nav-file-settings',
              title: 'File Settings',
              type: 'item',
              url: '#',
            },

            {
              id: 'nav-grc',
              title: 'GRC',
              type: 'collapse',
              icon: 'ph-tree-structure',
              children: [
                {
                  id: 'nav-grc-master',
                  title: 'GRC Master',
                  type: 'item',
                  url: '#',
                },
                {
                  id: 'nav-grc-fields',
                  title: 'Fields',
                  type: 'item',
                  url: '#',
                },
                {
                  id: 'nav-grc-iso27001',
                  title: 'ISO27001',
                  type: 'item',
                  url: '#',
                },
                {
                  id: 'nav-grc-soc1',
                  title: 'SOC1',
                  type: 'item',
                  url: '#',
                },
                {
                  id: 'nav-grc-soc2',
                  title: 'SOC2',
                  type: 'item',
                  url: '#',
                },
                {
                  id: 'nav-grc-rbi',
                  title: 'RBI',
                  type: 'item',
                  url: '#',
                },
                {
                  id: 'nav-grc-iso42001',
                  title: 'ISO42001',
                  type: 'item',
                  url: '#',
                },
              ],
            },

            {
              id: 'nav-remote-apps',
              title: 'Remote Apps',
              type: 'item',
              url: '#',
            },

          ],
        },

      ],
    },

  ],
};

export default menuItems;