import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();

  let errorMessage: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let errorData: any; // Or a more specific type if you know the structure

  if (isRouteErrorResponse(error)) {
    // This is a thrown Response object from a loader or action
    errorMessage = error.statusText || error.status.toString();
    errorData = error.data; // Access the data property
  } else if (error instanceof Error) {
    // This is a generic JavaScript Error object
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    // This is a plain string error
    errorMessage = error;
  } else {
    // Fallback for any other unknown error type
    errorMessage = 'An unexpected error occurred.';
  }
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {/* <p>{error.data || error.message}</p> */}
      <p>{errorData || errorMessage}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
      
    </div>
  );
}

export default NotFound;
