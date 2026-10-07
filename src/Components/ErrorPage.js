import { useRouteError } from "react-router"

const ErrorPage = ()=>{

    const err = useRouteError();
    return <div>
        <div className="contact-us" >
             {err.status} Error : {err.error.message}
           
        </div>
     
    </div>
}

export default ErrorPage