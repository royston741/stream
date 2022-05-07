import './ProfileWrapper.css'

function ProfileWrapper(props){
    return <li className='profile_wrapper'>{props.children}</li>
}

export default ProfileWrapper