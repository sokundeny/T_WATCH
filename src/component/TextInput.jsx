

const TextInput = ({id, type, name, placeholder, style}) => {

    return (
        <input  className="h-12 w-full border border-[#8F8F8F] rounded-lg text-sm p-3"
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                style={style}
        />
    )
}

export default TextInput