import { TextField } from '@material-ui/core'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
    name: string;
    label: string;
    password? : boolean
}

function FormField({name, label, password}: Props) {
    const {register, formState} = useFormContext()
    return (
        <>
            <TextField
                {...register(name)}
                name={name}
                className="mb-20"
                size="small"
                label={label}
                variant="outlined"
                error={!!formState.errors[name]?.message}
                helperText={formState.errors[name]?.message}
                fullWidth
                type={password && 'password'}
            />
        </>
    )
}

export default FormField