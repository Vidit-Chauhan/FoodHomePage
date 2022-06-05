import Header from "../components/header";
import StoryTile from "../components/StoryTile";
import StoryTileData from "../mockData/StoryTileData";
import SecondStoryTileData from "../mockData/SecondStoryTileData";
import StoryModules from "../components/StoryModules";
import StoryModulesData from "../mockData/StoryModulesData";
import ImageWrapper from "../components/ImageWrapper";
import FullWidthImageComponentData from "../mockData/FullWidthImageComponentData";
import MultiImageComponentData from "../mockData/MultiImageComponentData";

/* This component acts as a container
 for all the components coming on Homepage */
const Homepage = () => {
    return (
        <>
        <div className='TopContainer'>
            <Header />
            <StoryTile {...StoryTileData} variation="V1"/>
            <StoryModules data={StoryModulesData}/>
        </div>
        <StoryTile {...SecondStoryTileData} variation="V2"/>
        <ImageWrapper data={FullWidthImageComponentData}/>
        <ImageWrapper data={MultiImageComponentData}/>
        </>
    )
}

export default Homepage;