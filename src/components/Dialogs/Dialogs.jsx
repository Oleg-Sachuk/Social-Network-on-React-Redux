import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import style from './Dialogs.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Messenger from './MessageSender/Messenger';

const Dialog = (props) => {
    let state = props.dialogPage;

    let DialogElements = state.dialogData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let MessageElements = state.messageData.map(unit => <Message message={unit.message} key={unit.id} />);

    return (
        <Container fluid>
            <Row>
                <Col className={style.dialogs}>
                    <div className={style.dialTitle}><b>Your Dialogs:</b></div>
                    {DialogElements}
                </Col>
                <Col className={style.msgs} xs={9}>
                    <div className={style.chat} >
                        {MessageElements}
                    </div>
                    <Messenger {...props} />
                </Col>
            </Row>
        </Container>
    )
}

export default Dialog;