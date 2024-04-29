import React from 'react';
import {Button} from "@radix-ui/themes";
import Link from "next/link";

const Page = () => {
    return (
        <div>
            Issues page
            <Button><Link href="/issues/new">New Issue</Link></Button>
        </div>
    );
};

export default Page;