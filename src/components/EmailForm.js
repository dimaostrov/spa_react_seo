import React, { PureComponent } from 'react';
import { oneOfType, string, number } from 'prop-types';

const stringOrNumber = oneOfType([string, number]);

export default class EmailForm extends PureComponent {
  static propTypes = {
    to: string.isRequired,
    className: string,
    titleMaxLength: stringOrNumber,
    titlePlaceholder: string,
    contentsRows: stringOrNumber,
    contentsMaxLength: stringOrNumber,
    contentsPlaceholder: string,
    buttonText: string,
  };

  static defaultProps = {
    className: '',
    titleMaxLength: 50,
    titlePlaceholder: 'Title...',
    contentsRows: 8,
    contentsMaxLength: 500,
    contentsPlaceholder: 'Contents...',
    buttonText: 'Send E-mail',
  };

  constructor(props) {
    super(props);

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.props.to)) {
      throw new Error('Invalid email address');
    }
  }

  state = {
    title: '',
    contents: '',
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleContents = (e) => {
    this.setState({ contents: e.target.value });
  };

  render() {
    const {
      to,
      className,
      titleMaxLength,
      titlePlaceholder,
      contentsRows,
      contentsMaxLength,
      contentsPlaceholder,
      buttonText,
    } = this.props;

    return (
      <div className={className +" pa4-ns pa1 black-80 bg-blue w-90 center"}>
        <input
          type="email"
          value={this.state.title}
          onChange={this.handleTitle}
          maxLength={titleMaxLength}
          placeholder={titlePlaceholder}
          className="input-reset ba b--black-20 pa0 pa2-ns mb2 db w-100"
        />
        <textarea
          value={this.state.contents}
          onChange={this.handleContents}
          rows={contentsRows}
          maxLength={contentsMaxLength}
          placeholder={contentsPlaceholder}
          className="db border-box hover-black w-100 measure ba b--black-20 pa0 pa2-ns br2 mb2"
        />
        <a href={`mailto:${to}?subject=${this.state.title}&body=${this.state.contents.replace(/\n/g, '%0D%0A')}`}>
          {buttonText}
        </a>
      </div>
    );
  }
}