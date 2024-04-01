export const menuItems = [
    {
        id: 1,
        label: 'menuitems.dashboards.text',
        isTitle: true
    },
    {
        id: 2,
        label: 'menuitems.sales.text',
        icon: 'monitor',
        link: '/',
        badge: {
            variant: 'badge-soft-secondary',
            text: 'menuitems.sales.badge',
        },
    },
    {
        id: 3,
        label: 'menuitems.analytics.text',
        icon: 'pie-chart',
        link: '/dashboards/analytics'
    },
    {
        id: 4,
        label: 'menuitems.applications.text',
        isTitle: true
    },
    {
        id: 5,
        label: 'menuitems.calendar.text',
        icon: 'calendar',
        link: '/calendar'
    },
    {
        id: 5,
        label: 'menuitems.chat.text',
        icon: 'message-square',
        link: '/apps/chat',
        badge: {
            variant: 'badge-soft-danger',
            text: 'menuitems.chat.badge',
        },
    },
    {
        id: 6,
        label: 'menuitems.kanbanboard.text',
        icon: 'trello',
        link: '/kanban-board'
    },
    {
        id: 7,
        label: 'menuitems.filemanager.text',
        icon: 'folder',
        link: '/file-manager'
    },
    {
        id: 8,
        label: 'menuitems.email.text',
        icon: 'mail',
        subItems: [
            {
                id: 9,
                label: 'menuitems.email.list.inbox',
                link: '/email/inbox',
                parentId: 8
            },
            {
                id: 10,
                label: 'menuitems.email.list.reademail',
                link: '/email/read/1',
                parentId: 8
            }
        ]
    },
    {
        id: 11,
        label: 'menuitems.contacts.text',
        icon: 'book',
        subItems: [
            {
                id: 12,
                label: 'menuitems.contacts.list.usergrid',
                link: '/contacts/grid',
                parentId: 11
            },
            {
                id: 13,
                label: 'menuitems.contacts.list.userlist',
                link: '/contacts/list',
                parentId: 11
            },
            {
                id: 14,
                label: 'menuitems.contacts.list.settings',
                link: '/user/settings',
                parentId: 11
            }
        ]
    },
    {
        id: 15,
        label: 'menuitems.gallery.text',
        icon: 'image',
        link: '/gallery'
    },
    {
        id: 16,
        label: 'menuitems.projects.text',
        icon: 'briefcase',
        subItems: [
            {
                id: 17,
                label: 'menuitems.projects.list.projectsgrid',
                link: '/projects/grid',
                parentId: 16
            },
            {
                id: 18,
                label: 'menuitems.projects.list.projectslist',
                link: '/projects/list',
                parentId: 16
            },
            {
                id: 19,
                label: 'menuitems.projects.list.projectsoverview',
                link: '/projects/overview',
                parentId: 16
            },
            {
                id: 20,
                label: 'menuitems.projects.list.createnew',
                link: '/projects/create',
                parentId: 16
            }
        ]
    },
    {
        id: 21,
        label: 'menuitems.pages.text',
        isTitle: true
    },
    {
        id: 22,
        label: 'menuitems.authentication.text',
        icon: 'user',
        badge: {
            variant: 'info',
            text: 'menuitems.authentication.badge',
        },
        subItems: [
            {
                id: 23,
                label: 'menuitems.authentication.list.signin',
                subItems: [
                    {
                        id: 24,
                        label: 'menuitems.authentication.list.basic',
                        link: '/auth/signin-basic',
                        parentId: 23
                    },
                    {
                        id: 25,
                        label: 'menuitems.authentication.list.cover',
                        link: '/auth/signin-cover',
                        parentId: 23
                    },
                ]
            },
            {
                id: 26,
                label: 'menuitems.authentication.list.signup',
                subItems: [
                    {
                        id: 27,
                        label: 'menuitems.authentication.list.basic',
                        link: '/auth/signup-basic',
                        parentId: 26
                    },
                    {
                        id: 28,
                        label: 'menuitems.authentication.list.cover',
                        link: '/auth/signup-cover',
                        parentId: 26
                    },
                ]
            },
            {
                id: 29,
                label: 'menuitems.authentication.list.signout',
                subItems: [
                    {
                        id: 30,
                        label: 'menuitems.authentication.list.basic',
                        link: '/auth/signout-basic',
                        parentId: 29
                    },
                    {
                        id: 31,
                        label: 'menuitems.authentication.list.cover',
                        link: '/auth/signout-cover',
                        parentId: 29
                    },
                ]
            },
            {
                id: 32,
                label: 'menuitems.authentication.list.lockscreen',
                subItems: [
                    {
                        id: 33,
                        label: 'menuitems.authentication.list.basic',
                        link: '/auth/lockscreen-basic',
                        parentId: 32
                    },
                    {
                        id: 34,
                        label: 'menuitems.authentication.list.cover',
                        link: '/auth/lockscreen-cover',
                        parentId: 32
                    },
                ]
            },
            {
                id: 35,
                label: 'menuitems.authentication.list.forgotpassword',
                subItems: [
                    {
                        id: 36,
                        label: 'menuitems.authentication.list.basic',
                        link: '/auth/forgotpassword-basic',
                        parentId: 32
                    },
                    {
                        id: 37,
                        label: 'menuitems.authentication.list.cover',
                        link: '/auth/forgotpassword-cover',
                        parentId: 32
                    },
                ]
            },
            {
                id: 38,
                label: 'menuitems.authentication.list.resetpwd',
                subItems: [
                    {
                        id: 39,
                        label: 'menuitems.authentication.list.basic',
                        link: '/auth/resetpassword-basic',
                        parentId: 38
                    },
                    {
                        id: 40,
                        label: 'menuitems.authentication.list.cover',
                        link: '/auth/resetpassword-cover',
                        parentId: 38
                    },
                ]
            },
            {
                id: 41,
                label: 'menuitems.authentication.list.emailverification',
                subItems: [
                    {
                        id: 42,
                        label: 'menuitems.authentication.list.basic',
                        link: '/auth/emailverification-basic',
                        parentId: 41
                    },
                    {
                        id: 43,
                        label: 'menuitems.authentication.list.cover',
                        link: '/auth/emailverification-cover',
                        parentId: 41
                    },
                ]
            },
            {
                id: 44,
                label: 'menuitems.authentication.list.twostepverification',
                subItems: [
                    {
                        id: 45,
                        label: 'menuitems.authentication.list.basic',
                        link: '/auth/2stepverification-basic',
                        parentId: 44
                    },
                    {
                        id: 46,
                        label: 'menuitems.authentication.list.cover',
                        link: '/auth/2stepverification-cover',
                        parentId: 44
                    },
                ]
            },
            {
                id: 47,
                label: 'menuitems.authentication.list.thankyou',
                subItems: [
                    {
                        id: 48,
                        label: 'menuitems.authentication.list.basic',
                        link: '/auth/thankyou-basic',
                        parentId: 47
                    },
                    {
                        id: 49,
                        label: 'menuitems.authentication.list.cover',
                        link: '/auth/thankyou-cover',
                        parentId: 47
                    },
                ]
            }
        ]
    },
    {
        id: 50,
        label: 'menuitems.errorspages.text',
        icon: 'alert-circle',
        subItems: [
            {
                id: 51,
                label: 'menuitems.errorspages.list.404basic',
                link: '/error/404-basic',
                parentId: 50
            },
            {
                id: 52,
                label: 'menuitems.errorspages.list.404cover',
                link: '/error/404-cover',
                parentId: 50
            },
            {
                id: 53,
                label: 'menuitems.errorspages.list.500basic',
                link: '/error/500-basic',
                parentId: 50
            },
            {
                id: 53,
                label: 'menuitems.errorspages.list.500cover',
                link: '/error/500-cover',
                parentId: 50
            },
        ]
    },
    {
        id: 54,
        label: 'menuitems.utility.text',
        icon: 'file-text',
        subItems: [
            {
                id: 55,
                label: 'menuitems.utility.list.starter',
                link: '/pages/starter',
                parentId: 54
            },
            {
                id: 56,
                label: 'menuitems.utility.list.profile',
                link: '/pages/profile',
                parentId: 54
            },
            {
                id: 56,
                label: 'menuitems.utility.list.maintenance',
                link: '/pages/maintenance',
                parentId: 54
            },
            {
                id: 57,
                label: 'menuitems.utility.list.comingsoon',
                link: '/pages/comingsoon',
                parentId: 54
            },
            {
                id: 58,
                label: 'menuitems.utility.list.faqs',
                link: '/pages/faqs',
                parentId: 54
            }
        ]
    },
    {
        id: 59,
        label: 'menuitems.pricing.text',
        icon: 'tag',
        subItems: [
            {
                id: 60,
                label: 'menuitems.pricing.list.basic',
                link: '/pricing/basic',
                parentId: 59
            },
            {
                id: 61,
                label: 'menuitems.pricing.list.table',
                link: '/pricing/table',
                parentId: 59
            },
        ]
    },
    {
        id: 62,
        label: 'menuitems.invoices.text',
        icon: 'file',
        subItems: [
            {
                id: 63,
                label: 'menuitems.invoices.list.invoicelist',
                link: '/invoices/list',
                parentId: 62
            },
            {
                id: 64,
                label: 'menuitems.invoices.list.invoicedetail',
                link: '/invoices/detail',
                parentId: 62
            },
        ]
    },
    {
        id: 65,
        label: 'menuitems.timeline.text',
        icon: 'award',
        subItems: [
            {
                id: 63,
                label: 'menuitems.timeline.list.centerview',
                link: '/timeline/center',
                parentId: 62
            },
            {
                id: 64,
                label: 'menuitems.timeline.list.leftview',
                link: '/timeline/left',
                parentId: 62
            },
            {
                id: 64,
                label: 'menuitems.timeline.list.horizontalview',
                link: '/timeline/horizontal',
                parentId: 62
            },
        ]
    },
    {
        id: 65,
        label: 'menuitems.components.text',
        isTitle: true
    },
    {
        id: 66,
        label: 'menuitems.uielements.text',
        icon: 'package',
        subItems: [
            {
                id: 67,
                label: 'menuitems.uielements.list.alerts',
                link: '/ui/alerts',
                parentId: 66
            },
            {
                id: 67,
                label: 'menuitems.uielements.list.buttons',
                link: '/ui/buttons',
                parentId: 66
            },
            {
                id: 67,
                label: 'menuitems.uielements.list.cards',
                link: '/ui/cards',
                parentId: 66
            },
            {
                id: 68,
                label: 'menuitems.uielements.list.carousel',
                link: '/ui/carousel',
                parentId: 66
            },
            {
                id: 69,
                label: 'menuitems.uielements.list.dropdowns',
                link: '/ui/dropdowns',
                parentId: 66
            },
            {
                id: 70,
                label: 'menuitems.uielements.list.grid',
                link: '/ui/grid',
                parentId: 66
            },
            {
                id: 71,
                label: 'menuitems.uielements.list.images',
                link: '/ui/images',
                parentId: 66
            },
            {
                id: 72,
                label: 'menuitems.uielements.list.modals',
                link: '/ui/modals',
                parentId: 66
            },
            {
                id: 73,
                label: 'menuitems.uielements.list.progressbar',
                link: '/ui/progressbars',
                parentId: 66
            },
            {
                id: 74,
                label: 'menuitems.uielements.list.tabs',
                link: '/ui/tabs-accordions',
                parentId: 66
            },
            {
                id: 75,
                label: 'menuitems.uielements.list.typography',
                link: '/ui/typography',
                parentId: 66
            },
            {
                id: 76,
                label: 'menuitems.uielements.list.video',
                link: '/ui/video',
                parentId: 66
            },
            {
                id: 77,
                label: 'menuitems.uielements.list.general',
                link: '/ui/general',
                parentId: 66
            },
            {
                id: 78,
                label: 'menuitems.uielements.list.colors',
                link: '/ui/colors',
                parentId: 66
            },
            {
                id: 79,
                label: 'menuitems.uielements.list.utilities',
                link: '/ui/utilities',
                parentId: 66
            }
        ]
    },
    {
        id: 80,
        label: 'menuitems.extended.text',
        icon: 'cpu',
        subItems: [
            {
                id: 81,
                label: 'menuitems.extended.list.lightbox',
                link: '/extended/lightbox',
                parentId: 80
            },
            {
                id: 82,
                label: 'menuitems.extended.list.rangeslider',
                link: '/extended/rangeslider',
                parentId: 80
            },
            {
                id: 83,
                label: 'menuitems.extended.list.sweetalert',
                link: '/extended/sweet-alert',
                parentId: 80
            },
            {
                id: 84,
                label: 'menuitems.extended.list.rating',
                link: '/extended/rating',
                parentId: 80
            },
            {
                id: 85,
                label: 'menuitems.extended.list.notification',
                link: '/extended/notifications',
                parentId: 80
            }
        ]
    },
    {
        id: 87,
        label: 'menuitems.widgets.text',
        icon: 'grid',
        link: '/widgets'
    },
    {
        id: 88,
        label: 'menuitems.forms.text',
        icon: 'edit-3',
        subItems: [
            {
                id: 89,
                label: 'menuitems.forms.list.elements',
                link: '/form/elements',
                parentId: 88
            },
            {
                id: 89,
                label: 'menuitems.forms.list.validation',
                link: '/form/validation',
                parentId: 88
            },
            {
                id: 90,
                label: 'menuitems.forms.list.advanced',
                link: '/form/advanced',
                parentId: 88
            },
            {
                id: 91,
                label: 'menuitems.forms.list.editor',
                link: '/form/editors',
                parentId: 88
            },
            {
                id: 92,
                label: 'menuitems.forms.list.fileupload',
                link: '/form/uploads',
                parentId: 88
            },
            {
                id: 93,
                label: 'menuitems.forms.list.wizard',
                link: '/form/wizard',
                parentId: 88
            },
            {
                id: 94,
                label: 'menuitems.forms.list.mask',
                link: '/form/mask',
                parentId: 88
            }
        ]
    },
    {
        id: 95,
        icon: 'database',
        label: 'menuitems.tables.text',
        subItems: [
            {
                id: 96,
                label: 'menuitems.tables.list.basic',
                link: '/tables/basic',
                parentId: 95
            },
            {
                id: 97,
                label: 'menuitems.tables.list.advancedtables',
                link: '/tables/advanced',
                parentId: 95
            }
        ]
    },
    {
        id: 98,
        icon: 'bar-chart-2',
        label: 'menuitems.apexcharts.text',
        subItems: [
            {
                id: 99,
                label: 'menuitems.apexcharts.list.line',
                link: '/charts/line',
                parentId: 98
            },
            {
                id: 100,
                label: 'menuitems.apexcharts.list.area',
                link: '/charts/area',
                parentId: 98
            },
            {
                id: 101,
                label: 'menuitems.apexcharts.list.column',
                link: '/charts/column',
                parentId: 98
            },
            {
                id: 102,
                label: 'menuitems.apexcharts.list.bar',
                link: '/charts/bar',
                parentId: 98
            },
            {
                id: 103,
                label: 'menuitems.apexcharts.list.mixed',
                link: '/charts/mixed',
                parentId: 98
            },
            {
                id: 104,
                label: 'menuitems.apexcharts.list.timeline',
                link: '/charts/timeline',
                parentId: 98
            },
            {
                id: 105,
                label: 'menuitems.apexcharts.list.candlestick',
                link: '/charts/candlestick',
                parentId: 98
            },
            {
                id: 106,
                label: 'menuitems.apexcharts.list.boxplot',
                link: '/charts/boxplot',
                parentId: 98
            },
            {
                id: 107,
                label: 'menuitems.apexcharts.list.bubble',
                link: '/charts/bubble',
                parentId: 98
            },
            {
                id: 108,
                label: 'menuitems.apexcharts.list.scatter',
                link: '/charts/scatter',
                parentId: 98
            },
            {
                id: 109,
                label: 'menuitems.apexcharts.list.heatmap',
                link: '/charts/heatmap',
                parentId: 98
            },
            {
                id: 110,
                label: 'menuitems.apexcharts.list.treemap',
                link: '/charts/treemap',
                parentId: 98
            },
            {
                id: 111,
                label: 'menuitems.apexcharts.list.pie',
                link: '/charts/pie',
                parentId: 98
            },
            {
                id: 112,
                label: 'menuitems.apexcharts.list.radialbar',
                link: '/charts/radialbar',
                parentId: 98
            },
            {
                id: 113,
                label: 'menuitems.apexcharts.list.radar',
                link: '/charts/radar',
                parentId: 98
            },
            {
                id: 114,
                label: 'menuitems.apexcharts.list.polararea',
                link: '/charts/polararea',
                parentId: 98
            }
        ]
    },
    {
        id: 115,
        label: 'menuitems.icons.text',
        icon: 'archive',
        subItems: [
            {
                id: 116,
                label: 'menuitems.icons.list.unicons',
                link: '/icons/unicons',
                parentId: 115
            },
            {
                id: 117,
                label: 'menuitems.icons.list.feathericons',
                link: '/icons/feather',
                parentId: 115
            },
            {
                id: 118,
                label: 'menuitems.icons.list.boxicons',
                link: '/icons/boxicons',
                parentId: 115
            },
            {
                id: 119,
                label: 'menuitems.icons.list.materialdesign',
                link: '/icons/material',
                parentId: 115
            },
            {
                id: 120,
                label: 'menuitems.icons.list.fontawesome',
                link: '/icons/fontawesome',
                parentId: 115
            },
        ]
    },
    {
        id: 121,
        label: 'menuitems.maps.text',
        icon: 'map-pin',
        subItems: [
            {
                id: 122,
                label: 'menuitems.maps.list.googlemap',
                link: '/maps/google',
                parentId: 121
            },
            {
                id: 123,
                label: 'menuitems.maps.list.leaflet',
                link: '/maps/leaflet',
                parentId: 121
            },
            {
                id: 124,
                label: 'menuitems.maps.list.vector',
                link: '/maps/vector',
                parentId: 121
            }
        ]
    },
    {
        id: 125,
        label: 'menuitems.multilevel.text',
        icon: 'share-2',
        subItems: [
            {
                id: 126,
                label: 'menuitems.multilevel.list.level1.1',
                link: '#',
                parentId: 125
            },
            {
                id: 127,
                label: 'menuitems.multilevel.list.level1.2',
                subItems: [
                    {
                        id: 128,
                        label: 'menuitems.multilevel.list.level1.level2.1',
                        parentId: 127,
                        link: '#'
                    },
                    {
                        id: 129,
                        label: 'menuitems.multilevel.list.level1.level2.2',
                        parentId: 127,
                        link: '#'
                    }
                ]
            },
        ]
    }
];

