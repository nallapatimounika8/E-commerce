import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Cartcard } from './Cartcard'

export const Cart = () => {

  return (
    <div>
        <Menu right>
            <div style={{ height: '70vh' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <h3 style={{ marginLeft: '20px' }}>Cart</h3>
                </div>
                <p>Add some Products here </p>
                <Cartcard />
            </div>
            
            <div style={{ position: 'sticky' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // margin: '30px 10px 0 0',
                }}>
                    <h5>SUBTOTAL</h5>
                    <h5>$ 0.00</h5>
                </div>
                <button className="btn btn-primary" type="button" style={{
                    borderRadius: '0',
                    backgroundColor: 'black',
                    border: '0',
                    padding: '10px',
                    marginTop: '50px',
                    width: '100%',
                }}>CHECK OUT</button>
            </div>
        </Menu >
    </div>
  )
}
