const Home = (props) => {
    return <>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, earum.</p>
        <p>Provident modi iure incidunt cupiditate non vero, nihil nobis iste.</p>
        <p>Omnis numquam nemo distinctio esse voluptatibus commodi soluta fugit optio.</p>

        <p>Hello {props.user}</p>
        <p>Your lucky number is {props.luckyNumber}</p>
    </>
}

export default Home