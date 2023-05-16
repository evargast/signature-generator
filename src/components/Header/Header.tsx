import { ActionButton, Button, Flex, Item, Menu, MenuTrigger } from "@adobe/react-spectrum";
import { ToggleButton } from "@adobe/react-spectrum";
import Home from "@spectrum-icons/workflow/Home";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import { useAuthenticationContext } from "providers/AuthenticationProvider";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC, Key } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RouteOptions: FC = () => {
    // destructuring pathname from useLocation hook
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const selectedPath = pathname.replace("/", "");

    const setSelected = (key: Key) => {
        navigate(key as string);
    };

    const getMenuButtonLabel = (string: string) => {
        if (string.length === 0) {
            return <Home />;
        } else {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    };

    return (
        <MenuTrigger>
            <ActionButton isQuiet>{getMenuButtonLabel(selectedPath)}</ActionButton>
            <Menu selectionMode="single" selectedKeys={[selectedPath || "/"]} onAction={setSelected}>
                <Item key="/">Home</Item>
                <Item key="luigi">Luigi</Item>
                <Item key="stefano">Stefano</Item>
            </Menu>
        </MenuTrigger>
    );
};

interface Props {
    isToggled?: boolean;
}

const Header: FC<Props> = ({}) => {
    const { isDarkMode, setIsDarkMode } = useSignatureContext();
    const { handleLogin, handleLogout, isLoggedIn } = useAuthenticationContext();

    return (
        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
            <h1>Signature Generator</h1>
            <Flex direction="row" alignItems="center" gap="size-100">
                <RouteOptions />
                <ToggleButton isQuiet onChange={setIsDarkMode} isSelected={isDarkMode}>
                    {isDarkMode ? <Moon /> : <Light />}
                </ToggleButton>
                <Button variant="cta" style="outline" onPress={() => (isLoggedIn ? handleLogout() : handleLogin())}>
                    {isLoggedIn ? "Sign out" : "Sign in with Google 🚀"}
                </Button>
            </Flex>
        </Flex>
    );
};

export { Header };
