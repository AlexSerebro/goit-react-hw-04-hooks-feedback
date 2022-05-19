import React, { useState } from 'react';
import {Section} from '../Section'
import { Button } from '../Button';
import { Statistics } from '../Statistics';



export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const handleClick = e =>{
      if (e === 'good') { setGood(prevGood => prevGood + 1) }
      if (e === 'bad') { setBad(prevBad => prevBad + 1) }
      if(e==='neutral'){setNeutral(prevNeutral=>prevNeutral+1)}
      
    };
  

  const totalSumFeedback =()=>bad + neutral + good;
  const totalPositiveFeedback = (totalSumFeedback) => {
    return Math.round((good/totalSumFeedback)*100)
  }

  return(
      <div>
        <Section title='Please leave feedback'>
          <Button buttonNames={['good', 'neutral', 'bad']} liaveFeesback={handleClick}/>

        </Section>
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalSumFeedback={totalSumFeedback}
            totalPositiveFeedback={totalPositiveFeedback}
          />
        </Section>
        </div>

    )
};

