/* eslint no-console: 0 */
import GuideBubble from 'guide-bubble';
import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/index.less';

class Simple extends React.Component {
  state = {
    isShowFirstBubble: true,
    isShowSecondBubble: true,
  };

  onChangeFirst = (value) => {
    this.setState({
      isShowFirstBubble: value,
    });
  };
  onChangeSecond = (value) => {
    this.setState({
      isShowSecondBubble: value,
    });
  };

  render() {
    return <div>
      <div style={{ margin: 100, position: 'relative' }}>
        <GuideBubble
          promptLevel={0}
          isShowBubble={this.state.isShowFirstBubble}
          onChange={this.onChangeFirst}
          guideText="看这里看这里"
          bubbleCls="float-bubble-flow"
        />
        待气泡提醒内容1
      </div>
      <div style={{ margin: 100, position: 'relative' }}>
        <GuideBubble
          promptLevel={1}
          isShowBubble={this.state.isShowSecondBubble}
          onChange={this.onChangeSecond}
          guideText="看这里看这里"
          bubbleCls="float-bubble-flow"
        />
        待气泡提醒内容2
      </div>
    </div>
  }
}

ReactDOM.render(<Simple />, document.getElementById('__react-content'));
