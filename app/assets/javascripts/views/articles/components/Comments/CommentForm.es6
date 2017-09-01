import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CommentForm = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-3 col-form-label">
          Commenting as:
        </label>
        <div className="col-sm-9">
          <div className="form-control-plaintext">{App.State.User.email}</div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-3 col-form-label">
          Enter your comment:
        </label>
        <div className="col-sm-9">
          <Field
            component="textarea"
            className="form-control"
            id="body"
            name="comment[body]"
            type="text"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-9"></div>
        <div className="col-sm-3">
          <button
            className="btn btn-secondary"
            name="submit"
            type="submit"
          >
            Submit a Comment
          </button>
        </div>
      </div>
    </form>
  )
}

CommentForm = reduxForm({
  form: 'contact'
})(CommentForm)

export default CommentForm;
