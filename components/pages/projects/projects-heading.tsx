import React from 'react'
import { Button } from '@/components/ui/button'

export default function ProjectsHeading() {
  return (
    <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl mb-2 font-semibold'>Projects</h1>
          <p>Manage all your projects in your account</p>
        </div>
          <Button>Create new project</Button>
      </div>
  )
}
