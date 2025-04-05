

const Button = ({ onClick, style, children }) => {

    return(
        <button className="px-4 py-2 bg-black text-white rounded-md transition duration-200 w-auto"
                onClick={onClick}
                style={style} // Aditional Style    
        >
            {children}
        </button>
    )
}

export default Button