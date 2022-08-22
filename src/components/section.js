import React from "react";
import Cards from "./cards.js";


function Section(props){
    return(
        //section
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Cards count={props.count} setCount={props.setCount}/>
                </div>
            </div>
        </section>
    );
}

export default Section;