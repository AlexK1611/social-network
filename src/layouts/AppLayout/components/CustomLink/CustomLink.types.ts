import { FC, SVGProps } from 'react' 

export interface ICustomLink {
    path: string,
    title: string,
    icon: FC<SVGProps<SVGSVGElement>>
}