import Container from '@/components/core/container'
import ProjectsHeading from '@/components/pages/projects/projects-heading'
import ProjectsList from '@/components/pages/projects/projects-list'
import React from 'react'

export default function ProjetcsPage() {
  return (
    <Container className='space-y-16'> 
      <ProjectsHeading />
      <ProjectsList />
    </Container>
  )
}
