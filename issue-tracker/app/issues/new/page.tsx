import React from 'react';
import {TextField, TextArea, Button} from "@radix-ui/themes";

const NewIssue = () => {
    return (
        <div className="max-w-xl space-y-3">
            <TextField.Root placeholder="Title" />
            <TextArea placeholder="Description" />
            <Button>Submit</Button>
        </div>
    );
};

export default NewIssue;