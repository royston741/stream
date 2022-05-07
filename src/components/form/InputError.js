import './InputError.css'

function InputError(props){
    return <p className="error_message">{props.message}</p>
}

export default InputError