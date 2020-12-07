import React from 'react';
import reactCSS from 'reactcss';
import styled, { css } from 'styled-components';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
    state = {
        displayColorPicker: false,
        color: {
            r: 66,
            g: 66,
            b: 66,
            a: 1,
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    };

    handleChange = (color: any) => {
        this.setState({ color: color.rgb });
    };

    render() {
        const styles = reactCSS({
            default: {
                color: {
                    borderRadius: '0.25rem',
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
            },
        });
        const { children } = this.props;
        return (
            <Container className="color-picker-container">
                <Swatch onClick={this.handleClick} className="color-picker-swatch">
                    <ColorContainer style={styles.color}>{children}</ColorContainer>
                </Swatch>
                {this.state.displayColorPicker ? (
                    <PopOver className="color-picker-popover">
                        <Cover onClick={this.handleClose} />
                        <SketchPicker
                            color={this.state.color}
                            onChange={this.handleChange}
                            className="color-picker-sketch"
                        />
                    </PopOver>
                ) : null}
            </Container>
        );
    }
}

const Cover = styled.div``;
const PopOver = styled.div`
    position: 'absolute';
    z-index: '2';
    margin: 1rem 0;
`;

const Swatch = styled.div`
    padding: '100px';
    border-radius: '1px';
    box-shadow: '0 0 0 1px rgba(0,0,0,.1)';
    display: 'inline-block';
    cursor: 'pointer';
`;
const Container = styled.div``;

const ColorContainer = styled.div`
    padding: 1rem;
    &:hover {
        cursor: pointer;
    }
`;

export default ColorPicker;
