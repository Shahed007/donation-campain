import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="h-screen flex justify-center flex-col gap-6 items-center text-center">

     <p className="text-medium text-3xl text-gray-800">Oops!</p>
      <p className="text-medium text-5xl text-gray-800">404  Page not found</p>
      <p className="text-2xl font-medium text-gray-700">
      <i>{error.statusText || error.message}</i>
      </p>
    </section>
  )
}

export default ErrorPage