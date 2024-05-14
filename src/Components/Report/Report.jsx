import React from 'react'

const Report = () => {

    const data = [
        {
            id:1,
            mainHeading:"Escalations",
            bodyContent:"Escalations Counting",
            DynamicValue:80,
        },
        {
            id:2,
            mainHeading:"Inventory",
            bodyContent:"Available OB Stock Value",
            DynamicValue:"₹6,00,000",
        },
        {
            id:3,
            mainHeading:"Primary billing",
            bodyContent:"Pvt Label Contribution",
            DynamicValue:"96.03%",
        },
        {
            id:4,
            mainHeading:"Counter Sale",
            bodyContent:"Sale Amount",
            DynamicValue:"₹1,00,000",
        },
    ]

  return (
    <div className='container my-4'>
        <div className="row">
            <div className="col-md-12">
            <div className="card p-2 my-3">
                            <div className='pb-1'>
                                <h1 className='card-heading card-heading-color'>Delivery</h1>
                            </div>
                            <div>
                                <h2 className='card-heading'>Beats</h2>
                            </div>
                            <div className="row px-3 gt-x-2">
    <div className='col text-center nested-card-6'>
        <p className='card-nested-content-para'>Ordered</p>
        <p className='card-nested-content-para'>18</p>
    </div>
    <div className='col text-center nested-card-6'>
        <p className='card-nested-content-para'>Delivered</p>
        <p className='card-nested-content-para'>15</p>
    </div>
</div>



                            {/* <div className="row">
                            <div className='content-center card-content col-sm-6'>
                            <p>Rejected</p>
                            <p>2</p>
                            </div>
                            <div className='content-center card-content col-sm-6'>
                            <p>Pendig</p>
                            <p>3</p>
                            </div>
                            </div> */}
                        </div>
            </div>
            <div className="col-md-12">
                {
                    data.map((item)=>{
                        return(
                            <div className="card p-2 my-3" key={item.id}>
                            <div className='pb-1'>
                                <h1 className='card-heading card-heading-color'>{item?.mainHeading}</h1>
                            </div>
                            <div className='content-center card-content'>
                            {item?.bodyContent} - {item?.DynamicValue}
                            </div>
                        </div>
                        )
                    })
                }
               
            </div>
        </div>

    </div>
  )
}

export default Report