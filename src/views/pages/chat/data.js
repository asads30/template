const chatData = [
    {
        id: 1,
        profile: require('@/assets/images/users/avatar-2.jpg'),
        name: 'Daniel Pickering',
        message: 'Hey! there I\'m available',
        time: '05 min',
        color: 'secondary'  
    },
    {
        id: 2,
        profile: require('@/assets/images/users/avatar-3.jpg'),
        name: 'Adam Miller',
        message: 'I\'ve finished it! See you so',
        time: '12 min',
        color: 'success'
    },
    {
        id: 3,
        name: 'Keith Gonzales',
        message: 'This theme is awesome!',
        time: '24 min',
        color: 'success'
    },
    {
        id: 4,
        profile: require('@/assets/images/users/avatar-4.jpg'),
        name: 'Jose Vickery',
        message: 'Nice to meet you',
        time: '1 hr',
        color: 'warning'
    },
    {
        id: 5,
        name: 'Mitchel Givens',
        message: 'Hey! there I\'m available',
        time: '3 hrs',
        color: 'secondary'
    },
    {
        id: 6,
        profile: require('@/assets/images/users/avatar-4.jpg'),
        name: 'Stephen Hadley',
        message: 'I\'ve finished it! See you so',
        time: '5 hrs',
        color: 'success'
    },
    {
        id: 7,
        profile: require('@/assets/images/users/avatar-2.jpg'),
        name: 'Leord Joseph',
        message: 'This theme is awesome!',
        time: '24 min',
        color: 'success'
    },
    {
        id: 8,
        name: 'Robert Perez',
        message: 'Thanks',
        time: 'yesterday',
        color: 'success'
    },
    {
        id: 9,
        name: 'Mary Welch',
        message: 'This theme is awesome!',
        time: 'yesterday',
        color: 'success'
    },
];

const chatMessagesData = [
    {
        name: 'Daniel Pickering',
        profile: require('@/assets/images/users/avatar-2.jpg'),
        message: 'Hello!',
        time: '10:00'
    },
    {
        align: 'right',
        profile: require('@/assets/images/users/avatar-1.jpg'),
        name: 'Kate',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        name: 'Daniel Pickering',
        profile: require('@/assets/images/users/avatar-2.jpg'),
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        name: 'Daniel Pickering',
        profile: require('@/assets/images/users/avatar-2.jpg'),
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        align: 'right',
        profile: require('@/assets/images/users/avatar-1.jpg'),
        name: 'Kate',
        message: 'Wow that\'s great',
        time: '10:07'
    }
];

export { chatData, chatMessagesData };