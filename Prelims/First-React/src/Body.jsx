import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <div className="person">
            <img src="https://placeholder.pics/svg/150x150" alt="person-logo" className="person-picture" />


            <p>This is <strong>{props.name}'s</strong> favorite food:</p>
            <p>{(props.food).toUpperCase()}</p>
            <p>Is it Healthy? {props.isHealthy? "yes":"no"}</p>
            <p><strong>{props.name}</strong> is {props.age} years old!</p>
        </div>

    )
    
}
Body.defaultProps = {
    name: "Jun",
    food: "Pizza",
    isHealthy: false,
    age: 38
}
Body.PropTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealthy: PropTypes.bool,
    age: PropTypes.number
}

