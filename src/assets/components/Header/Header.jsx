import "./Header.css"

export const Header = ({ title, subtitle, color }) => {
    return (

        <header className={color}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}