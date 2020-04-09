import React from "react";
import {Link} from "react-router-dom";
import DropDownForm from "../components/DropDownForm";

function SelectWalk() {
    return (
        <div>
<DropDownForm contents={["easy", "medium", "hard"]} title={"Difficulty level"}/>
<DropDownForm contents={[0.5, 1, 2, 4, 6, 8]} title={"Time to complete"}/>
<DropDownForm contents={["Cheshire", "Lake District", "Peak District", "Scotland", "Snowdonia", "Yorkshire Dales"]} title={"Region of activity"}/>

        </div>
    )
};



export default SelectWalk;