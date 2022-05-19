import { Message } from '../Message'
import style from './Statistics.module.css'
import PropTypes from 'prop-types';


export const Statistics = ({
  good,
  neutral,
  bad,
  totalSumFeedback,
  totalPositiveFeedback,
}) => {
  return (
    <>
      {totalSumFeedback() > 0 ? (
        <div>
          <p className={style.text}>Good: {good}</p>
          <p className={style.text}>Neutral: {neutral}</p>
          <p className={style.text}>Bad: {bad}</p>
          <p className={style.text}>Total: {totalSumFeedback()}</p>
          <p className={style.text}>
            Positive feedbacks: {totalPositiveFeedback(totalSumFeedback())} %
          </p>
        </div>
      ) : (
        <Message/>
      )}
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalSumFeedback: PropTypes.func,
  totalPositiveFeedback: PropTypes.func,
};