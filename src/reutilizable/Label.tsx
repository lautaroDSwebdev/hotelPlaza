import { LabelType } from '@/types/tipos'
import React from 'react'
interface PropsType extends React.LabelHTMLAttributes<HTMLLabelElement> { }

export const LabelReusable = ({ children, ...props }: PropsType) => {
    return (
        <div className=''>

            <label className='bg-red-600 h-3 w-2 ' {...props} >{children}</label>
        </div>
    )
}
