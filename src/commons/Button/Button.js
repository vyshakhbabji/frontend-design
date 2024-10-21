import "./Button.css";

function Button({buttonText = "buttonText"}) {
    return (
        <button className="learnMoreButton">
            {buttonText}
        </button>
    );
}

export default Button;
