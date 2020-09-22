import React from 'react'
import {UserType} from "../../redux/usersPage-reducer";
import styles from "./users.module.css"
import axios from 'axios';
import userPhoto from '../../assets/images/users.png'

type PropsType = {
    users: Array<UserType>
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void

}

export class Users extends React.Component<PropsType>{
constructor(props: PropsType) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
    })
}

    /* getUsers = () => {
        if(this.props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }*/
    render () {
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get users</button>*/}
                {

                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userFhoto}/>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
                                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                                    }

                                </div>
                            </span>
                                <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>'{'u.location.country'}'</div>
                                    <div>'{'u.location.city'}'</div>
                                </span>
                            </span>
                            </div>
                        )
                    })
                }

            </div>

        )

    }}


