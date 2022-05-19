import React from 'react';
import {Section} from '../Section'
import { Button } from '../Button';
import { Statistics } from '../Statistics';



class Feedback extends React.Component{
  state={
    good:0,
    neutral:0,
    bad:0,
  }
  handleClick = event =>{
    console.log(event);
      this.setState((prevState) => {
      return {
        [event]: prevState[event] + 1,
      };
    });
  }
  
  totalSumFeedback =()=> this.state.bad + this.state.neutral + this.state.good;
  totalPositiveFeedback = (totalSumFeedback) => {
    return Math.round((this.state.good/totalSumFeedback)*100)
  }
  
  render() {
    const { good, neutral, bad } = this.state;
      return(
      <div>
        <Section title='Please leave feedback'>
          <Button buttonNames={['good', 'neutral', 'bad']} liaveFeesback={this.handleClick}/>

        </Section>
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalSumFeedback={this.totalSumFeedback}
            totalPositiveFeedback={this.totalPositiveFeedback}
          />
        </Section>
        </div>

    )
  }
}


export default Feedback;