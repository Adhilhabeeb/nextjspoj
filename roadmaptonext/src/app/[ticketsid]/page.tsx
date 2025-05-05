import { useEffect } from "react";
import { datas } from "../utils/data";

type ticketsproperties =
  | {
      name?: string;
      id?: number;
      description?: string;
      status?: boolean;
    }
  | number;
const tickets = (props: {
  params: {
    ticketsid: ticketsproperties;
  };
}) => {
  console.log(props.params.ticketsid);



const ticketfilter=datas.find(ticket=>ticket.id==props.params.ticketsid)
console.log(ticketfilter,"ticketfilter");

  return (
    <>
      <div>
        Ticket page hello
        {ticketfilter?.name ?? props.params.ticketsid}
      </div>
    </>
  );
};

export default tickets;
