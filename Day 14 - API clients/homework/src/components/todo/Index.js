import axios from 'axios'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';

const Index = () => {
    const [todoList, setTodoList] = useState([]);
    const [form, setForm] = useState({ taskname: "", taskDesc: "", deadline: "" })
    const formSchema = Yup.object().shape({
        taskname: Yup.string().max(50).required(),
        taskDesc: Yup.string().required(),
        deadline: Yup.string().min(8).max(10).required()
    })
    const [mode, setMode] = useState({ type: "add", action: "Submit" });

    useEffect(() => {
        axios.get('http://localhost:3001/todos')
            .then(res => {
                setTodoList(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleEdit = (index) => {
        setMode({ type: "edit", action: "Save", selectedIndex: index });
        setForm({ ...todoList[index] });
    }

    const handleDelete = (index) => {
        let confirmation = window.confirm("Are you sure to delete this?");
        if (confirmation) {
            axios.delete(`http://localhost:3001/todos/${todoList[index].id}`)
                .then(res => {
                    console.log(res);
                    let afterDeletedArray = todoList.filter(todo => todo.id != todoList[index].id);
                    console.log(afterDeletedArray);
                    setTodoList([...afterDeletedArray]);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    return (
        <div className="container pt-3">
            <h2>TODO List</h2>
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    if (mode.type === "edit") {
                        let id = todoList[mode.selectedIndex].id;
                        axios.put(`http://localhost:3001/todos/${id}`, values)
                            .then(res => {
                                setForm({ taskname: "", taskDesc: "", deadline: "" });
                                setMode({ type: "add", action: "Submit" });
                                let updatedArr = todoList;
                                updatedArr[mode.selectedIndex] = values;
                                setTodoList([...updatedArr]);
                            })
                            .catch(err => {
                                console.log(err);
                            })

                    } else {
                        axios.post('http://localhost:3001/todos', {
                            taskname: values.taskname,
                            taskDesc: values.taskDesc,
                            deadline: values.deadline
                        })
                            .then(res => {
                                setForm({ taskname: "", taskDesc: "", deadline: "" });
                                let addedArr = todoList;
                                values.id = res.data.id;
                                addedArr.push(values);
                                setTodoList([...addedArr]);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                }}
            >
                <Form>
                    <p className='mb-2'>Task Title</p>
                    <Field name="taskname" placeholder="Enter a task title" value={form.taskname || ""} onChange={handleChange}></Field>
                    <ErrorMessage component="div" name='taskname' className='text-danger'></ErrorMessage>
                    <p className='mb-2'>Task Desc</p>
                    <Field name="taskDesc" placeholder="Enter a task description" value={form.taskDesc || ""} onChange={handleChange}></Field>
                    <ErrorMessage component="div" name='taskDesc' className='text-danger'></ErrorMessage>
                    <p className='mb-2'>Deadline</p>
                    <Field name="deadline" type="date" value={form.deadline || ""} onChange={handleChange}></Field>
                    <ErrorMessage component="div" name='deadline' className='text-danger'></ErrorMessage>
                    <button type='submit' className='d-block mt-2 btn btn-success'>{mode.action}</button>
                </Form>
            </Formik>
            <hr />
            <table className='table table-hover table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task Title</th>
                        <th>Task Description</th>
                        <th>Deadline</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map((row, index) => (
                            <tr key={index}>
                                <td className='w-auto'>{row.id}</td>
                                <td className='w-auto'>{row.taskname}</td>
                                <td className='text-wrap w-50 text-justify'>{row.taskDesc}</td>
                                <td className='w-auto'>{row.deadline}</td>
                                <td className='w-auto text-center'>
                                    <button className='btn btn-warning m-2' onClick={() => handleEdit(index)}>Edit</button>
                                    <button className='btn btn-danger m-2' onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index