import getRandomArray from "../utils/getRandomArray";
import quotes from '../utils/quotes.json'

const Button = ({setPhrase, setnumBackg}) => {

    const handleClick = () =>  {
    const newPhrase =getRandomArray(quotes);
    setPhrase(newPhrase);
    setnumBackg(getRandomArray([1, 2, 3, 4]))

    }
return (
    <button className="btn" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h4>New Phrase</h4> 
    </button>
)
}

export default Button