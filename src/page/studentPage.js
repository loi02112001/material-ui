import { Box } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/sidebar";

export default function StudentPage() {
    return (
        <Box display="flex" width="100%" >
                    <Sidebar ></Sidebar>
                    <Outlet></Outlet>
                    
        </Box>
    )
}