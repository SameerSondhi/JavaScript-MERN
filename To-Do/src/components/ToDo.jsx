const ToDo = (props) => {
    const todoClasses = ["bold", "italic"];

            if(props.todo.complete){
                todoClasses.push("line-through")
            }
    return (
        <div key={props.i}>
            <input className="check" onChange={(event) => {
                props.handleComplete(props.i);
            }
            } checked={props.todo.complete} type="checkbox" />
            <span className={todoClasses.join(" ")}>{props.todo.text}</span>
            <button className="btn btn-outline-danger" onClick={(event) => { props.handleToDoDelete(props.i) }}>Delete</button>
        </div>
    );
}

export default ToDo