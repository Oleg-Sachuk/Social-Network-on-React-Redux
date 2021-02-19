import React from 'react';
import { Table } from 'react-bootstrap';
import style from '../ProfileInfo.module.css'

const ContactTable = (props) => {
    return (
        <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th className={style.cont} colSpan="2">Contacts</th>
                    </tr>
                </thead>
                <tbody>
                {props.contacts.facebook 
                ?   <tr>
                        <td>Facebook:</td>
                        <td><a href={props.contacts.facebook}> {props.contacts.facebook}</a></td>
                    </tr>
                : null }
                {props.contacts.website 
                ?   <tr>
                        <td>Website:</td>
                        <td><a href={props.contacts.website}> {props.contacts.website}</a></td>
                    </tr>
                : null }
                {props.contacts.github 
                ?   <tr>
                        <td>Github:</td>
                        <td><a href={props.contacts.github}> {props.contacts.github}</a></td>
                    </tr>
                : null }
                {props.contacts.instagram 
                ?   <tr>
                        <td>Instagram:</td>
                        <td><a href={props.contacts.instagram}> {props.contacts.instagram}</a></td>
                    </tr>
                : null }
                {props.contacts.mainLink 
                ?   <tr>
                        <td>Main Link:</td>
                        <td><a href={props.contacts.mainLink}> {props.contacts.mainLink}</a></td>
                    </tr>
                : null }
                {props.contacts.twitter 
                ?   <tr>
                        <td>Twitter:</td>
                        <td><a href={props.contacts.twitter}> {props.contacts.twitter}</a></td>
                    </tr>
                : null }
                {props.contacts.vk 
                ?   <tr>
                        <td>VK:</td>
                        <td><a href={props.contacts.vk}> {props.contacts.vk}</a></td>
                    </tr>
                : null }
                {props.contacts.youtube 
                ?   <tr>
                        <td>Youtube:</td>
                        <td><a href={props.contacts.youtube}> {props.contacts.youtube}</a></td>
                    </tr>
                : null }
                </tbody>
            </Table>
    )
}

export default ContactTable;