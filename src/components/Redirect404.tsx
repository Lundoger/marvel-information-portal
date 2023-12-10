import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Redirect404 = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/404')
	}, [navigate])

	return null
}

export default Redirect404