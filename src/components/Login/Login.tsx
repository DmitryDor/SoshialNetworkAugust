import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean

}
export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}



const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
               <Field placeholder='Login' name={'login'}  component={'input'}/>
                {/*<input placeholder='Login'/>*/}
            </div>
            <div>
                <Field placeholder='Password' name={'password'} component={'input'}/>
                {/*<input placeholder='Password'/>*/}
            </div>
            <div>
                <Field type={'checkbox'} name={' rememberMe'} component={'input'}/> remember me
                {/*<input type={'checkbox'}/> remember me*/}
            </div>
            <div>
                <button>Login</button>
                {/*<button>Login</button>*/}
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

