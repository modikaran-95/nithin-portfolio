
export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Singer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Shivansh';

export const experiences = [
    {
        'company': 'Merkle Science',
        'role': 'Software Development Engineer',
        'duration': 'Mar 2024 - Present',
        'logo': 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/e5gz1yggdy8sc1umna3e',
        'points': [
            'Led the revamp of Ethereum Virtual Machine (EVM) integration, enhancing performance and user experience, which resulted in a 30% increase in customer acquisition.',
            'Implemented entity search alongside address and transaction search, optimizing queries with debouncing to reduce server load and improve user engagement by 10%.',
            'Integrated session monitoring into ReactJS and VueJS codebases, enabling real-time tracking to enhance user experience and debugging efficiency.',
            'Designed custom analytics dashboards by tracking page durations and writing SQL queries on Mixpanel, helping the marketing team make data-driven decisions more efficiently.'
        ],
        'url': 'https://www.linkedin.com/company/merklescience/posts/?feedView=all',
    },
    {
        'company': 'Maidaan',
        'role': 'Full Stack Intern',
        'duration': 'Jan 2024 - Feb 2024',
        'logo': 'https://www.att.com/ecms/dam/att/consumer/global/logos/att_globe_500x500.jpg',
        'points': [
            'Built a weekly streak feature, increasing user engagement by 15% and driving a 20% boost in daily active users.',
            'Optimized the score leaderboard, improving performance by 40% through query optimization and removing redundant database listeners.',
            'Automated WhatsApp communication by integrating the Interact API, enabling 1,000+ targeted messages with a cost-effective rate-limiting strategy.'
        ],
        'url': 'https://www.linkedin.com/company/maidaan-app/',
    },
]



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
