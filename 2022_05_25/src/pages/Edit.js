import React, { Component } from 'react';
import BuilderControl from '../components/contentbox/Buildercontrol';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onSaveAndFinish = this.onSaveAndFinish.bind(this);
  }

  // 저장하기
  onSave(html, mainCss, sectionCss) {}
  // 저장하고 종료하기
  onSaveAndFinish(html, mainCss, sectionCss) {
    const result = window.confirm('정말 저장하고 종료하시겠습니까?');
    if (!result) {
      return;
    } else {
      this.props.navigate({ pathname: './' });
      console.log('html: ', html);
      console.log('mainCss: ', mainCss);
      console.log('sectionCss: ', sectionCss);
    }
  }
  // 종료하기
  closeBuilder = () => {
    const answer = window.confirm('Do you really want to leave?');
    if (!answer) return false;

    alert('bye bye!');
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
