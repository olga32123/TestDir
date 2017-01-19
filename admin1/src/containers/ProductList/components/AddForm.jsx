import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddForm extends Component {
  render() {  
    const { handleSubmit } = this.props;
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <div>
              <Field name="title" component="input" type="text" placeholder="title" />
            </div>
          </div>
          <div>
            <label>Description</label>
            <div>
              <Field name="description" component="input" type="text" placeholder="description" />
            </div>
          </div>
          <div>
            <button type="submit">create</button>
          </div>
        </form>
   );
  }
}


export default reduxForm({
  form: 'addNew',
})(AddForm)
