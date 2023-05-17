import { useState } from 'react';
import { Container } from './App.styled';

import Section from 'components/Section/Section';
import FeedbackOptns from 'components/FeedbackOptns/FeedbackOptions';
import FeedbackStat from 'components/Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedbacks = () => {
    return good + bad + neutral;
  };

  const countTotalPositiveFeedbacks = () => {
    return Math.round((good / countTotalFeedbacks()) * 100);
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptns
          options={['good', 'neutral', 'bad']}
          onFeedback={onFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <FeedbackStat
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedbacks()}
          positiveFeedback={countTotalPositiveFeedbacks()}
        />
      </Section>
    </Container>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onFeedback = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };
//   countTotalFeedbacks = ({ good, neutral, bad } = this.state) => {
//     return good + bad + neutral;
//   };

//   countTotalPositiveFeedbacks = () => {
//     return Math.round((this.state.good / this.countTotalFeedbacks()) * 100);
//   };

//   render() {
//     return (
//       <Container>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptns
//             options={Object.keys(this.state)}
//             onFeedback={this.onFeedback}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           <FeedbackStat
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedbacks()}
//             positiveFeedback={this.countTotalPositiveFeedbacks()}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }

export default App;
