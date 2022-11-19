import { Box, Select } from "@material-ui/core"
import { listTitle } from "../mockup"
import { grey } from "@material-ui/core/colors"
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

setInterval(() => {
    var date = new Date()
    var day = date.getDate()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var hour = date.getHours()
    var minute = date.getMinutes()
    var seconds = date.getSeconds()
    var timing = `${day}/${month}/${year} ${hour}:${minute}:${seconds}`
    if (document.querySelector('.time')) {
        document.querySelector('.time').innerHTML = timing
    }
}, 1000);

export default function Confirm() {
    const greybg = grey[100]
    return (
        <Box width="80%" bgcolor={greybg}>
            <Box className="content" width="85%" mx="auto" >
                <Box className="content__time&select" display="flex" justifyContent="space-between" my={5}>
                    <Box className="time">
                    </Box>
                    <Select style={{ width: "15%" }}>

                    </Select>
                </Box>

                <Box className="content__grid" mb={5}>
                    <Grid container spacing={3}>
                        {listTitle.map((item, key) => {
                            return (
                                <Grid item xs={3} key={item.id} >
                                    <Box py={2} bgcolor={item.bgColor} textAlign="center" boxShadow={5}>
                                        <Box fontSize={50}>0</Box>
                                        <Box fontSize={16}>{item.titleName}</Box>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
                <Box className="order" >
                    <Grid container spacing={2}>
                        <Grid item xs={10} className="order__box" >
                            <Box p={2} bgcolor="#ffffff" borderRadius={6}>
                                <Box className="order__box__title" >Đơn mới</Box>
                                <Box className="order__box__content">
                                    <Grid container spacing={3} >
                                        <Grid item xs={6}>
                                            <TextField fullWidth label="Điện thoại *" />
                                            <TextField fullWidth label="Sản phẩm *" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth label="Tên người nhận *" />
                                            <TextField fullWidth label="Giá trị *" />
                                        </Grid>
                                    </Grid>
                                    <TextField fullWidth label="Địa chỉ *" />
                                    <Box mt={2} className="radio__button">
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <FormControl>
                                                    <RadioGroup row
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue="female"
                                                        name="radio-buttons-group"
                                                    >
                                                        <FormControlLabel value="Miền Bắc" control={<Radio />} label="Miền bắc" />
                                                        <FormControlLabel value="Miền Nam" control={<Radio />} label="Miền Nam" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl>
                                                    <RadioGroup row
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue="female"
                                                        name="radio-buttons-group"
                                                    >
                                                        <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
                                                        <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                    <TextField fullWidth label="Địa chỉ *" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2} className="order__button">
                            <Box mb={2}>
                                <Button fullWidth variant="contained" color="success">NHẬN</Button>
                            </Box>
                            <Box mb={2}>
                                <Button fullWidth variant="contained" color="warning" >HUỶ</Button>
                            </Box>
                            <Box mb={2}>
                                <Button fullWidth variant="contained" color="error">GỌI LẠI</Button>
                            </Box>
                            <Box mb={2}>
                                <Button fullWidth variant="contained" color="primary" >VỀ SALE</Button>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </Box>
    )
}
