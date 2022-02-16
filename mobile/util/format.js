import dayjs from "dayjs";

const format=(date)=>{
    return dayjs(date).format("MMM DD HH:MM")
}


export default format
