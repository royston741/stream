import './ErrorMessage.css'

function ErrorMessage(props){
    return <p className='error_container'>{props.message}</p>
}


export default ErrorMessage