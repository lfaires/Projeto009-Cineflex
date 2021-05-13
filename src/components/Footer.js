export default function Footer(props) {
    const {title, posterURL} = props
    
    return (
        <footer>
            <div>
                <img src={posterURL} alt={title + " poster"}/>
            </div>
            <p>{title}</p>
        </footer>
    )
}