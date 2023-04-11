
const Input = (props) => {
    const {name, ...rest} = props;
    
    return (
       <input
        {...props}
        /> 
    )
    
}

export default Input