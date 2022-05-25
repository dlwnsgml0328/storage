import React, { Component } from 'react';
import BuilderControl from '../components/contentbox/buildercontrol';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onSaveAndFinish = this.onSaveAndFinish.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  onSave(html, mainCss, sectionCss) {}

  onSaveAndFinish(html, mainCss, sectionCss) {
    this.props.navigate({ pathname: './' });
  }

  closeBuilder = () => {
    const answer = window.confirm('Do you really want to leave?');
    if (!answer) return false;

    this.props.navigate({ pathname: './' });
  };

  render() {
    return (
      <>
        <BuilderControl
          onSave={this.onSave}
          onSaveAndFinish={this.onSaveAndFinish}
          doSave={(f) =>
            (this.callSave = f)
          } /* https://stackoverflow.com/questions/37949981/call-child-method-from-parent */
          doSaveAndFinish={(f) => (this.callSaveAndFinish = f)}
        />

        <div
          className='is-ui'
          style={{ position: 'fixed', right: '30px', bottom: '30px', display: 'flex' }}
        >
          <button type='button' onClick={() => this.callSave()} style={{ width: '85px' }}>
            Save
          </button>
          <button type='button' onClick={() => this.callSaveAndFinish()} style={{ width: '120px' }}>
            Save & Finish
          </button>
          <button type='button' onClick={() => this.closeBuilder()} style={{ width: '85px' }}>
            Close
          </button>
        </div>
      </>
    );
  }
}
