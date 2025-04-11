import TextInput from "../component/TextInput"
import Button from "../component/Button"
import masterCard from "../assets/image/mcard.png"
import { useLocation } from 'react-router-dom'
import { useState } from "react"
import logo from "../assets/logo.png"

const CheckOut = () => {
    const location = useLocation();
    const { orders } = location.state || {};

    const getSubTotal = () => {
        const sub = orders.reduce((acc, order) => {
            return acc + parseInt(order.price) * order.quantity
        }, 0)
        return sub
    }

    const [ subTotal, setSubTotal ] = useState(getSubTotal);
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
            <div className='w-full max-w-full h-10 px-10 sm:px-20 lg:px-8 
                            font-extrabold py-10 flex items-center
                            border-b border-b-[#D3D0D0]'>
                <img src={logo} alt="" 
                     className="h-16 w-24 -mt-4"
                />
                <p className="font-normal text-2xl -ml-5">Watches</p>
            </div>
            <form className="flex justify-evenly h-full w-full">

                <div className="flex-1 h-full box-content p-6 text-xl flex flex-col 
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
                                    required={true}
                                    style={{ gridColumn: 'span 1' }}
                        />
                        <TextInput  id="lname"
                                    type="text"
                                    name="lname"
                                    placeholder="Last Name"
                                    required={true}
                                    style={{ gridColumn: 'span 1' }}
                        />
                        <TextInput  id="pnumber"
                                    type="text"
                                    name="pnumber"
                                    placeholder="Phone Number"
                                    required={true}
                                    style={{ gridColumn: 'span 2' }}
                        />
                        <TextInput  id="contact"
                                    type="text"
                                    name="contact"
                                    placeholder="Email"
                                    required={true}
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
                                        required={true}
                                        style={{ gridColumn: 'span 2' }}
                            />
                            <TextInput  id="address"
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        required={true}
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
                                        required={true}
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
                                        required={true}
                                        style={{ gridColumn: 'span 2' }}
                            />

                            <label className="col-span-1">Expiration</label>
                            <label className="col-span-1">Security Code</label>
                            
                            <TextInput  id="expi"
                                        type="text"
                                        name="expi"
                                        placeholder="mm / yy"
                                        required={true}
                                        style={{ gridColumn: 'span 1' }}
                            />
                            <TextInput  id="scode"
                                        type="text"
                                        name="scode"
                                        placeholder="XXXX"
                                        required={true}
                                        style={{ gridColumn: 'span 1' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="p-6 flex-1 h-full">
                    <h1 className="font-semibold">Review Your Cart</h1>                    
                    
                    <div className={`mt-2 py-2 flex flex-col gap-4 overflow-y-auto max-h-[328px]`}>
                        {orders && orders.map((order, index) => (
                            <div className="grid grid-cols-[150px,auto] grid-rows-[24px,auto,auto] gap-x-4 gap-y-1"
                                 key={index}
                            >
                                <div className="p-4 row-span-3 rounded-xl border-2 border-[#E9EBEF]">
                                    <img src={order.image} 
                                        alt="" 
                                        className="h-28 w-32"
                                    />
                                </div>
                                <p className="font-medium text-xl truncate">{order.name}</p>
                                <p className="text-sm text-[#8F8F8F]">x{order.quantity}</p>
                                <p className="font-semibold">${order.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-4">
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
            </form>
        </div>
    )
}

export default CheckOut