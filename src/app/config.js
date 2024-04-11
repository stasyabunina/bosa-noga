const config = {
    baseUrl: process.env.REACT_APP_URL ?? 'http://localhost:7070',
    catalogUrl: '/catalog',
    aboutUrl: '/about',
    cartUrl: '/cart',
    productUrl: '/catalog/:id',
    contactsUrl: '/contacts'
}

export default config;