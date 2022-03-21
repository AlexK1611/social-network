import { FC, SVGProps } from 'react'

export interface IPageRoute {
    id: string,
    path: string,
    title: string,
    icon: FC<SVGProps<SVGSVGElement>>
}