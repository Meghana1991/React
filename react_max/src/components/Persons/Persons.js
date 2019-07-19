import React from "react";
import Person from "./Person/Person"
import Auxillary from "./../../hoc/Auxillary"

let persons = (props) => {
    console.log('Persons rendering')
    return props.ps.map((p, i) => {
        return <aux>
            <Person
                name={p.name}
                age={p.type}
                clickFn={() => props.clickFn(i)}
                key={p.id} />
        </aux>
    });
}


export default persons;