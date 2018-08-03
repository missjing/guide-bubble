import React from 'react';
import '../assets/index.less';
import PropTypes from 'prop-types';

const PROMPT_LEVEL = {
  LOW: 0, // 弱提示气泡，几秒后消失
  MIDDLE: 1, // 中度提示气泡，点击后消失
};

function noop() {
}

class GuideBubble extends React.Component {
  static propTypes = {
    isShowBubble: PropTypes.bool,
    promptLevel: PropTypes.number,
    guideText: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object,
    bubbleCls: PropTypes.string,
  };

  static defaultProps = {
    isShowBubble: true,
    promptLevel: 1,
    guideText: '气泡展示',
    onChange: noop,
    style: {},
    bubbleCls: 'float-bubble-flow',
  };

  componentDidMount() {
    if (this.props.promptLevel === PROMPT_LEVEL.LOW) {
      setTimeout(() => {
        this.props.onChange(false);
      }, 3000);
    }
  }

  onClickBubble = () => {
    this.props.onChange(false);
  }

  render() {
    const { isShowBubble, guideText, promptLevel, style, bubbleCls } = this.props;
    return isShowBubble ? (<div className={bubbleCls} style={style} onClick={this.onClickBubble}>
      { guideText }
    </div>) : null
  }
}

export default GuideBubble;
