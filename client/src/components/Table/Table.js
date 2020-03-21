import React from 'react'
import './Table.scss'
import PropTypes from 'prop-types'
import {
    Table,
} from 'react-bootstrap'

const SpecTable = ({ title, elements }) => (
    <>
        <h3 className="specs">{title}</h3>
        <Table responsive>
            <tbody>
                {elements.map(element => {
                    return (
                        <tr key={element.name}>
                            <td className="row-bold">{element.name}</td>
                            <td>{element.value}</td>
                        </tr>
                    )})}
            </tbody>
        </Table>
    </>
)

SpecTable.propTypes = {
    title: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired).isRequired
}

export default SpecTable