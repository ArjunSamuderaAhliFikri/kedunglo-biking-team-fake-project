export function handleSearchProducts(cartProducts, query) {
    return cartProducts.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
}

export const cartProducts = [
    {
        id: 1,
        title: 'Polygon Series 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.',
        price: 12000000,
        source: '../public/img/sepeda-balap-1.jpg',
        quantity: 1,
    },
    {
        id: 2,
        title: 'Polygon XL V4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.',
        price: 17000000,
        source: '../public/img/sepeda-balap-2.jpg',
        quantity: 1,
    },
    {
        id: 3,
        title: 'AstroBike v3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.',
        price: 20000000,
        source: '../public/img/sepeda-balap-3.jpg',
        quantity: 1,
    },
    {
        id: 4,
        title: 'Aviator Limitless',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.',
        price: 18000000,
        source: '../public/img/sepeda-balap-4.png',
        quantity: 1,
    },
    {
        id: 5,
        title: 'HeroSuper Bike Polygon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.',
        price: 11000000,
        source: '../public/img/sepeda-balap-5.jpg',
        quantity: 1,
    },
    {
        id: 6,
        title: 'Aviator Mountain Version',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.',
        price: 9800000,
        source: '../public/img/sepeda-balap-6.jpg',
        quantity: 1,
    },
    {
        id: 7,
        title: 'Polygon SuperSpeed',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.',
        price: 21000000,
        source: '../public/img/sepeda-balap-8.jpg',
        quantity: 1,
    },
]