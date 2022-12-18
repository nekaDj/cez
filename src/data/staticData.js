export const menuData = [
    {
        id:1,
        name: "Accueil",
        link: "/",
        isActive: true,
        isSubMenuActive: false,
        subMenu: []
    },
    {
        id:2,
        name: "Notre cabinet",
        link: "/company",
        isActive: false,
        isSubMenuActive: false,
        subMenu: []
    },
    {
        id:3,
        name: "Vision et garanties",
        link: "/mission",
        isActive: false,
        isSubMenuActive: false,
        subMenu: []
    },
    {
        id:4,
        name: "Métiers",
        link: "/profession",
        isActive: false,
        isSubMenuActive: false,
        subMenu: [
            {
                idSubMenu:1,
                name:"Expertise comptable",
                choosed: true,
                link: "/profession/expertise",
            },
            {
                idSubMenu:2,
                name:"Audit",
                choosed: false,
                link: "/profession/audit",
            },
            {
                idSubMenu:3,
                name:"Conseils",
                choosed: false,
                link: "/profession/advisory",
            }
        ]
    },
    {
        id:5,
        name: "Références",
        link: "/reference",
        isActive: false,
        isSubMenuActive: false,
        subMenu: []
    },
    {
        id:6,
        name: "Contact",
        link: "/contact",
        isActive: false,
        isSubMenuActive: false,
        subMenu: []
    }
]

export const profession = [
            {
                id:1,
                name:"Expertise comptable",
                choosed: true,
            },
            {
                id:2,
                name:"Audit",
                choosed: false,
            },
            {
                id:3,
                name:"Conseils",
                choosed: false,
            }
        ]




export const overlayImageData = [
    {
        id:1,
        image: "home_1.jpg",
    },
    {
        id:1,
        image: "home_2.jpg",
    }
]


export const paths = {
        imageFolder: "../images/",
    }