
import { Link } from "react-router-dom";


const PageHeaderFour = ({title, curPage}) => {
    return (
        <div className="pageheader-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pageheader-content text-center">
                            <h2>{title}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    {/* <li className="breadcrumb-item"><Link to="/">Home</Link></li> */}
                                    <li className="breadcrumb-item active" aria-current="page">{curPage}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
                <img src="https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62fe46bcba56f1a5e04fd3eb_TeamPhoto_Newton%20School2.jpg" alt="" />
        </div>
    );
}
 
export default PageHeaderFour;