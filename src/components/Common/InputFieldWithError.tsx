type InputFieldWithErrorProps = {
  labelValue: string;
  htmlFor: string;
  showError: boolean;
  errorMessage: string;
  placeholder: string;
  type: string;
  required: boolean;
};
const InputFieldWithError = ({
  labelValue,
  htmlFor,
  showError,
  errorMessage,
  placeholder,
  required,
  type,
}: InputFieldWithErrorProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className="text-base font-medium pb-3 block">
        {labelValue}{" "}
        <span className={`text-[red] ${required ? "inline" : "hidden"}`}>
          *
        </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-[10px] placeholder:text-black pl-3 placeholder:text-sm rounded shadow-sm focus:outline-none"
        id={htmlFor}
      />
      <p
        className={`text-xs text-[red] pt-[2px] pb-3 ${
          showError ? "opacity-100" : "opacity-0"
        }`}
      >
        {errorMessage}
      </p>
    </>
  );
};

export default InputFieldWithError;
