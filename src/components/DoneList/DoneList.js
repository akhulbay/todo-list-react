import ds from "./DoneList.module.css";
import {useState} from "react";


function DoneList({done, setDone}) {

    return (
        <div className={ds.DoneList}>
            <div className={ds.container}>
                <div className={ds.doneListTitle}>
                    <h3>Completed tasks</h3>
                </div>
                <div className={ds.toDoList}>
                    {
                        done !== null ?
                            done.map(item => (
                                <div className={ds.toDoBlock} key={item.id}>
                                    <div className={ds.toDoBlockContent}>

                                        <div className={ds.toDoBlockContentDone}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 fill="currentColor" className="bi bi-check-circle-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                            </svg>
                                        </div>


                                        <div>
                                            <div className={ds.toDoBlockContentTitleAndTag}>
                                                <div className={ds.toDoBlockContentTitle}>
                                                    {item.title}
                                                </div>
                                            </div>
                                            <div className={ds.doneListTag}>
                                                {
                                                    item.tag !== null ?
                                                        <div className={ds.toDoBlockContentTag}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="13"
                                                                 height="13"
                                                                 fill="currentColor" className="bi bi-tag-fill"
                                                                 viewBox="0 0 16 16" color={item.tag.color}>
                                                                <path
                                                                    d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                            </svg>

                                                            <span
                                                                style={{color: item.tag.color}}>{item.tag.title}</span>
                                                        </div>
                                                        :
                                                        <div className={ds.toDoBlockContentTag}>
                                                        </div>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    <hr/>
                                </div>
                            ))
                            :
                            <div></div>
                    }

                </div>
            </div>
        </div>
    )
}

export default DoneList;