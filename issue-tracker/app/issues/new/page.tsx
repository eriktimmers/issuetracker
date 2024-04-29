'use client';

import {TextField, Button} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
    return (
        <div className="max-w-xl space-y-3">
            <TextField.Root placeholder="Title" />
            <SimpleMDE />
            <Button>Submit</Button>
        </div>
    );
};

export default NewIssue;