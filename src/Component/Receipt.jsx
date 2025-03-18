// Generating Receipt
import './Component.css'
export let Money=()=>{
    return(
        <>
        <div className="receipt_container">
         <div className='receiptForm'>
            <h5>Receipt Form</h5>
          <form action="" onSubmit={BuyReceipt}>
            <label htmlFor="">Name</label>
           <input type="text" placeholder="Enter Your Name" />

           <label htmlFor="">Email</label>
           <input type="text" placeholder="Enter Your Email" />

           {/* Shoe name and Size  */}
           
            
           <label htmlFor="">Shoe</label>
           <span>Display Shoe name</span>

           <label htmlFor="">Shoe Size</label>
           <span>Display shoe size</span>

    

           <label htmlFor="">Contact Number</label>
           <input type="text" placeholder="Enter Contact Number" />

           <label htmlFor="">Address</label>
           <input type="text" placeholder="Enter Your Address" />

           <span>Display Price</span>

           <input className='buyButton' type="submit" value={"Buy"} />

          </form>
          </div>
       </div>
        
        </>
    )
}