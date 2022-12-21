import { TextField } from '@material-ui/core'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
    name: string;
    label: string;
}

function FormField({name, label}: Props) {
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
            />
        </>
    )
}

export default FormField