import React from "react";
import {Link} from "react-router-dom";
import DropDownForm from "../components/DropDownForm";
import HomeButton from "../components/HomeButton";

function CreateWalk() {
    return (
        <div>
<input className="form-control form-control-lg" type="text" placeholder="Insert name of walk" />
<DropDownForm contents={["easy", "medium", "hard"]} title={"Difficulty level"}/>
<DropDownForm contents={[0.5, 1, 2, 4, 6, 8]} title={"Time to complete"}/>
<DropDownForm contents={["Cheshire", "Lake District", "Peak District", "Scotland", "Snowdonia", "Yorkshire Dales"]} title={"Region of activity"}/>
<Link to='/'>
<button type="button" className="btn btn-primary btn-lg">Add new walk to DB</button>
</Link>
<Link to='/'>
<HomeButton />
    </Link>
        </div>
    )
};

export default CreateWalk;