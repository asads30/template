export const menuItems = [
    {
        id: 1,
        label: 'header.dashboards.text',
        icon: 'monitor',
        subItems: [
            {
                id: 2,
                label: 'header.dashboards.list.sales',
                link: '/',
                parentId: 1
            },
            {
                id: 3,
                label: 'header.dashboards.list.analytics',
                link: '/dashboards/analytics',
                parentId: 1
            }
        ]
    },
    {
        id: 4,
        label: 'menuitems.uielements.text',
        icon: 'package',
        subItems: [
            {
                id: 5,
                label: 'menuitems.uielements.list.alerts',
                link: '/ui/alerts',
                parentId: 4
            },
            {
                id: 6,
                label: 'menuitems.uielements.list.buttons',
                link: '/ui/buttons',
                parentId: 4
            },
            {
                id: 7,
                label: 'menuitems.uielements.list.cards',
                link: '/ui/cards',
                parentId: 4
            },
            {
                id: 8,
                label: 'menuitems.uielements.list.carousel',
                link: '/ui/carousel',
                parentId: 4
            },
            {
                id: 9,
                label: 'menuitems.uielements.list.dropdowns',
                link: '/ui/dropdowns',
                parentId: 4
            },
            {
                id: 10,
                label: 'menuitems.uielements.list.grid',
                link: '/ui/grid',
                parentId: 4
            },
            {
                id: 11,
                label: 'menuitems.uielements.list.images',
                link: '/ui/images',
                parentId: 4
            },
            {
                id: 12,
                label: 'menuitems.uielements.list.modals',
                link: '/ui/modals',
                parentId: 4
            },
            {
                id: 13,
                label: 'menuitems.uielements.list.progressbar',
                link: '/ui/progressbars',
                parentId: 4
            },
            {
                id: 14,
                label: 'menuitems.uielements.list.tabs',
                link: '/ui/tabs-accordions',
                parentId: 4
            },
            {
                id: 15,
                label: 'menuitems.uielements.list.typography',
                link: '/ui/typography',
                parentId: 4
            },
            {
                id: 16,
                label: 'menuitems.uielements.list.video',
                link: '/ui/video',
                parentId: 4
            },
            {
                id: 17,
                label: 'menuitems.uielements.list.general',
                link: '/ui/general',
                parentId: 4
            },
            {
                id: 18,
                label: 'menuitems.uielements.list.colors',
                link: '/ui/colors',
                parentId: 4
            },
            {
                id: 19,
                label: 'menuitems.uielements.list.utilities',
                link: '/ui/utilities',
                parentId: 4
            },
            {
                id: 20,
                label: 'menuitems.extended.list.lightbox',
                link: '/extended/lightbox',
                parentId: 4
            },
            {
                id: 21,
                label: 'menuitems.extended.list.rangeslider',
                link: '/extended/rangeslider',
                parentId: 80
            },
            {
                id: 22,
                label: 'menuitems.extended.list.sweetalert',
                link: '/extended/sweet-alert',
                parentId: 4
            },
            {
                id: 23,
                label: 'menuitems.extended.list.rating',
                link: '/extended/rating',
                parentId: 4
            },
            {
                id: 24,
                label: 'menuitems.extended.list.notification',
                link: '/extended/notifications',
                parentId: 4
            }
        ]
    },
    {
        id: 26,
        label: 'header.apps.text',
        icon: 'grid',
        subItems: [
            {
                id: 27,
                label: 'menuitems.calendar.text',
                link: '/calendar',
                parentId: 26
            },
            {
                id: 28,
                label: 'menuitems.chat.text',
                link: '/apps/chat',
                parentId: 26
            },
            {
                id: 29,
                label: 'menuitems.kanbanboard.text',
                link: '/kanban-board',
                parentId: 26
            },
            {
                id: 30,
                label: 'menuitems.filemanager.text',
                link: '/file-manager',
                parentId: 26
            },
            {
                id: 31,
                label: 'menuitems.email.text',
                subItems: [
                    {
                        id: 32,
                        label: 'menuitems.email.list.inbox',
                        link: '/email/inbox',
                        parentId: 31
                    },
                    {
                        id: 33,
                        label: 'menuitems.email.list.reademail',
                        link: '/email/read/1',
                        parentId: 31
                    }
                ]
            },
            {
                id: 34,
                label: 'menuitems.contacts.text',
                icon: 'book',
                subItems: [
                    {
                        id: 35,
                        label: 'menuitems.contacts.list.usergrid',
                        link: '/contacts/grid',
                        parentId: 34
                    },
                    {
                        id: 36,
                        label: 'menuitems.contacts.list.userlist',
                        link: '/contacts/list',
                        parentId: 34
                    },
                    {
                        id: 37,
                        label: 'menuitems.contacts.list.settings',
                        link: '/user/settings',
                        parentId: 34
                    }
                ]
            },
            {
                id: 38,
                label: 'menuitems.gallery.text',
                link: '/gallery',
                parentId: 26
            },
            {
                id: 39,
                label: 'menuitems.projects.text',
                icon: 'briefcase',
                subItems: [
                    {
                        id: 40,
                        label: 'menuitems.projects.list.projectsgrid',
                        link: '/projects/grid',
                        parentId: 39
                    },
                    {
                        id: 41,
                        label: 'menuitems.projects.list.projectslist',
                        link: '/projects/list',
                        parentId: 39
                    },
                    {
                        id: 42,
                        label: 'menuitems.projects.list.projectsoverview',
                        link: '/projects/overview',
                        parentId: 39
                    },
                    {
                        id: 43,
                        label: 'menuitems.projects.list.createnew',
                        link: '/projects/create',
                        parentId: 39
                    }
                ]
            },
        ]
    },
    {
        id: 44,
        label: 'header.components.text',
        icon: 'layers',
        subItems: [
            {
                id: 45,
                label: 'menuitems.widgets.text',
                link: '/widgets',
                parentId: 44
            },
            {
                id: 46,
                label: 'menuitems.forms.text',
                subItems: [
                    {
                        id: 47,
                        label: 'menuitems.forms.list.elements',
                        link: '/form/elements',
                        parentId: 46
                    },
                    {
                        id: 48,
                        label: 'menuitems.forms.list.validation',
                        link: '/form/validation',
                        parentId: 46
                    },
                    {
                        id: 49,
                        label: 'menuitems.forms.list.advanced',
                        link: '/form/advanced',
                        parentId: 46
                    },
                    {
                        id: 50,
                        label: 'menuitems.forms.list.editor',
                        link: '/form/editors',
                        parentId: 46
                    },
                    {
                        id: 51,
                        label: 'menuitems.forms.list.fileupload',
                        link: '/form/uploads',
                        parentId: 46
                    },
                    {
                        id: 52,
                        label: 'menuitems.forms.list.wizard',
                        link: '/form/wizard',
                        parentId: 46
                    },
                    {
                        id: 53,
                        label: 'menuitems.forms.list.mask',
                        link: '/form/mask',
                        parentId: 46
                    }
                ]
            },
            {
                id: 54,
                icon: 'database',
                label: 'menuitems.tables.text',
                subItems: [
                    {
                        id: 55,
                        label: 'menuitems.tables.list.basic',
                        link: '/tables/basic',
                        parentId: 54
                    },
                    {
                        id: 56,
                        label: 'menuitems.tables.list.advancedtables',
                        link: '/tables/advanced',
                        parentId: 54
                    }
                ]
            },
            {
                id: 57,
                icon: 'bar-chart-2',
                label: 'menuitems.apexcharts.text',
                subItems: [
                    {
                        id: 58,
                        label: 'menuitems.apexcharts.list.line',
                        link: '/charts/line',
                        parentId: 57
                    },
                    {
                        id: 59,
                        label: 'menuitems.apexcharts.list.area',
                        link: '/charts/area',
                        parentId: 57
                    },
                    {
                        id: 60,
                        label: 'menuitems.apexcharts.list.column',
                        link: '/charts/column',
                        parentId: 57
                    },
                    {
                        id: 61,
                        label: 'menuitems.apexcharts.list.bar',
                        link: '/charts/bar',
                        parentId: 57
                    },
                    {
                        id: 62,
                        label: 'menuitems.apexcharts.list.mixed',
                        link: '/charts/mixed',
                        parentId: 57
                    },
                    {
                        id: 63,
                        label: 'menuitems.apexcharts.list.timeline',
                        link: '/charts/timeline',
                        parentId: 57
                    },
                    {
                        id: 64,
                        label: 'menuitems.apexcharts.list.candlestick',
                        link: '/charts/candlestick',
                        parentId: 57
                    },
                    {
                        id: 65,
                        label: 'menuitems.apexcharts.list.boxplot',
                        link: '/charts/boxplot',
                        parentId: 57
                    },
                    {
                        id: 66,
                        label: 'menuitems.apexcharts.list.bubble',
                        link: '/charts/bubble',
                        parentId: 57
                    },
                    {
                        id: 67,
                        label: 'menuitems.apexcharts.list.scatter',
                        link: '/charts/scatter',
                        parentId: 57
                    },
                    {
                        id: 68,
                        label: 'menuitems.apexcharts.list.heatmap',
                        link: '/charts/heatmap',
                        parentId: 57
                    },
                    {
                        id: 69,
                        label: 'menuitems.apexcharts.list.treemap',
                        link: '/charts/treemap',
                        parentId: 57
                    },
                    {
                        id: 70,
                        label: 'menuitems.apexcharts.list.pie',
                        link: '/charts/pie',
                        parentId: 57
                    },
                    {
                        id: 71,
                        label: 'menuitems.apexcharts.list.radialbar',
                        link: '/charts/radialbar',
                        parentId: 57
                    },
                    {
                        id: 72,
                        label: 'menuitems.apexcharts.list.radar',
                        link: '/charts/radar',
                        parentId: 57
                    },
                    {
                        id: 73,
                        label: 'menuitems.apexcharts.list.polararea',
                        link: '/charts/polararea',
                        parentId: 57
                    }
                ]
            },
            {
                id: 74,
                label: 'menuitems.icons.text',
                icon: 'archive',
                subItems: [
                    {
                        id: 75,
                        label: 'menuitems.icons.list.unicons',
                        link: '/icons/unicons',
                        parentId: 74
                    },
                    {
                        id: 76,
                        label: 'menuitems.icons.list.feathericons',
                        link: '/icons/feather',
                        parentId: 74
                    },
                    {
                        id: 77,
                        label: 'menuitems.icons.list.boxicons',
                        link: '/icons/boxicons',
                        parentId: 74
                    },
                    {
                        id: 78,
                        label: 'menuitems.icons.list.materialdesign',
                        link: '/icons/material',
                        parentId: 74
                    },
                    {
                        id: 79,
                        label: 'menuitems.icons.list.fontawesome',
                        link: '/icons/fontawesome',
                        parentId: 74
                    },
                ]
            },
            {
                id: 80,
                label: 'menuitems.maps.text',
                icon: 'map-pin',
                subItems: [
                    {
                        id: 81,
                        label: 'menuitems.maps.list.googlemap',
                        link: '/maps/google',
                        parentId: 80
                    },
                    {
                        id: 82,
                        label: 'menuitems.maps.list.leaflet',
                        link: '/maps/leaflet',
                        parentId: 80
                    },
                    {
                        id: 83,
                        label: 'menuitems.maps.list.vector',
                        link: '/maps/vector',
                        parentId: 80
                    }
                ]
            },
        ]
    },
    {
        id: 83,
        label: 'header.extrapages.text',
        icon: 'file',
        subItems: [
            {
                id: 84,
                label: 'menuitems.pricing.text',
                icon: 'tag',
                subItems: [
                    {
                        id: 85,
                        label: 'menuitems.pricing.list.basic',
                        link: '/pricing/basic',
                        parentId: 84
                    },
                    {
                        id: 86,
                        label: 'menuitems.pricing.list.table',
                        link: '/pricing/table',
                        parentId: 84
                    },
                ]
            },
            {
                id: 87,
                label: 'menuitems.invoices.text',
                icon: 'file',
                subItems: [
                    {
                        id: 88,
                        label: 'menuitems.invoices.list.invoicelist',
                        link: '/invoices/list',
                        parentId: 87
                    },
                    {
                        id: 89,
                        label: 'menuitems.invoices.list.invoicedetail',
                        link: '/invoices/detail',
                        parentId: 87
                    },
                ]
            },
            {
                id: 90,
                label: 'menuitems.timeline.text',
                icon: 'award',
                subItems: [
                    {
                        id: 91,
                        label: 'menuitems.timeline.list.centerview',
                        link: '/timeline/center',
                        parentId: 90
                    },
                    {
                        id: 92,
                        label: 'menuitems.timeline.list.leftview',
                        link: '/timeline/left',
                        parentId: 90
                    },
                    {
                        id: 93,
                        label: 'menuitems.timeline.list.horizontalview',
                        link: '/timeline/horizontal',
                        parentId: 90
                    },
                ]
            },
            {
                id: 94,
                label: 'header.authentication.text',
                icon: 'alert-circle',
                subItems: [
                    {
                        id: 95,
                        label: 'header.authentication.list.basic',
                        subItems: [
                            {
                                id: 96,
                                label: 'header.authentication.list.signin',
                                link: '/auth/signin-basic',
                                parentId: 95
                            },
                            {
                                id: 97,
                                label: 'header.authentication.list.signup',
                                link: '/auth/signup-basic',
                                parentId: 95
                            },
                            {
                                id: 98,
                                label: 'header.authentication.list.signout',
                                link: '/auth/signout-basic',
                                parentId: 95
                            },
                            {
                                id: 99,
                                label: 'header.authentication.list.lockscreen',
                                link: '/auth/lockscreen-basic',
                                parentId: 95
                            },
                            {
                                id: 100,
                                label: 'header.authentication.list.forgotpassword',
                                link: '/auth/forgotpassword-basic',
                                parentId: 95
                            },
                            {
                                id: 101,
                                label: 'header.authentication.list.resetpwd',
                                link: '/auth/resetpassword-basic',
                                parentId: 95
                            },
                            {
                                id: 102,
                                label: 'header.authentication.list.emailverification',
                                link: '/auth/emailverification-basic',
                                parentId: 95
                            },
                            {
                                id: 103,
                                label: 'header.authentication.list.twostepverification',
                                link: '/auth/2stepverification-basic',
                                parentId: 95
                            },
                            {
                                id: 104,
                                label: 'header.authentication.list.thankyou',
                                link: '/auth/thankyou-basic',
                                parentId: 95
                            }
                        ]
                    },
                    {
                        id: 106,
                        label: 'header.authentication.list.cover',
                        subItems: [
                            {
                                id: 107,
                                label: 'header.authentication.list.signin',
                                link: '/auth/signin-cover',
                                parentId: 106
                            },
                            {
                                id: 108,
                                label: 'header.authentication.list.signup',
                                link: '/auth/signup-cover',
                                parentId: 106
                            },
                            {
                                id: 109,
                                label: 'header.authentication.list.signout',
                                link: '/auth/signout-cover',
                                parentId: 106
                            },
                            {
                                id: 110,
                                label: 'header.authentication.list.lockscreen',
                                link: '/auth/lockscreen-cover',
                                parentId: 106
                            },
                            {
                                id: 111,
                                label: 'header.authentication.list.forgotpassword',
                                link: '/auth/forgotpassword-cover',
                                parentId: 106
                            },
                            {
                                id: 112,
                                label: 'header.authentication.list.resetpwd',
                                link: '/auth/resetpassword-cover',
                                parentId: 106
                            },
                            {
                                id: 113,
                                label: 'header.authentication.list.emailverification',
                                link: '/auth/emailverification-cover',
                                parentId: 106
                            },
                            {
                                id: 114,
                                label: 'header.authentication.list.twostepverification',
                                link: '/auth/2stepverification-basic',
                                parentId: 106
                            },
                            {
                                id: 115,
                                label: 'header.authentication.list.thankyou',
                                link: '/auth/thankyou-cover',
                                parentId: 106
                            }
                        ]
                    }
                ]
            },
            {
                id: 116,
                label: 'header.errorspages.text',
                icon: 'alert-circle',
                subItems: [
                    {
                        id: 117,
                        label: 'header.errorspages.list.400',
                        subItems: [
                            {
                                id: 118,
                                label: 'header.errorspages.list.basic',
                                link: '/error/404-basic',
                                parentId: 117
                            },
                            {
                                id: 119,
                                label: 'header.errorspages.list.cover',
                                link: '/error/404-cover',
                                parentId: 117
                            }
                        ]
                    },
                    {
                        id: 120,
                        label: 'header.errorspages.list.500',
                        subItems: [
                            {
                                id: 121,
                                label: 'header.errorspages.list.basic',
                                link: '/error/500-basic',
                                parentId: 120
                            },
                            {
                                id: 122,
                                label: 'header.errorspages.list.cover',
                                link: '/error/500-cover',
                                parentId: 120
                            }
                        ]
                    },
                ]
            },
            {
                id: 123,
                label: 'menuitems.utility.text',
                icon: 'file-text',
                subItems: [
                    {
                        id: 124,
                        label: 'menuitems.utility.list.starter',
                        link: '/pages/starter',
                        parentId: 123
                    },
                    {
                        id: 125,
                        label: 'menuitems.utility.list.profile',
                        link: '/pages/profile',
                        parentId: 123
                    },
                    {
                        id: 126,
                        label: 'menuitems.utility.list.maintenance',
                        link: '/pages/maintenance',
                        parentId: 123
                    },
                    {
                        id: 127,
                        label: 'menuitems.utility.list.comingsoon',
                        link: '/pages/comingsoon',
                        parentId: 123
                    },
                    {
                        id: 128,
                        label: 'menuitems.utility.list.faqs',
                        link: '/pages/faqs',
                        parentId: 123
                    }
                ]
            },
        ]
    },
];
