import React from 'react';
import { Button, Card } from 'react-bootstrap';
import style from './Login.module.css';

const SignOutForm = (props) => {
    return (
        <div className={style.signoutCard}>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Sign Out</Card.Title>
                    <Card.Text>
                        Tap the button if you want to leave this webpage
                    </Card.Text>
                    <Button variant="primary" onClick={() => props.getSignOut()}>Goodbye!</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignOutForm;
