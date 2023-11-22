import React, { useState } from 'react'
import './Homepage.css'

function Homepage() {

    const [products, setProducts] = useState([
        {
            name: "Sweaters from $22",
            image: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweaters_Hover_DESK",
            para: "Kid's & Baby from $15",
            button: "SHOP NOW +"
        },
        {
            name: "Sweaters from $19",
            image: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Sweats_Hover_DESK",
            para: "Kid's & Baby from $12",
            button: "SHOP NOW +"
        },
        {
            name: "Tees from $12",
            image: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_Tees_Hover_DESK",
            para: "Kid's & Baby from $7",
            button: "SHOP NOW +"
        },
        {
            name: "PJ's from $15",
            image: "https://gapprod.a.bigcontent.io/v1/static/20231120_BF_PJs_Hover_DESK",
            para: "Kid's & Baby from $10",
            button: "SHOP NOW +"
        }])

        const [tshirt, setTshirt] = useState([
            {
                name: "Striped Crewneck Sweater",
                image: "https://www.gap.com/webcontent/0053/906/698/cn53906698.jpg"
            },
            {
                name: "Waffle Sweater",
                image: "https://www.gap.com/webcontent/0053/573/763/cn53573763.jpg"
            },
            {
                name: "Crewneck Sweater",
                image: "https://www.gap.com/webcontent/0054/233/650/cn54233650.jpg"
            },
            {
                name: "Mainstay Crewneck Sweater",
                image: "https://www.gap.com/webcontent/0053/802/234/cn53802234.jpg"
            },
            {
                name: "Rib Shawl Cardigan",
                image: "https://www.gap.com/webcontent/0053/942/961/cn53942961.jpg"
            }])

            const [baby, setBaby] = useState([
                {
                    name: "WOMEN +",
                    image: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_Women_DESK"
                },
                {
                    name: "MEN",
                    image: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_Men_DESK"
                },
                {
                    name: "GIRLS",
                    image: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_Girls_DESK"
                },
                {
                    name: "BOYS",
                    image: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_Boys_DESK"
                },
                {
                    name: "TODDLER GIRL",
                    image: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerGirl_DESK"
                },
                {
                    name: "TODDLER BOY",
                    image: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerBoy_DESK"
                },
                {
                    name: "BABY GIRL",
                    image: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyGirl_DESK"
                },
                {
                    name: "BABY BOY",
                    image: "https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyBoy_DESK"
                }])
  return (
    <>
    <div className='home'>
        <div className='home1'>
            <div className='home2'>
                <p>Black Friday Sale</p>
                <p>40% OFF EVERYTHING</p>
                <p>Because it's treat everyone season</p>
            </div>
            <div className='home3'>
                <button>WOMEN</button>
                <button>MATERNITY</button>
                <button>MEN</button>
                <button>GIRLS</button>
                <button>BOYS</button>
                <button>TODDLER GIRL</button>
                <button>TODDLER BOYS</button>
                <button>BABY GIRL</button>
                <button>BABY BOYS</button>
            </div>
            <div className='home4'>
                <p>60% Off Really Big Deals</p>
                <p>For Wrapping & Keeping</p>
            </div>

            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                {products.map((pro) => (
                    <div style={{width: "49%", height: "700px", marginTop: "20px"}}>
                        <img style={{width: "100%", height: "600px"}} src={pro.image}/>
                        <div style={{display: "flex", justifyContent: "space-between", marginTop: "15px"}}>
                            <div style={{color: "white"}}>
                                <h1 style={{fontSize: "45px"}}>{pro.name}</h1>
                                <p style={{fontSize: "20px"}}>{pro.para}</p>
                            </div>
                            <button style={{width: "100px", height: "40px", backgroundColor: "white"}}>{pro.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>


        <div className='home5'>
            <h1>Black Friday Deals You'll Love</h1>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "80%", margin: "auto", marginTop: "20px"}}>
                {tshirt.map((pro) => (
                    <div style={{width: "19%", height: "350px"}}>
                        <img style={{width: "100%", height: "300px"}} src={pro.image}/>
                        <p style={{color: "white", marginTop: "10px"}}>{pro.name}</p>
                    </div>
                ))}
            </div>
        </div>


        <div className='home5'>
            <h1>Shop by Division</h1>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "80%", margin: "auto", marginTop: "30px"}}>
                {baby.map((pro) => (
                    <div style={{width: "24%", height: "450px", marginTop: "20px"}}>
                        <img style={{width: "100%", height: "400px"}} src={pro.image}/>
                        <p style={{color: "white", marginTop: "20px"}}>{pro.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Homepage
