import React from "react";
import {UserType} from "../../redux/usersPage-reducer";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.png";
import {NavLink} from "react-router-dom";


export type UsersPropsType = {
    users: Array<UserType>
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
}

export let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? styles.selectedPage : ''}
                        onClick={() => props.onPageChanged(p)}

                    >{p}</span>
                })}
            </div>
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={styles.userFhoto}/>
                                         </NavLink>
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
}