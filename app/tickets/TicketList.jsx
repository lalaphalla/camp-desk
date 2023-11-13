import Link from "next/link";
import React from "react"; 

export async function getTickets() { 
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`./tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
          </Link>
          <p> {ticket.body.slice(0, 200)} </p>
          <div className={`pill ${ticket.priority} `}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.lenght === 0 && <p> There are no open ticket, yay!</p>}
    </>
  );
}
