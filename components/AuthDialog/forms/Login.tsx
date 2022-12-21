import Divider from '@material-ui/core/Divider/Divider'
import Button from '@mui/material/Button/Button'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import FormField from '../../FormField'
import { LoginFormSchema } from '../../../utils/validations'

type Props = {
    onOpenRegister: () => void
}

function Login({ onOpenRegister }: Props) {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema)
    });
    const onSubmit = data => console.log(data);


    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                    <Divider className="mt-30 mb-20" />
                    <Button onClick={onOpenRegister} color="primary" >
                        Регистрация
                    </Button>
                    <Button disabled={!form.formState.isValid} type='submit' color="primary" variant="contained">
                        Войти
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}

export default Login