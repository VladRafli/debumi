import { Link } from "react-router-dom";

/**
 * Return Custom Button Element
 * 
 * **Properties**
 * 
 * *type* -> **Required**:
 * - link
 * - button
 * 
 * *color* -> **Required**:
 * - primary
 * - white
 * - black
 * 
 * **Returns**
 * 
 * - Anchor Element <a>
 * - Button Element <button>
 * 
 * @param {Object} props 
 */
export default function Button(props) {
    if (props.type === "link") {
        switch (props.color) {
            case "primary":
                return (
                    <Link to={props.href} className="button button_primary">
                        {props.children}
                    </Link>
                );
            case "white":
                return (
                    <Link to={props.href} className="button button_white">
                        {props.children}
                    </Link>
                );
            case "black":
                return (
                    <Link to={props.href} className="button button_black">
                        {props.children}
                    </Link>
                );
            default:
                return (
                    <Link to={props.href} className="button">
                        {props.children}
                    </Link>
                );
        }
    } else if (props.type === "button") {
        switch (props.color) {
            case "primary":
                return (
                    <button type="submit" className="button button_primary">
                        {props.children}
                    </button>
                );
            case "white":
                return (
                    <button type="submit" className="button button_white">
                        {props.children}
                    </button>
                );
            case "black":
                return (
                    <button type="submit" className="button button_black">
                        {props.children}
                    </button>
                );
            default:
                return (
                    <button type="submit" className="button">
                        {props.children}
                    </button>
                );
        }
    } else {
        return (
            <>
            </>
        )
    }
}
