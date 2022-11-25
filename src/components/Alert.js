import React from 'react'

function Alert(props) {
const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

  return (
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert"> {/*we written props.alert && because if 1st condtion (props.alert) is evaluate then it will evaluate 2nd condition after && if not then 1st condition will be null , if 1st is true then it will evaluate 2nd condition/statement  */}
        <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
