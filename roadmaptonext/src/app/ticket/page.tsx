import Link from "next/link";
import { datas } from "../utils/data";

import Ticketstyle from "./ticket.module.css"
import clsx from "clsx";
const  Ticketpage=()=>{


    return (
        <>    
        {
            datas.map(tickets=>{
const str=JSON.stringify(tickets)
           return    ( <div className={clsx({

            [Ticketstyle.complete]:tickets.status=="complete",
            [Ticketstyle.progress]:tickets.status=="inprogress",
            [Ticketstyle.pending]:tickets.status=="pending",

           })} key={tickets.id}>


                    <h1>Ticket page hello   {tickets.name}</h1>
                    <p>Ticket id is {tickets.id}</p>
                    <p>Ticket description is {tickets.description}</p>
                    <p>Ticket status is {tickets.status ? "true" : "false"}</p>
                  <div  style={{display:"flex"}}>
                  <p>view Ticket ---</p> 
                <Link  href={`${tickets.id}`} >
                view tiucket {tickets.id}
                
                </Link> 
                  </div>
                </div>)
            }
            )
        }
      </>
    )
}

export default Ticketpage;