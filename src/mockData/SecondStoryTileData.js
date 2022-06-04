import grass2Image from '../imageContainer/Grass 2.png';
import FoodImage from '../imageContainer/Food.png';
import FreshFoodImage from '../imageContainer/Fresh food.png';
import FastDelImage from '../imageContainer/Fast delivery.png';
import QualityMaintainImage from '../imageContainer/Quality maintain.png';
import ServiceImage from '../imageContainer/24 hour service.png';

const SecondStoryTileData = {
    image1: grass2Image,
    image2: FoodImage,
    title: "Why We Are The Best",
    eyebrowTitle: "Why choose us",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla enim posuere quis consequat. volutpar vel sagittis aptent ornare morbi, nunc laoreet sodales dictum tempor facilisis netus.",
    highlights: [{
        image: FreshFoodImage,
        title: 'Fresh Food',
    },{
        image: FastDelImage,
        title: 'Fast Delivery',
    },{
        image: QualityMaintainImage,
        title: 'Quality Maintain',
    },{
        image: ServiceImage,
        title: '24/7 Service',
    }],
}

export default SecondStoryTileData;