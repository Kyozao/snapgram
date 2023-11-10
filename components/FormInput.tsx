interface FormInputProps {
  inputName: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <form className="flex flex-col gap-y-2">
      <label htmlFor="name" className="text-white">
        <span>{props.inputName}</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="input bg-neutral-800 text-white"
      />
    </form>
  );
};

export default FormInput;
