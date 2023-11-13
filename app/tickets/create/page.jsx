import React from 'react'
import CreateForm from './CreateForm'

export default async function CreateTicket() {
  return (
    <main>
        <h2 className='text-primary text'>Add New Ticket</h2>
        <CreateForm />
    </main>
  )
}
