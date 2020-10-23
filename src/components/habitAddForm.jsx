import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault(); // submit 됐을 때, 기본으로 refresh되는 것 방지
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input 
                ref={inputRef}
                type="text" 
                className="add-input" 
                placeholder="please enter yout habit"
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;
