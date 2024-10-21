import "./Image.css";

const Image = ({
                   src,
                   side1,
                   side2,
                   height,
                   width,
                   className
               }) => {
    return (
        <div className="image-section">
            {/* Main Image */}
            <div
                className={`main-image ${className}`}
                style={{
                    backgroundImage: `url(${src})`,  // Main image source
                    height: height,
                    width: width,
                }}
            />
            {/* Small Image 1 */}
            <div
                className="small-image-1"
                style={{
                    backgroundImage: `url(${side1})`,  // First side image source
                }}
            />
            {/* Small Image 2 */}
            <div
                className="small-image-2"
                style={{
                    backgroundImage: `url(${side2})`,  // Second side image source
                }}
            />
        </div>
    );
};

export default Image;
