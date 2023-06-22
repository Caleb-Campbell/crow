"use client";

import { SignUpButton } from "@clerk/nextjs";

const SignUpCard = () => {

    return (
        <div className="absolute flex h-full w-full translate-y-1/2 flex-col items-center justify-center">
            <SignUpButton />
        </div>
    )
}

export default SignUpCard;