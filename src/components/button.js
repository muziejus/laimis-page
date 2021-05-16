import * as React from "react"

export default function Button({ action, message }){

  return (
    <button 
      onClick={action}
      className="button"
    >
      <FormattedMessage id={message} />
    </button>
  );
}
