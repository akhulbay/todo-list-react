import as from "./AddTodo.module.css";
import {useState} from "react";
import uuid from "react-uuid";
import PriorityList from "./PriorityList";
import TagsList from "./TagsList";


function AddTodo({todo, setTodo, items, priorities}) {


    const [value, setValue] = useState('');
    const [hideHiddenPriorityDiv, setHideHiddenPriorityDiv] = useState(true);
    const [hideHiddenTagsDiv, setHideHiddenTagsDiv] = useState(true);
    const [priority, setPriority] = useState(priorities.at(3))
    const [tag, setTag] = useState(null)

    function handleKeyUp(e) {
        if (e.key === "Enter") saveTodo();

    }

    // function saveTodoLocalStorage() {
    //     localStorage.setItem('todo', JSON.stringify(todo));
    // }

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                status: true,
                priority: priority,
                tag: tag
            }]
        );
        setValue('');
        setTag(null);
        setPriority(priorities.at(3));
    }

    return (
        <div className={as.AddTodo}>
            <div className={as.container}>
                <div className={as.addToDoContent}>
                    <textarea
                        cols="55"
                        rows="3"
                        placeholder={"Enter task"}
                        onKeyUp={(e) => handleKeyUp(e)}
                        value={value}
                        onChange={ (e) => setValue(e.target.value)}
                        maxLength={150}
                    ></textarea>
                    <div className={`hiddenPriorities ${hideHiddenPriorityDiv ? " hide-div" : ""}`}  >
                        <PriorityList priorities={priorities} setHideHiddenPriorityDiv={setHideHiddenPriorityDiv} setPriority={setPriority} />
                    </div>
                    <div className={`hiddenTags ${hideHiddenTagsDiv ? " hide-div" : ""}`}>
                        <TagsList items={items} setHideHiddenTagsDiv={setHideHiddenTagsDiv} setTag={setTag}/>
                    </div>
                    <div className={as.addToDoContentOptions}>
                        <div className={as.addToDoContentOptionsPriority} onClick={() => {setHideHiddenPriorityDiv(false); setHideHiddenTagsDiv(true)} }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"
                                 className="bi bi-flag" viewBox="0 0 16 16">
                                <path
                                    d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                            </svg>
                            {
                                priority.id === priorities.at(3).id ?
                                    <span>Priority</span>
                                    :
                                    <span style={{color: priority.color}}>{priority.title}</span>
                            }
                        </div>
                        <div className={as.addToDoContentOptionsTags} onClick={() => {setHideHiddenTagsDiv(false);setHideHiddenPriorityDiv(true) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                                 className="bi bi-tag" viewBox="0 0 16 16">
                                <path
                                    d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
                                <path
                                    d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
                            </svg>
                            {
                                tag === null ?
                                    <span>Tags</span>
                                    :
                                    <span style={{color: tag.color}}>{tag.title}</span>
                            }
                        </div>
                    </div>
                    <hr/>
                    <button onClick={saveTodo}>Add Task</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;