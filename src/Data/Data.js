import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"

// Siderbar Data
export const SidebarData = [
    {
        iconClass: "uil uil-estate",
        heading: "Dashboard"
    },
    {
        iconClass: "uil uil-clipboard-alt",
        heading: "Orders"
    },
    {
        iconClass: "uil uil-users-alt",
        heading: "Customers"
    },
    {
        iconClass: "uil uil-package",
        heading: "Products"
    },
    {
        iconClass: "uil uil-chart",
        heading: "Analytics"
    }
]

// Cards Data
export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        icon: "uil uil-usd-square",
        series: [
            {
                name: "Sales",
                data: [31,40,28,51,42,109,100]
            }
        ]
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        icon: "uil uil-money-withdrawal",
        series: [
            {
                name: "Revenue",
                data: [10,100,50,70,80,30,40]
            }
        ]
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        icon: "uil uil-clipboard-alt",
        series: [
            {
                name: "Expenses",
                data: [10,25,15,30,12,15,20]
            }
        ]
    },
]

// Updates Data
export const UpdatesData = [
    {
        img: img1,
        name: "Larry Fink",
        order: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago"
    },
    {
        img: img2,
        name: "Thomas Shelbi",
        order: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago"
    },
    {
        img: img3,
        name: "Steve Jobs",
        order: "has ordered Apple smart watch, Samsung Gear 2500mh battery.",
        time: "2 hours ago"
    }
]