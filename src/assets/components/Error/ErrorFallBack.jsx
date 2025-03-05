

export const ErrorFallBack = ({ error, resetErrorBoundary}) => {
    return (
       <div role="alert">
        <h3>Algo salió mal</h3>
        <p>{error.mesage}</p>
        <button onClick={resetErrorBoundary}>Intentar nuevamente</button>
       </div> 
    )
}