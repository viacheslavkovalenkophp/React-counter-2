import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const HomePage = () => {
    return (
        <div>
            <h2>TODO List</h2>
            <Formik
                initialValues={{ task: '' }}
                validationSchema={Yup.object({
                    task: Yup.string()
                        .min(5, 'Минимальная длина задачи — 5 символов')
                        .required('Это поле обязательно'),
                })}
                onSubmit={(values, { resetForm }) => {
                    console.log('Новая задача:', values.task);
                    resetForm();
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            type="text"
                            name="task"
                            placeholder="Введите задачу"
                        />
                        <ErrorMessage
                            name="task"
                            component="div"
                            style={{ color: 'red' }}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Добавить
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default HomePage;
