import React, {ChangeEvent} from "react";
import styles from "./ProfileInfo.module.css";


type PropsType = {
    status: string
    updateStatus: (status: string)=> void
}

export class ProfileStatus extends React.Component<PropsType> {



    state = {
        editMode: false,
        status: this.props.status

    }

    activateEditMode = () => {

        // console.log(this.state.editMode);
        this.setState({
            editMode: true
        })
        // console.log(this.state.editMode);

    }

    deaactivateEditMode = () => {

        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} onBlur={this.deaactivateEditMode} value={this.state.status} autoFocus/>
                    </div>

                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
                    </div>
                }
            </div>
        )
    }
}
