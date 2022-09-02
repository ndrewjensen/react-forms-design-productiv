import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State
 * - edit: boolean
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({todo, update, remove}) {
  const [edit, setEdit] = useState(false);


  /** Toggle if this is being edited */
  function toggleEdit() {
    setEdit(!edit);
   }

  /** Call remove fn passed to this. */
  //QUESTION: Do we need to use this
  function handleDelete() {
    remove(todo.id);
   }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
    toggleEdit();
  }


  return (
      <div className="EditableTodo">


              {edit &&
                <TodoForm initialFormData={todo} handleSave={handleSave} u/>
              }

              {!edit &&
                <div className="mb-3">
                  <div className="float-end text-sm-end">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                      Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={handleDelete}>
                      Del
                    </button>

                  </div>
                  <Todo todo={todo} />
                </div>
              }
      </div>

  );
}

export default EditableTodo;
