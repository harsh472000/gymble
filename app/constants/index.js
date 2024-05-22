import building_line from '../assets/building_line.svg';
import mail_line from '../assets/mail_line.svg';
import phone_line from '../assets/phone_line.svg';
import white_instagram from '../assets/white_instagram.svg';
import white_telegram from '../assets/white_telegram.svg';
import white_whatsapp from '../assets/white_whatsapp.svg';
import racket from '../assets/racket.jpg';
import yoga from '../assets/yoga.png';
import baseball from '../assets/baseball.png';

export const NAVLINKS= [
    {href:'/',key:'beome_bussiness',label:'BECOME A BUSSINESS'},
    {href:'/',key:'menu',label:'MENU'}
]

export const PROFILE_INFO = [
    {icon:mail_line, label:"GYMBLE@gmail.com", alt:'mail_icon' },
    {icon:phone_line, label:"(01) 684 0124", alt:'phone_icon' },
    {icon:building_line, label:"NY Castle of United States", alt:'building_icon' },
]

export const IMP_LINKS = [
    {href: '/', label: 'About Us'},
    {href: '/', label: 'View All Deals'},
    {href: '/', label: 'Blog'},
    {href: '/', label: 'Careers'},
    {href: '/', label: 'Privacy Policy'},
]

export const BUSSINESS_OWNER = [
    {href: '/', label: 'Product Overview'},
    {href: '/', label: 'Demo'},
    {href: '/', label: 'Support'},
]

export const FOOTER_SOCIAL_ICONS= [
    {href: '/', icon:white_instagram},
    {href: '/', icon:white_telegram},
    {href: '/', icon:white_whatsapp}
]

export const MEMBERSHIP_PLANS = [
    {
        title: "BASIC",
        price: "49",
        description: "The Gymble Membership Plan offers a comprehensive subscription for businesses looking to enhance their operations and access exclusive features.",
        features: [
            "Access to Admin Panel and Business Dashboard",
            "Website integration for online bookings",
            "Client management tools",
            "Basic financial tracking capabilities"
        ],
        buttonLabel: "JOIN NOW",
        buttonLink: "/join-basic"
    },
    {
        title: "PREMIUM",
        price: "70",
        description: "The Gymble Membership Plan offers a comprehensive subscription for businesses looking to enhance their operations and access exclusive features.",
        features: [
            "All features of the Basic Plan and Premium Plan",
            "Enhanced reporting and analytics tools",
            "Customizable user dashboard for clients",
            "Team management capabilities"
        ],
        buttonLabel: "JOIN NOW",
        buttonLink: "/join-premium",
        mostPopular: true
    },
    {
        title: "MASTER",
        price: "120",
        description: "The Master Plan offers an extensive suite of tools designed for businesses aiming to significantly scale their operations and marketing efforts.",
        features: [
            "All features of the Basic Plan and Premium Plan",
            "Advanced marketing tools",
            "Priority customer support",
            "Extended data storage and backup options"
        ],
        buttonLabel: "JOIN NOW",
        buttonLink: "/join-master"
    },
    {
        title: "ULTIMATE",
        price: "180",
        description: "The Ultimate Plan is designed for businesses that demand the highest level of features and support.",
        features: [
            "All features of the Basic Plan, Premium Plan and Master Plan",
            "Advanced AI-driven analytics and insights",
            "Full-featured CRM integration",
            "Unlimited user accounts and permissions"
        ],
        buttonLabel: "JOIN NOW",
        buttonLink: "/join-ultimate"
    }
];

export const TRAINING_SESSIONS = [
    {
        title: "Train Like a Pro",
        location: "Long Island, NY",
        rating: 4.9,
        reviews: 120,
        price: "$100/person, $450/package",
        duration: "5 hours",
        image: racket
    },
    {
        title: "Rooftop Yoga",
        location: "Newark, NJ",
        rating: 4.9,
        reviews: 65,
        price: "$25/person, $120/package",
        duration: "1 hour",
        image: yoga
    },
    {
        title: "1:1 Baseball Training",
        location: "Charlotte, NC",
        rating: 4.9,
        reviews: 65,
        price: "$50/person, $300/package",
        duration: "1 hour",
        image: baseball
    },
    {
        title: "Train Like a Pro",
        location: "Long Island, NY",
        rating: 4.9,
        reviews: 120,
        price: "$100/person, $450/package",
        duration: "5 hours",
        image: racket
    }
];
