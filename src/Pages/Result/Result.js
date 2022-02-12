import { Button } from "@material-ui/core";
import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import './Result.css'

const Result = ({name, score}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!name){
      navigate('/');
    }
  }, [name, navigate])


  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button variant="contained" color="secondary" size="large" style={{alignSelf: "center", marginTop: 20}}>
        <NavLink to="/dashboard">Save Your Result</NavLink>
      </Button>
    </div>
  )
}

export default Result
