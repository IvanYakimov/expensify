import React from 'react';

const EditExpensePage = (props) => (
    <div>
        <h2> Редактировать расходы </h2>
        <p> Номер расхода: {props.match.params.id} </p>
    </div>
);

export default EditExpensePage;