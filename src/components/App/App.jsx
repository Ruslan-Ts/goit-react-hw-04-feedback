import { Component } from "react";
import { Container } from "./App.styled";

import Section from "components/Section/Section";
import FeedbackOptns from "components/FeedbackOptns/FeedbackOptions";
import FeedbackStat from "components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }))
  };
  countTotalFeedbacks = ({ good, neutral, bad } = this.state) => {
    return good + bad + neutral;
  }
    
  countTotalPositiveFeedbacks = () => {
      return Math.round(this.state.good/this.countTotalFeedbacks() * 100)
    }

  render() {
    return (
      <Container>  
        <Section title={'Please leave feedback'}>
          <FeedbackOptns
            options={Object.keys(this.state)}
            onFeedback={this.onFeedback}
          />       
        </Section>
        <Section title={'Statistics'}>
          <FeedbackStat
            good={ this.state.good}
            neutral={ this.state.neutral}
            bad={ this.state.bad}
            total={ this.countTotalFeedbacks()}
            positiveFeedback={this.countTotalPositiveFeedbacks()}
          />
        </Section>
      </Container>
    );
}
}




export default App;
