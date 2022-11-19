import React from "react";
import {
    Route,
    Routes
} from "react-router-dom";

import Confirm from "../component/confirm";
import History from "../component/history";
import List from "../component/list";
import Result from "../component/result";
import Salary from "../component/salary";
import Search from "../component/search";


import * as pages from '../page'
export default function Authen() {
    return (
        <div>
            <Routes>

                <Route path="/" element={<pages.StudentPage></pages.StudentPage>} >

                    <Route path="/confirm" element={<Confirm></Confirm>} />
                    <Route path="/history" element={<History />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/salary" element={<Salary />} />
                    <Route path="/search" element={<Search />} />

                </Route>

            </Routes>
        </div>
    );
}
