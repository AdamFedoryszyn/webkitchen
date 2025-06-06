import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import ImagePlaceholder from "@/public/Jeremy Bentham.jpg"
import Form from "next/form"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function ProjectsItem() {
  return (
    <li className='space-y-4'>
                <Card className='py-0'>
                    <Image 
                    src={ImagePlaceholder} 
                    alt='placeholder Image'/>
                </Card>
                <Form action="/projects" className='relative'>
                        <Input id='project-title' className='peer text-xs' placeholder='Project Title'/>
                        <Label htmlFor='project-title' className='peer-placeholder-shown:sr-only text-xs absolute -top-2 left-2 bg-background px-1'>Project Title</Label>
                    </Form>
            </li>
  )
}
