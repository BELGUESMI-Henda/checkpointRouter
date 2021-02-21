import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Add from './Add';
import FilterForm from "./FilterForm";

function NavBar({ handleAdd, handleFilter }) {
    return (
        <div className="mb-4 bg-blue" variant="blue">
            <Navbar  className="container" >
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <FilterForm handleFilter={handleFilter} />
                    <Nav className="mr-auto">
                        <Add handleAdd={handleAdd} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}

export default NavBar