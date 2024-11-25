
import React, { useEffect } from 'react';
import axe from 'axe-core';

const App = () => {
    useEffect(() => {
        axe.run(document, {}, (err, results) => {
            if (err) throw err;
            console.log('Accessebillity Violations:', results.violations);
        });
    }, []);

    return (
        <div>
            <h1>fanta</h1>
        </div>
    );
};

export default App;