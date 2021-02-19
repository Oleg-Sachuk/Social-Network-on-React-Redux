import React from 'react';
import style from './Partials.module.css';


export class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }

    ChangeMode = () => {
        this.setState({
            editMode: true
        }) 
    }

    ChangeModeBack = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUsersStatus(this.state.status);
    }

    OnStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {

        if( prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                { !this.state.editMode
                ?   <span onDoubleClick={this.ChangeMode}>{this.props.status || "No Status"}</span>
                :   <span>
                    <input className={style.statusContainer} autoFocus={true} onBlur={this.ChangeModeBack} 
                    value={this.state.status} onChange={this.OnStatusChange}/>
                    <button className={style.btn} type={'submit'} onClick={this.ChangeModeBack}>OK</button>
                    </span>
                }
            </div>
        )
    }
}