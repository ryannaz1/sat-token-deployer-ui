import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image"

export default function Loader() {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center min-h-screen">
                <div className="container min-h-24 w-4/6 p-8">
                    <Image
                        className="cursor-pointer mx-auto"
                        src="/coin.webp"
                        width={250}
                        height={250}
                        alt="token image"
                    />
                </div>
            </div>
        </>
    )
}