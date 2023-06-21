import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


/**
* @param {string[]} routes Routes to display
*/
export default function IProute({ routes }) {
    return (
        <div>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                color=""
                aria-label="breadcrumb"
            >
                {routes.map((route, index, routes) => {
                    return (
                        <Link
                            key={route}
                            underline="hover"
                            color={index === routes.length - 1 ? "text.primary" : "inherit"}
                        >
                            {route}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </div >
    );
}