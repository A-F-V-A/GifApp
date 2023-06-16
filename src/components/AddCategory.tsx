import React,{ useState } from 'react'

interface Props{
    onCategories: (value:string) => void
}

export const AddCategory = ( { onCategories }:Props) =>{

    const [ value, setValue ] = useState<string>('')

    const onInputChange = (event:React.ChangeEvent<HTMLInputElement>):void => setValue(event.target.value)

    const onSubmit = (event:React.FormEvent<HTMLFormElement>):void =>{
        event.preventDefault()
        if(value.trim().length <= 1) return
        onCategories(value.trim())
        setValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Search Gif" 
                value={value}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}