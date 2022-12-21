import { yupResolver } from '@hookform/resolvers/yup';
import { Divider, Button } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { RegisterFormSchema } from '../../../utils/validations';
import FormField from '../../FormField';

type Props = {
    onOpenLogin: () => void;
    onOpenRegister: () => void;
}

function Register({ onOpenLogin, onOpenRegister }: Props) {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = (data) => console.log(data)

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField name='fullname' label='Имя и фамилия' />
                <FormField name='email' label='Почта' />
                <FormField name='password' label='Пароль' />
                <Divider className="mt-30 mb-20" />
                {/* <Button onClick={onOpenLogin} color="primary" >
                Логин
            </Button> */}
                <Button disabled={!form.formState.isValid} type='submit' color="primary" variant="contained">
                    Зарегстрироваться
                </Button>
            </form>
        </FormProvider>
    )
}

export default Register