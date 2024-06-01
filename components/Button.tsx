
type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: 'btn_dark_green'
}

const Button = ({ type, title, variant}: ButtonProps) => {
  return (
    <button
    className={`rounded-md border pt-1 hover:cursor-pointer ${variant}`}
        type={type}
    >
        <label className="hover:cursor-pointer">{title}</label>

    </button>
  )
}

export default Button