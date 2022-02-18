const products = [
    {
        id: 'redshoe',
        description: 'Old Red Shoe',
        price: 45.11,
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55.55,
    }


];

function getAllProducts() {
    return products;
}

module.exports = {
    getAllProducts,
}