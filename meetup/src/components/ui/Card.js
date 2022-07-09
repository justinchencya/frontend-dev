import classes from './Card.module.css'

// We use the props.children parameter to make this Card component a wrapper
function Card (props) {
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Card;