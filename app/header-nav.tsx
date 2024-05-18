'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { capitalizeFirstLetter } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import React from 'react'

function HeaderNav() {
    const pathname = usePathname()

    const BreadcrumHome = () => {
        return (
            <>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
            </>
        )
    }

    return (
        <Breadcrumb className='my-4'>
            <BreadcrumbList>
                <BreadcrumHome />
                {pathname.split('/').map((part, index, parts) => {

                    const link = parts.slice(0, index + 1).join('/')
                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={link}>{capitalizeFirstLetter(part)}</BreadcrumbLink>
                            </BreadcrumbItem>
                            {index < parts.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default HeaderNav