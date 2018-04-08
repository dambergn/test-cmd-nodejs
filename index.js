'use strict';

const cmd = require('node-cmd');

// gets working directory and prints it out via console log
cmd.get(
    'pwd',
    function (err, data, stderr) {
        console.log('the current working dir is : ', data)
    }
);

// creates a file 
cmd.run('touch example.created.file');

// runs the ls function
cmd.get(
    'ls',
    function (err, data, stderr) {
        console.log('the current dir contains these files :\n\n', data)
    }
);

// performs a specific git clone request
cmd.get(
    `
    git clone https://github.com/RIAEvangelist/node-cmd.git
    cd node-cmd
    ls
    `,
    function (err, data, stderr) {
        if (!err) {
            console.log('the node-cmd cloned dir contains these files :\n\n', data)
        } else {
            console.log('error', err)
        }

    }
);