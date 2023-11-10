interface FormInputProps {
  inputName: string;
  inputId: string;
  inputType: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <form className="flex flex-col gap-y-2">
      <label htmlFor="name" className="text-white">
        <span>{props.inputName}</span>
      </label>
      <input
        type={props.inputType}
        name={props.inputId}
        id={props.inputId}
        className="input bg-neutral-800 text-white w-80"
      />
    </form>
  );
};

export default FormInput;
