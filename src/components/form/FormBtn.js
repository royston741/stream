import './FormBtn.css'

function FormBtn(props){
    return <button className='form_submit_btn' onClick={props.onSubmit}>{props.children}</button>
}

export default FormBtn