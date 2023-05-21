import { Context } from "../context/context";
import { useContext } from "react";

export function OutraCoisa() {
    const { data } = useContext(Context);

    return(
        <div>oi</div>
    )
}