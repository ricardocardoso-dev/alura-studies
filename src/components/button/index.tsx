import React from "react";

class Button extends React.Component {
    render(): React.ReactNode {
        return(
            <button style={{
                backgroundColor: 'blue '
            }}>
                Botão
            </button>
        )
    }
}

export default Button;