import React from 'react';
import { StyledCell } from './Styles/StyledCell';
import { TETROMINOS } from '../tetrominos'

const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>
        cell
    </StyledCell>
)

export default Cell;