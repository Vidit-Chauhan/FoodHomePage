import pizza1Image from '../imageContainer/pizza 1.png';
import pizza2Image from '../imageContainer/pizza 2.png';
import pizzaIconImage from '../imageContainer/pizza.png';
import friesIconImage from '../imageContainer/fries.png';
import burgerIconImage from '../imageContainer/burgerrr.png';
import softDrinkIconImage from '../imageContainer/soft drinks.png';
import cupCakeIconImage from '../imageContainer/cupcake.png';

const CategoriesData = {
    title: "Delicious Deals For Delicious Meals",
    eyebrowTitle: "Our Menu",
    categories: [
        {
        image: pizzaIconImage,
        title: 'Pizza',
        items: [{
            image: pizza1Image,
            name: 'Japaniz Pizza',
            price: 8.22,
        },
        {
            image: pizza2Image,
            name: 'Italian Pizza',
            price: 7.22,
        },
        {
            image: pizza1Image,
            name: 'Margaritta Pizza',
            price: 5.22,
        },
        {
            image: pizza2Image,
            name: 'FarmHouse',
            price: 9.22,
        }]
        },
        {
        image: friesIconImage,
        title: 'French fries',
        items: [{
            image: pizza1Image,
            name: 'Cheesy French fries',
            price: 3.68,
        },{
            image: pizza2Image,
            name: 'Normal fries',
            price: 2.68,
        },{
            image: pizza1Image,
            name: 'Schezwan French fries',
            price: 4.68,
        }]
        },
        {
        image: burgerIconImage,
        title: 'Burger',
        items: [{
            image: pizza1Image,
            name: 'Burger Type 1',
            price: 3.68,
        },{
            image: pizza2Image,
            name: 'Burger Type 2',
            price: 2.68,
        },{
            image: pizza1Image,
            name: 'Burger Type 3',
            price: 4.68,
        }]
        },
        {
        image: softDrinkIconImage,
        title: 'Soft Drinks',
        items: [{
            image: pizza1Image,
            name: 'Cheesy French fries',
            price: 3.68,
        },{
            image: pizza2Image,
            name: 'Normal fries',
            price: 2.68,
        },{
            image: pizza1Image,
            name: 'Schezwan French fries',
            price: 4.68,
        }]
        }
        ,{
        image: cupCakeIconImage,
        title: 'Cupcake',
        items: [{
            image: pizza1Image,
            name: 'Cheesy French fries',
            price: 3.68,
        },{
            image: pizza2Image,
            name: 'Normal fries',
            price: 2.68,
        },{
            image: pizza1Image,
            name: 'Schezwan French fries',
            price: 4.68,
        }]
    },{
        image: pizzaIconImage,
        title: 'Abc',
        items: [{
            image: pizza1Image,
            name: 'Cheesy French fries',
            price: 3.68,
        },{
            image: pizza2Image,
            name: 'Normal fries',
            price: 2.68,
        },{
            image: pizza1Image,
            name: 'Schezwan French fries',
            price: 4.68,
        }]
    },{
        image: friesIconImage,
        title: 'Pqr',
        items: [{
            image: '',
            name: 'Cheesy French fries',
            price: 3.68,
        },{
            image: '',
            name: 'Normal fries',
            price: 2.68,
        },{
            image: '',
            name: 'Schezwan French fries',
            price: 4.68,
        }]
    },{
        image: burgerIconImage,
        title: 'Xyz',
        items: [{
            image: '',
            name: 'Cheesy French fries',
            price: 3.68,
        },{
            image: '',
            name: 'Normal French fries',
            price: 2.68,
        },{
            image: '',
            name: 'Schezwan French fries',
            price: 4.68,
        }]
    },{
        image: softDrinkIconImage,
        title: 'Mno',
        items: [{
            image: '',
            name: 'Cheesy French fries',
            price: 3.68,
        },{
            image: '',
            name: 'Normal fries',
            price: 2.68,
        },{
            image: '',
            name: 'Schezwan French fries',
            price: 4.68,
        }]
    }],
}

export default CategoriesData;