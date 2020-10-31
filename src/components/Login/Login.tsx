import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreaqter, requiredField} from "../../utils/validators/validators";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean

}

const maxLength12 = maxLengthCreaqter(12)

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
               <Field placeholder='Login' name={'login'}
                      validate={[requiredField, maxLength12]}
                      component={Input}/>
                {/*<input placeholder='Login'/>*/}
            </div>
            <div>
                <Field placeholder='Password' name={'password'}
                       validate={[requiredField, maxLength12]}
                       component={Input}/>
                {/*<input placeholder='Password'/>*/}
            </div>
            <div>
                <Field type={'checkbox'} name={' rememberMe'}
                       component={Input}/> remember me
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

