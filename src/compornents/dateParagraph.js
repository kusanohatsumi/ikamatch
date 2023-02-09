import { format } from "date-fns"
import { useEffect, useState } from "react";

const DateParagraph = ({time}) => {
    const [formatTime, setFormatTime] = useState("")
    useEffect(() => {
        if (time.seconds) {
            const toDate = time.toDate()
            const formattedDate = format(toDate, "MM/dd HH:mm")
            setFormatTime(() => formattedDate)
        } else {
            // do nothing
        }
    },[time])
    return (
        <p>開催日：{time.seconds ? formatTime : time}</p>
    )
}

export default DateParagraph