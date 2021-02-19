import  React from 'react';
import { Col, Row } from 'react-bootstrap';
import style from './Header.module.css'

const Header = (props) => {
    return(
        <header className={style.appHeader}>
            <Row>
                <Col className={style.labelTag}>
                    SOCIAL NETWORK
                </Col>
            </Row>
        </header>
    )
}

export default Header;