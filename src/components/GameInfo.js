import { useContext } from "react"
import PostsStorage from "../context/PostsStorage"
import UserContext from "../context/UserContext"

export const GameInfo = (props) => {

    const posts = useContext(PostsStorage)

    const { myName, changeMyName } = useContext(UserContext)

    console.log(posts)
    return(
        <div>
            {myName.fullName}
            {
                posts.map(element => {
                    return(<div>{element.postTitle}</div>)
                })
            }
            {props.history.map((step, index) => 
                <div>Step number: {index+1}, Square Number: {step.squareNum}, Sqare Value: {step.value} </div>
            ) }
        </div>

    )
}