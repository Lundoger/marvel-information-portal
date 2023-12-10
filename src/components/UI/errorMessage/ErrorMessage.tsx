import img from'./error.gif'
import './errorMessage.scss'

const ErrorMessage = () => {
	return (
		<>
			<div className="error-img">
				<img src={img} alt="error"/>
			</div>
		</>
	)
}

export default ErrorMessage