import React from "react";
import styles from "./ProfileInfo.module.css";


type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
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

    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onBlur={this.deaactivateEditMode} value={this.props.status} autoFocus/>
                    </div>

                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}
