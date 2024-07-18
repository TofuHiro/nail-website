import { Link } from "react-router-dom"

const NotFound = () => {
	return <div className="py-[32vh] px-[24vw]">
		<h1 className="text-5xl text-header">
			ERROR 404
		</h1>
		<br/>
		<p className="text-lg text-primary">
			Sorry, the page you are looking for cannot be found.
		</p>
		<br/>
		<Link to="/">
			<button className="button-primary"
				onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}>
				Back To Home
			</button>
		</Link>
	</div>
}

export default NotFound