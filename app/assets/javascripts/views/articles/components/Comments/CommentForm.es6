import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CommentForm = props => {

  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">
          Enter your comment :
        </label>
        <div className="col-sm-10">
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
        <div className="col-sm-10"></div>
        <div className="col-sm-2">
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
