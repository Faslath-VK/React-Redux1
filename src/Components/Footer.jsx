import { useSelector } from "react-redux"


const Footer = ()=>{
  const color = useSelector(state => state.color.value)
    return(
        <div className="footer">
           <h4 style={{color}}>This is the footer</h4>
        </div>
    )
}
export default Footer