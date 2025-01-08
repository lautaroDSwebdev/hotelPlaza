export interface TypeData{
    id?: number
    url?: string
}

export interface LabelType {

    children?: React.ReactNode;
    props: LabelType
    // other props
  }


export interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface PropsType extends React.LabelHTMLAttributes<HTMLLabelElement> {}

  