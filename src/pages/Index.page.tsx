import { Television } from "../components/Television";
import { render } from 'react-dom';
import Pacman from 'react-pacman';

/**
 * The Index function returns a div with the class name "homepage" and a Television component
 * @returns A div with the className of "homepage" and a Television component.
 */
function Index() {
    return (
        <div className="homepage">
            {/* <Television></Television> */}
            <>
            <Pacman />
            </>
        </div>
    );
}

export { Index }
