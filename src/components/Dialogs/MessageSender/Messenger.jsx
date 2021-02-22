import { Field, Form } from 'react-final-form';
import style from '../Dialogs.module.css';

const Messenger = props => {

    return (
        <div>
        <Form
        onSubmit={values => {
            props.SendMessage(values);
        }}
    >
        {({ handleSubmit, pristine, submitting }) => (
            <form onSubmit={handleSubmit}>
            <div>
                <div className="form-group">
                    <Field type={'textarea'} name={'NewMessageBody'} className="form-control" placeholder="Message" component={'textarea'}/>
                </div>
                <button disabled={pristine || submitting} className={style.submitbtn}>Send message</button>
            </div>
        </form>
        )}
    </Form>
    </div>
    )
}

export default Messenger;