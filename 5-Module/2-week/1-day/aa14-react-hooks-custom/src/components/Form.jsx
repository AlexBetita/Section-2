import { textInputValidators, textEmailInputValidators } from '../utils/validations';
import { useTextInput } from '../hooks/textInput'

const Form = () => {

  const [name, eventHandlerName, nameErrors] = useTextInput({
    validations: textInputValidators
  })

  const [email, eventHandlerEmail, emailErrors] = useTextInput({
    validations: textEmailInputValidators
  })

  return (
    <>
      <h1>Form Component</h1>
      <form>
        <ul>
          {nameErrors.map(err => <li key={err}>{err}</li>)}
          {emailErrors.map(err => <li key={err}>{err}</li>)}
        </ul>
        <label htmlFor="name">
          Name{" "}
          <input
            id="name"
            value={name}
            onChange={eventHandlerName}
          />
        </label>

        <label htmlFor="email">
          Email{" "}
          <input
            id="email"
            value={email}
            onChange={eventHandlerEmail}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
