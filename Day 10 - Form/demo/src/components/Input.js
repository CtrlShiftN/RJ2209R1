export const Input = (props) => {
    return (
        <div className="input-field">
            <p className="mb-0">{props.label}</p>
            <input className="mb-2" pattern={props.pattern} name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
            <br />
            {
                props.error ? <div className="error-block"><span className="text-danger" >{props.error}</span> </div> : ""
            }
        </div>
    )
}