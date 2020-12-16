import React from 'react';
import reactCSS from 'reactcss';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import { presetColors } from '../../../utils/preset-colors';

interface Props {
    dataCy: string;
    id: string;
    className: string;
    presetColors?: string[];
}

class ColorPicker extends React.Component<Props> {
    state = {
        displayColorPicker: true,
        color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
        },
    };

    /** Leaving this code here in case we want dynamic rendering in the future */
    // handleClick = () => {
    //     this.setState({ displayColorPicker: !this.state.displayColorPicker });
    // };

    // handleClose = () => {
    //     this.setState({ displayColorPicker: false });
    // };

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

        const { children, id, className, dataCy } = this.props;
        return (
            <Container
                className={`color-picker-container ${className}`}
                id={id}
                data-cy={dataCy}
                style={styles.color}
            >
                {children}
                <SketchPicker
                    color={this.state.color}
                    onChange={this.handleChange}
                    className="color-picker-sketch"
                    presetColors={presetColors}
                    width={'300px'}
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;

    & .color-picker-sketch {
        height: 14.5rem;
        & > div {
            position: absolute !important;
            width: 300px !important;
            > div {
                height: 4rem;
            }
        }
        & .flexbox-fix:nth-child(2) {
            top: 5rem;
            width: 300px !important;
        }
        & .flexbox-fix:nth-child(3) {
            top: 7rem;
            width: 300px !important;
        }
        & .flexbox-fix:nth-child(4) {
            top: 10rem;
            padding: 0 !important;
            border: none !important;
            margin: 0 !important;
            width: 316px !important;
        }
    }
`;

export default ColorPicker;
