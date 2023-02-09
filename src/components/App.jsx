import { Component } from 'react';
import Section from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = mark => {
    this.setState(prevState => ({
      [mark]: prevState[mark] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalAmount = this.state.good + this.state.neutral + this.state.bad;
    return totalAmount;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.round((this.state.good / total) * 100);
    return percentage;
  };

  checkFeedbackState() {
    const clicks = Object.values(this.state);
    return clicks.find(item => item);
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.checkFeedbackState() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
