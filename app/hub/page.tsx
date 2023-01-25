"use client"

import {Formik} from "formik";
import {BiLock, BiUserCircle} from "react-icons/all";

type UserData = {
    username?: string,
    password?: string
}

export default function Login() {

    return (
        <div className="flex flex-col items-center justify-center w-screen">
            <div className="py-20 mt-20 flex flex-col items-center justify-center bg-gray-900 bg-opacity-75 rounded-xl w-11/12 h-1/2 xl:w-3/5 2xl:w-2/5 2xl:h-2/4 pointer-events-auto">
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validate={ values => {
                        const errors: UserData = {};
                        if (!values.username) {
                            errors.username = 'Required';
                        } else if (values.username.length > 4) {
                            errors.username = "Username is to short"
                        }
                        return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400)
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form className="flex flex-col text-white w-11/12 sm:w-6/12 gap-5" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label className="flex flex-row items-center gap-2 font-bold" htmlFor="username"><BiUserCircle className="w-6 h-6" />Username:</label>
                                <input
                                    className="rounded-lg py-3 px-2 m-2 text-black shadow-sm shadow-blue-300 focus:bg-gray-50 outline-none mb-5"
                                    type="username"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                <label className="flex flex-row items-center gap-2 font-bold" htmlFor="password"><BiLock className="w-6 h-6" />Password:</label>
                                <input
                                    className="rounded-lg py-3 px-2 m-2 text-black shadow-sm shadow-blue-300 focus:bg-gray-50 outline-none mb-10"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                            <button className="font-black text-xl" type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </form>
                    )}
                </Formik>
                {/*<form className="flex flex-col text-white" action="login" method="post">
                    <label className="font-bold" htmlFor="username">Username</label>
                    <input className="rounded-lg py-3 px-2 m-2 text-black shadow-sm hover:shadow-md shadow-blue-300" type="text" name="username" id="username" placeholder="Your username" />
                </form>*/}
            </div>
        </div>
    )
}