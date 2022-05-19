import style from './Button.module.css'
import PropTypes from 'prop-types';

export const Button =({buttonNames, liaveFeesback})=>{
  return (
    <div className={style.container}>
      {buttonNames.map(buttonName =>
        <button key={buttonName}
          onClick={() => liaveFeesback(buttonName)}
          className={style.button}>{buttonName}
        </button>)}
    </div>
    
    
  )
}

Button.propTypes = {
  buttonName: PropTypes.array,
  liaveFeesback: PropTypes.func,
};