const upcomingTasks = [
    {
        id: 'DS-045',
        title: 'Authentication Page Design',
        date: '14 Oct, 2019',
        content: 'In enim justo rhoncus ut',
        users: [
            {
                name: 'Emily Surface'
            }
        ],
        status: 'open',
        variant: 'bg-primary',
        groupId: 1
    },
    {
        id: 'DS-046',
        title: 'Create a New Landing UI',
        date: '15 Oct, 2019',
        content: 'In enim justo rhoncus ut',
        users: [
            {
                name: 'James Scott',
                profile: require('@/assets/images/users/avatar-2.jpg')
            },
            {
                name: 'Lynn Hackett'
            }
        ],
        status: 'open',
        variant: 'bg-info',
        groupId: 2
    },
    {
        id: 'DS-047',
        title: 'Authentication Page Design',
        date: '08 Mar, 2020',
        content: 'In enim justo rhoncus ut',
        users: [
            {
                name: 'Emily Surface'
            }
        ],
        status: 'open',
        variant: 'bg-danger',
        groupId: 3
    },
];

const progressTasks = [

    {
        id: 'DS-044',
        title: 'Authentication Page Design',
        date: '08 Mar, 2020',
        content: 'In enim justo rhoncus ut',
        users: [
            {
                name: 'Emily Surface'
            }
        ],
        status: 'inprogress',
        variant: 'bg-primary',
        groupId: 2
    }
];

const completedTasks = [
    {
        id: 'DS-041',
        title: 'Admin Layout Design',
        date: '08 Mar, 2020',
        content: 'At vero eos et accusamus et',
        users: [{
            name: 'James Scott',
            profile: require('@/assets/images/users/avatar-2.jpg')
        },
        {
            name: 'Lynn Hackett'
        }
        ],
        status: 'completed',
        variant: 'bg-primary',
        groupId: 3
    },
    {
        id: 'DS-042',
        title: 'Brand Logo Design',
        content: 'Nemo enim ipsam voluptatem',
        users: [
            {
                name: 'Emily Surface'
            }
        ],
        date: '07 Mar, 2020',
        status: 'completed',
        variant: 'bg-primary',
        groupId: 3
    }
];

export { upcomingTasks, progressTasks, completedTasks };

