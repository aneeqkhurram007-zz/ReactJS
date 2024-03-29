import React from 'react';
const Li = (props) => {

    return (
        <div className="todo_style">
            <div className="group" style={{
                alignItems: "center",
                justifyContent: "center",
                alignContent: "flex-end"
            }}>
                <i className="fa fa-times" aria-hidden="true"
                    onClick={() => {
                        props.onSelect(props.id);
                    }} />
                <li>{props.text}</li>
            </div>
        </div>
    );

}
export default Li;