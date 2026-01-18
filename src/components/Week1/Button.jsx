import './Button.css';

const Button = ({ type, children, onClick }) => {
    const className = `btn btn-${type}`;

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;