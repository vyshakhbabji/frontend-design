import Header from "../../commons/Header/Header";
import Content from "../../commons/Content/Content";
import Button from "../../commons/Button/Button";
// import Carousel from "../Slider/Carousel";
import Slider from "../Slider/Slider";


function HeroBanner() {
    const title = "Lorem ipsum dolor sit amet, est mollis evertitur ut";
    const content =
        "Lorem ipsum dolor sit amet, est mollis evertitur ut, clita utinam quaeque ad sed, an legere concludaturque eum. Duo omnis solet dissentiet te, ea sed quis erat reprehendunt, cetero consetetur philosophia mel in.";

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "35% 45% ", // Left side 35%, Right side 45%
                gap: "100px", // Space between the two sections
                padding: "2rem", // Overall padding
            }}
        >
            {/* Left Side  */}
            <div style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                <h3 style={{textTransform: "uppercase", color: "#929a9f"}}>Lorem Ipsum Dolor</h3>
                <div style={{marginTop: "14px"}}>
                    <Header title={title}/>
                </div>
                <div style={{marginTop: "10px"}}>
                    <Content content={content}/>
                </div>
                <div style={{marginTop: "25px"}}>
                    <Button buttonText={"Learn More >"}/>
                </div>
            </div>

            {/* Right Side */}
            <div style={{display: "flex", justifyContent: "center"}}>
                {/*<Carousel/>*/}
                <Slider/>
            </div>

        </div>
    );
}

export default HeroBanner;
