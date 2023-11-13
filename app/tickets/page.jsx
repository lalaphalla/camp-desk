"use client"
import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import { useRouter } from "next/navigation";

export default function Tickets() {
  const router = useRouter()
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>currently open ticket</small>
          </p>
          <button onClick={()=> router.push('./tickets/create')}>Create Ticket</button>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
