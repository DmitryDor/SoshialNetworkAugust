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
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalCount: number) => void

}

export class Users extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);

    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    /* getUsers = () => {
        if(this.props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }*/
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)


        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }



        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span
                            className={this.props.currentPage === p ? styles.selectedPage : ''}
                            onClick={() => this.onPageChanged(p) }

                        >{p}</span>
                    })}


                </div>
                {/*<button onClick={this.getUsers}>Get users</button>*/}
                {

                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={styles.userFhoto}/>
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

    }
}


