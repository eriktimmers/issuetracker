'use client';

import {TextField, Callout, Button} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import {useState} from "react";

interface issueForm {
    title: string;
    description:string;
}

const NewIssue = () => {
    const router = useRouter();
    const [error, setError] = useState('')
    const { register, control, handleSubmit} = useForm<issueForm>();

    return (
        <form
            className="max-w-xl space-y-3"
            onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.post('/api/issues', data);
                    router.push('/issues/');
                } catch (error) {
                    setError('An unexpected error has occured.')
                }
            })}
        >
            { error &&
                <Callout.Root color="red" className='mb-5'>
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            }
            <TextField.Root placeholder="Title" {...register('title')} />
            <Controller
                name="description"
                control={control}
                render={({ field }) => <SimpleMDE placeholder='Description' {...field}/>}
            />
            <Button>Submit</Button>
        </form>
    );
};

export default NewIssue;