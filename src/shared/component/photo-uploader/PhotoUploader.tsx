import * as React from "react";


export default class PhotoUploader extends React.Component<{}> {
    render() {
        return (
            <div>
                <div className="wrapped">
                    <header>Upload and Display Image usign React Hook's</header>

                    <form action="#">
                        <input type="file" className="file-input"></input>
                        <i className="fa-solid fa-cloud-arrow-down"></i>
                        <p>Browse File to Upload</p>
                    </form>
                    <section className="progress-area">
                        <li className="row">
                            <i className="fa-solid fa-file"></i>
                            <div className="content">
                                <div className="details">
                                    <span className="name">image_name * Uploading</span>
                                    <span className="percent"> 50%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                            </div>
                        </li>
                    </section>
                    <section className="uploaded-area">
                        <li className="row">
                            <div className="content">
                                <i className="fa-solid fa-file"></i>
                                <div className="details">
                                    <span className="name">image_name * Uploaded</span>
                                    <span className="size"> 70 KB</span>
                                </div>
                            </div>
                            <i className="fa-solid fa-check"></i>
                        </li>
                    </section>
                </div>
            </div>
        );
    }
};
