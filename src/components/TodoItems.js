import React from "react";

function TodoItems(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.itemProp.completed}
        onChange={(event) => props.handledChange(props.itemProp.id)}
      />
      <p
        style={
          props.itemProp.completed
            ? { textDecoration: "line-through", color: "gray" }
            : null
        }
      >
        {props.itemProp.text}
      </p>
    </div>
  );
}

// class TodoItems extends Component {
//   constructor(){
//     super();
//     this.state = {
//       checkStatus: true
//     }
//   }
//   render() {
//     return (
//       <div className="todo-item">
//         <input type="checkbox" checked={this.props.itemProp.completed} />
//         <p>{this.props.itemProp.text}</p>
//       </div>
//     );
//   }
// }

export default TodoItems;
