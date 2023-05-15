import { Flex } from "@adobe/react-spectrum";
import { ToastContainer } from "@react-spectrum/toast";
import ImgInput from "components/ImgInput";
import TablePreview from "components/TablePreview";
import { UsernameInput } from "components/UsernameInput";
import { useAuthenticationContext } from "providers/AuthenticationProvider";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC } from "react";

import "./App.css";

const App: FC = () => {
    const { updateState, name, email, company, title, linkedin, phone } = useSignatureContext();
    const { profile } = useAuthenticationContext();

    return (
        <>
            <ToastContainer />

            <Flex marginX="size-300" alignItems="start" direction="column" justifyContent="center" gap={"size-200"}>
                {profile ? <h3>Welcome {profile?.given_name}</h3> : <></>}
                <UsernameInput state={name} label="Name" onInputChange={updateState} />
                <UsernameInput state={title} label="Title" onInputChange={updateState} />
                <UsernameInput state={company} label="Company" onInputChange={updateState} />
                <UsernameInput state={email} label="Email" onInputChange={updateState} />
                <UsernameInput state={phone} label="Phone" onInputChange={updateState} />
                <UsernameInput state={linkedin} label="Linkedin" onInputChange={updateState} />
                <ImgInput />
            </Flex>
            <TablePreview />
        </>
    );
};

export { App };
