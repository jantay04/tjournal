import * as yup from "yup";

export const LoginFormSchema = yup.object({
    email: yup.string().email("Неверная почта").required("Почта обьязательная"),
    password: yup.string().min(6, "Длина пароля должна быть более 6 строк").required("Пароль обьязательный"),
});
 

export const RegisterFormSchema = yup.object({
    fullname: yup.string().required("Имя и фамилия обьязательны "),
}).concat(LoginFormSchema);