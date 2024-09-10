import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Opppsss!!!!</h1>
      <h2>Something is wrong</h2>
      <h2>
        {error.status}:{error.statusText}
      </h2>
    </div>
  );
};

export default Error;
