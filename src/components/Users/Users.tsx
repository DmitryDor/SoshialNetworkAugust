import React from 'react'
import {UserType} from "../../redux/usersPage-reducer";
import styles from "./users.module.css"

type PropsType = {
    users: Array<UserType>
    follow: (id: string) => void
    unFollow: (id: string) => void
     // setUsers: (users: UserType) => void

}

export let Users = (props: PropsType) => {
   /* if(props.users.length === 0){
       props.setUsers( )
    }*/


    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photoURL} className={styles.userFhoto}/>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                                            : <button onClick={() => props.follow(u.id)}>Follow</button>
                                    }

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }

        </div>

    )
}


