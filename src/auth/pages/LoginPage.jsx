'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';




export const LoginPage = () => {


    return (

        <div className="lg:container mx-auto px-4 flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
                <form className="flex max-w-md flex-col gap-4 ">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            placeholder="name@flowbite.com"
                            required
                            type="email"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            required
                            type="password"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}






