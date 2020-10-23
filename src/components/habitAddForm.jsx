import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault(); // submit 됐을 때, 기본으로 refresh되는 것 방지
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // this.inputRef.current.value = '';
        this.formRef.current.reset();
    };

    render() {
        console.log('addForm');
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef}
                    type="text" 
                    className="add-input" 
                    placeholder="please enter yout habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;