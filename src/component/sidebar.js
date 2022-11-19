import { Box } from "@material-ui/core"
import {  grey } from "@material-ui/core/colors"
import { listMenu } from "../mockup";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";


export default function SideBarComponent() {

    const menuColor = grey[50]
    const lisceneColor = grey[300]
    return (
        <Box /*sx={{ display: { xs: 'none', sm: 'block' } }}*/  width="20%" className="header" bgcolor="#151534" >
            
            <Box className="header__avatar" borderColor="#fafafa" borderBottom={1} >
                <Box className="header__avatar__img" width="40%" mx="auto" mt={4}>
                    <Box width="100%" component="img" src="https://1.bp.blogspot.com/--cwALLkjCmE/YGLZYq7VqvI/AAAAAAAArCw/4uWXNg5iBYQsblpvSO2UDHEG5NF4RYWtgCNcBGAsYHQ/s0/2d27fefccf755efa36a6ba7c9c8ff5db.jpeg"></Box>
                </Box>
                <Box mt={1}  color={menuColor} fontSize={16} textAlign="center">Diep</Box>
                <Box mb={3} color={menuColor} fontWeight="fontWeightBold" textAlign="center">Executor</Box>


            </Box>

            <Box className="header__menu">
                {listMenu.map((item, key) => {
                    return (
                            <Link key={item.id} style={{ textDecoration: 'none' }} to={item.path} 
                                onClick={() => {
                                    for (let i = 0; i < listMenu.length; i++) {
                                        document.querySelector(`.Menu${listMenu[i].id}`).removeAttribute("style", "background-color: black")
                                    }
                                    document.querySelector(`.Menu${item.id}`).setAttribute("style", "background-color: #fafafa;color:black")
                                }}><Box  className={`Menu${item.id}`} pl={3} py={1.6} fontSize={14} color={menuColor}>{item.menuName}</Box></Link>
                    )
                })}

                <Box ml={3} mt={2} color={menuColor} display="flex">
                    <ExitToAppIcon fontSize="small"></ExitToAppIcon>
                    <Box fontSize={14}>Đăng xuất</Box>
                </Box>
            </Box>
            <Box mt={5} className="header__liscene" fontSize={10} textAlign="center" color={lisceneColor}>Copyright 2022 Eledevo Software</Box>
            
        </Box>

    )
}
