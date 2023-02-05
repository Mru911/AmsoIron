import React from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const Payment = () => {
  return (
    <Container className='payment'>
        <form action="#">
                      <TextField
                        className="formmrug1"
                        label=" Full Name"
                        name="name"
                        margin="normal"
                        required
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                      />
                      <TextField
                        className="formmrug1"
                        label="Address"
                        name="address"
                        margin="normal"
                        required
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                      />
                        <TextField
                        className="formmrug1"
                        label="Contact"
                        name="contact"
                        margin="normal"
                        required
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                      /><TextField
                      className="formmrug1"
                      label="Amount"
                      name="amount"
                      margin="normal"
                      required
                      variant="outlined"
                      autoComplete="off"
                      fullWidth
                    />
                      

                      </form>
                      <button className="btn btn-outline">Pay Now </button>


        
    </Container>
    
  )
}

export default Payment