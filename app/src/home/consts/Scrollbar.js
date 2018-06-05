import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { THEME } from './theme';

export default class Scrollbar extends Component {

    render() {
        const { topOffset, padding } = this.props;

        const trackStyle = {
            height: 'calc(100% - ' + ( topOffset + 10 ) + 'px)',
            right: '3px',
            top: topOffset,
        }
        const thumbStyle = {
            backgroundColor: THEME.pallete.scrollbar,
            width: '6px',
            borderRadius: '3px'
        }
        const Padding = {
            paddingTop: padding + 'px',
            paddingLeft: padding + 'px',
            paddingRight: ( padding + 17 ) + 'px',
            paddingBottom: ( padding + 17 ) + 'px',
        }
        return (
            <Scrollbars
                renderTrackVertical={({ style, ...props }) => <div { ...props } style={{ ...style, ...trackStyle }}/>}
                renderThumbVertical={({ style, ...props }) => <div { ...props } style={{ ...style, ...thumbStyle }}/>}
                renderView={({ style, ...props }) => <div { ...props } style={{ ...style, ...Padding }}/>}
                {...this.props} 
                />
        );
    }
}