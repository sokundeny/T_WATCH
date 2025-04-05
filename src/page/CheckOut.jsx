import TextInput from "../component/TextInput"
import Button from "../component/Button"
import masterCard from "../assets/image/mcard.png"
import { useLocation } from 'react-router-dom'
import { useState } from "react"

const CheckOut = () => {
    const location = useLocation();
    const { orders } = location.state || {};

    const [ subTotal, setSubTotal ] = useState(19.99);
    const [ shippingCost, setShippingCost ] = useState(0);
    const [ discount, setDiscount ] = useState(10);

    const getTotalPrice = () => {
        const total = parseFloat(subTotal) - parseFloat(discount) + parseFloat(shippingCost);
        return Math.max(0, total).toFixed(2);
    }   

    const handleShippingChange = (e) => {
        const selectedValue = e.target.value;
        setShippingCost(selectedValue)
    }

    return (
        <div className="flex flex-col w-full">
            <div className='w-full max-w-full h-10 px-10 sm:px-20 lg:px-32 
                            font-extrabold py-10 flex items-center justify-between 
                            border-b border-b-[#D3D0D0]'>
                LOGO
            </div>
            <main className="flex justify-evenly h-full w-full">

                <form className="flex-1 box-content p-6 text-xl flex flex-col 
                                gap-8 border-r-2 border-r-[#D3D0D0]"
                >
                    <div className="grid grid-cols-2 gap-3">
                        <label style={{ gridColumn: 'span 2' }}>
                            Contact
                        </label>
                        <TextInput  id="fname"
                                    type="text"
                                    name="fname"
                                    placeholder="First Name"
                                    style={{ gridColumn: 'span 1' }}
                        />
                        <TextInput  id="lname"
                                    type="text"
                                    name="lname"
                                    placeholder="Last Name"
                                    style={{ gridColumn: 'span 1' }}
                        />
                        <TextInput  id="pnumber"
                                    type="text"
                                    name="pnumber"
                                    placeholder="Phone Number"
                                    style={{ gridColumn: 'span 2' }}
                        />
                        <TextInput  id="contact"
                                    type="text"
                                    name="contact"
                                    placeholder="Email"
                                    style={{ gridColumn: 'span 2' }}
                        />
                        
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <label>Delivery</label>
                        <div className="grid grid-cols-2 gap-3 w-full">
                            <TextInput  id="counorreg"
                                        type="text"
                                        name="counorreg"
                                        placeholder="Country / Region"
                                        style={{ gridColumn: 'span 2' }}
                            />
                            <TextInput  id="address"
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        style={{ gridColumn: 'span 2' }}
                            />
                            <TextInput  id="apartment"
                                        type="text"
                                        name="apartment"
                                        placeholder="Apartment, suite, etc. (optional)"
                                        style={{ gridColumn: 'span 2' }}
                            />
                            <TextInput  id="city"
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        style={{ gridColumn: 'span 1' }}
                            />
                            <TextInput  id="pcode"
                                        type="text"
                                        name="pcode"
                                        placeholder="Postal Code (optional)"
                                        style={{ gridColumn: 'span 1' }}
                            />
                        </div>

                        <div className="flex gap-2 text-xs">
                            <input  className="border-[#E8E6E6]"
                                    type="checkbox"
                                    id="rememberMe"
                                
                            />
                            Save this information for the next time
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1>Shipping Method</h1>
                        <select className="w-full h-12 py-2 text-sm bg-[#E8E6E6] appearance-none 
                                            border border-[#8F8F8F] rounded-lg px-4"
                                id="shipping-method" 
                                name="shippingMethod"
                                onChange={handleShippingChange}
                                required
                                
                        >
                            <option value="" disabled selected>Select Shipping Method</option>
                            <option value="0">Free Shipping - Free</option>
                            <option value="5.99">Standard Shipping - $5.99</option>
                            <option value="12.99">Express Shipping - $12.99</option>
                        </select>
                        
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1>Payment</h1>
                        <p className="text-[#8F8F8F] text-sm">
                            All transactions are secure  and encrypted
                        </p>

                        <div className="-mt-1 w-fit p-3 flex flex-col bg-[#E8E6E6] gap-2
                                        rounded-md border border-[#8F8F8F] cursor-pointer"
                        >
                            <img src={masterCard} alt="" className="h-10 w-[66px]"/>
                            <p className="text-base font-medium">Credit Card</p>
                        </div>

                        <div className="mt-2 grid grid-cols-2 text-sm gap-3">
                            
                            <label className="col-span-2">Card Number</label>
                            <TextInput  id="cnumber"
                                        type="text"
                                        name="cnumber"
                                        placeholder="XXX XXX XXX"
                                        style={{ gridColumn: 'span 2' }}
                            />

                            <label className="col-span-1">Expiration</label>
                            <label className="col-span-1">Security Code</label>
                            
                            <TextInput  id="expi"
                                        type="text"
                                        name="expi"
                                        placeholder="mm / yy"
                                        style={{ gridColumn: 'span 1' }}
                            />
                            <TextInput  id="scode"
                                        type="text"
                                        name="scode"
                                        placeholder="XXXX"
                                        style={{ gridColumn: 'span 1' }}
                            />
                        </div>
                    </div>
                </form>

                <div className="p-6 flex-1">
                    <h1 className="font-semibold">Review Your Cart</h1>                    
                    
                        <div className="py-2">
                        {orders && orders.map((order, index) => (
                            <div key={index}>
                                <p>{order.product} x {order.quantity}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-2">
                        <TextInput  id="dcode"
                                    type="text"
                                    name="dcode"
                                    placeholder="Discount Code"
                        />
                        <Button>Apply</Button>
                    </div>

                    <div className="grid grid-cols-2 mt-4 gap-2 px-1 text-[#191B1D]">
                        <p className="text-[#8F8F8F] text-sm col-span-1"
                            >Subtotal
                        </p>
                        <p className="text-sm font-semibold col-span-1 text-right"
                            >${subTotal}
                        </p>
                        <p className="text-[#8F8F8F] text-sm col-span-1"
                            >Shipping
                        </p>
                        <p className="text-sm font-semibold col-span-1 text-right"
                            >${shippingCost}
                        </p>
                        <p className="text-[#8F8F8F] text-sm col-span-1"
                            >Discount
                        </p>
                        <p className="text-sm font-semibold col-span-1 text-right"
                            >-${discount}
                        </p>
                        <div className="mt-2 h-[1px] w-full bg-[#D3D0D0] col-span-2"></div>
                        <p className="mt-1 text-xl font-bold col-span-1"
                            >Total
                        </p>
                        <p className="mt-1 text-2xl font-bold col-span-1 text-right"
                            >${getTotalPrice()}
                        </p>
                    </div>
                    <Button style={{marginTop: `12px`,
                                    width: `100%`
                    }}>
                        Place Order
                    </Button>
                </div>
            </main>
        </div>
    )
}

export default CheckOut