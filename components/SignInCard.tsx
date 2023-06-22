"use client";

import { SignInButton } from "@clerk/nextjs";

const SignInCard = () => {

    return (
        <div className="absolute flex h-full w-full translate-y-1/2 flex-col items-center justify-center">
            <SignInButton />
        </div>
    )
}

export default SignInCard;